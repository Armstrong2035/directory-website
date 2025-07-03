"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getListing } from "@/lib/listings";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  CircularProgress,
  Alert,
  Stack,
  Container,
} from "@mui/material";
import Verification from "@/components/listing/verification/Verification";
import Prospects from "@/components/listing/prospects/Prospects";
import Offer from "@/components/listing/offer/Offer";

const ListingPage = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const { listing, error } = await getListing(id);
        if (error) {
          setError(error);
        } else {
          setListing(listing);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchListing();
    }
  }, [id]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Alert severity="error">Error: {error}</Alert>
      </Box>
    );
  }

  if (!listing) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Alert severity="info">Listing not found.</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {listing.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {listing.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {listing.projectName}
        </Typography>
        <Typography variant="h6" color="primary" fontWeight="bold">
          {`Price: ${listing.price}`}
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="listing tabs"
        >
          <Tab label="Verification" />
          <Tab label="Prospects" />
          <Tab label="Offer" />
        </Tabs>
      </Box>
      {selectedTab === 0 && <Verification />}
      {selectedTab === 1 && <Prospects />}
      {selectedTab === 2 && <Offer />}
    </Box>
  );
};

export default ListingPage;
