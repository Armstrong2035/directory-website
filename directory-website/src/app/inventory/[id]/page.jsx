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
  Divider,
} from "@mui/material";

import Offer from "@/components/listing/offer/Offer";
import { listings } from "../mock-data/listings";
import Verification from "@/components/listing/verification/Verification";
import Prospects from "@/components/listing/prospects/Prospects";
import DashboardLayout from "@/app/dashboardLayout/layout";
import ListingHeader from "@/components/listing/listing-header/ListingHeader";

const ListingPage = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const match = listings.find((l) => l.id === id);
    setListing(match || null);
    setLoading(false);
  }, [id]);

  console.log(listing);

  // useEffect(() => {
  //   const fetchListing = async () => {
  //     try {
  //       const { listing, error } = await getListing(id);
  //       if (error) {
  //         setError(error);
  //       } else {
  //         setListing(listing);
  //       }
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (id) {
  //     fetchListing();
  //   }
  // }, [id]);

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
    <DashboardLayout>
      <Box
        sx={{
          mx: 10,
          backgroundColor: "#FFFFFF",
          px: 5,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <ListingHeader listing={listing} />

        <Box
          sx={{
            flex: 1, // Take remaining space
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            mt: 3,
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            aria-label="listing tabs"
            sx={{
              "& .MuiTabs-indicator": {
                display: "none", // hides underline
              },
            }}
          >
            <Tab
              label="Verification"
              sx={{
                backgroundColor: selectedTab === 0 ? "#F6FCF7" : "white",
                color: "inherit",
                borderRadius: "15px 15px 0 0", // border radius only at the top
                margin: "0 8px",
                border: selectedTab === 0 ? "1px solid #606060B3" : "none",
                minHeight: "40px",
                "&:hover": {
                  backgroundColor: selectedTab === 0 ? "#F6FCF7" : "#f5f5f5",
                },
              }}
            />
            <Tab
              label="Prospects"
              sx={{
                backgroundColor: selectedTab === 1 ? "#F6FCF7" : "white",
                color: "#666",
                borderRadius: "15px 15px 0 0", // border radius only at the top
                margin: "0 8px",
                border: selectedTab === 1 ? "1px solid #606060B3" : "none",
                minHeight: "40px",
                "&:hover": {
                  backgroundColor: selectedTab === 1 ? "#F6FCF7" : "#f5f5f5",
                },
              }}
            />
            {/* <Tab
              label="Offer"
              sx={{
                backgroundColor: selectedTab === 2 ? "#F6FCF7" : "white",
                color: "#666",
                borderRadius: "8px 8px 0 0", // border radius only at the top
                margin: "0 8px",
                border: selectedTab === 2 ? "1px solid #606060" : "none",
                minHeight: "40px",
                "&:hover": {
                  backgroundColor: selectedTab === 2 ? "#F6FCF7" : "#f5f5f5",
                },
              }}
            /> */}
          </Tabs>

          <Box
            sx={{
              height: "60%",
            }}
          >
            {selectedTab === 0 && <Verification />}
            {selectedTab === 1 && <Prospects />}
            {/* {selectedTab === 2 && <Offer />} */}
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default ListingPage;
