"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Divider,
  Button,
  TextField,
  Grid,
  useTheme,
  CircularProgress,
} from "@mui/material";
import ListingGrid from "@/components/shared/ListingGrid";
import ListingModal from "@/components/shared/ListingModal";
import { createListing, getListings } from "../../lib/listings";
import { useAuth } from "../../contexts/AuthContext";

const DashboardWithTabs = () => {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const [inventoryListings, setInventoryListings] = useState([]);
  const [sellRequests, setSellRequests] = useState([]);
  const [inventoryModalOpen, setInventoryModalOpen] = useState(false);
  const [sellRequestModalOpen, setSellRequestModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleTabChange = (event, newValue) => setTabIndex(newValue);

  // Inventory Handlers
  const handleInventoryOpen = () => setInventoryModalOpen(true);
  const handleInventoryClose = () => setInventoryModalOpen(false);

  // Sell Request Handlers
  const handleSellRequestOpen = () => setSellRequestModalOpen(true);
  const handleSellRequestClose = () => setSellRequestModalOpen(false);

  const auth = useAuth();
  const user = auth.user;

  const handleAddInventoryListing = async (newListing) => {
    setIsLoading(true);
    try {
      const { id, error: createError } = await createListing(
        newListing,
        user.uid,
        user
      );

      if (createError) {
        alert(`Error creating listing: ${createError}`);
        setIsLoading(false);
        return;
      }

      alert("Listing created successfully");
      setIsLoading(false);
      handleInventoryClose();
      fetchAllListings(); // Refresh the listings
    } catch (error) {
      console.error("Error in handleAddInventoryListing:", error);
      alert(`Error creating listing: ${error.message}`);
      setIsLoading(false);
    }
  };

  const handleAddSellRequest = async (newRequest) => {
    setIsLoading(true);
    try {
      // For now, we'll treat sell requests the same as listings
      // In a real app, you might have a separate collection for sell requests
      const { id, error: createError } = await createListing(
        newRequest,
        user.uid,
        user
      );

      if (createError) {
        alert(`Error creating sell request: ${createError}`);
        setIsLoading(false);
        return;
      }

      alert("Sell request created successfully");
      setIsLoading(false);
      handleSellRequestClose();
      fetchAllSellRequests(); // Refresh the sell requests
    } catch (error) {
      console.error("Error in handleAddSellRequest:", error);
      alert(`Error creating sell request: ${error.message}`);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchAllListings();
      fetchAllSellRequests();
    }
  }, [user]);

  const fetchAllListings = async () => {
    setLoading(true);
    const { listings: allListings, error } = await getListings(); // No userId = get all listings

    if (error) {
      console.error("Error fetching listings:", error);
    } else {
      setInventoryListings(allListings);
    }

    setLoading(false);
  };

  const fetchAllSellRequests = async () => {
    // For now, we'll use the same listings but filter them
    // In a real app, you might have a separate collection for sell requests
    const { listings: allListings, error } = await getListings();

    if (error) {
      console.error("Error fetching sell requests:", error);
    } else {
      // Filter for sell requests (you might want to add a field to distinguish them)
      setSellRequests(
        allListings.filter((listing) => listing.listingType === "Sale")
      );
    }
  };

  // Show a full-page loading spinner overlay when loading
  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(255,255,255,0.7)",
          zIndex: 9999,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4 },
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
      }}
    >
      {/* Header */}
      <Box mb={4}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Manage your inventory and sell requests from one place.
        </Typography>
      </Box>

      {/* Tabs */}
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3 }}
      >
        <Tab label="Inventory" />
        <Tab label="Buy request" />
      </Tabs>
      <Divider sx={{ mb: 4 }} />

      {/* Tab Panels */}
      {tabIndex === 0 && (
        <Box>
          <ListingGrid
            listings={inventoryListings}
            onAddClick={handleInventoryOpen}
            title="My Inventory"
            emptyMessage="No inventory listings found. Add your first listing!"
          />
          <ListingModal
            open={inventoryModalOpen}
            onClose={handleInventoryClose}
            onSubmit={handleAddInventoryListing}
            isLoading={isLoading}
            title="Add New Inventory Listing"
            submitButtonText="Create Listing"
          />
        </Box>
      )}

      {tabIndex === 1 && (
        <Box>
          <ListingGrid
            listings={sellRequests}
            onAddClick={handleSellRequestOpen}
            title="My Buy Requests"
            emptyMessage="No sell requests found. Create your first sell request!"
          />
          <ListingModal
            open={sellRequestModalOpen}
            onClose={handleSellRequestClose}
            onSubmit={handleAddSellRequest}
            isLoading={isLoading}
            title="Create New Sell Request"
            submitButtonText="Create Sell Request"
          />
        </Box>
      )}
    </Box>
  );
};

export default DashboardWithTabs;
