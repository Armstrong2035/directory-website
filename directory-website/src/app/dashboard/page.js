"use client";
import React, { useState } from "react";
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
} from "@mui/material";
import InventoryGrid from "@/components/inventory/InventoryGrid";
import ListingModal from "@/components/inventory/ListingModal";
import { createListing } from "../../lib/listings";
import { useAuth } from "../../contexts/AuthContext";

const DashboardWithTabs = () => {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const [listings, setListings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const handleTabChange = (event, newValue) => setTabIndex(newValue);

  // Inventory Handlers
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const auth = useAuth()
  const user = auth.user

  const handleAddListing = async (newListing) => {
    setIsLoading(true)
    const { id, error: createError } = await createListing(newListing, user.uid, user)
    alert(
      "Listing created successfully"
    );
    setIsLoading(false)
    handleClose();
  };

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
          Manage your inventory and requests from one place.
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
        <Tab label="Buy Request" />
      </Tabs>
      <Divider sx={{ mb: 4 }} />

      {/* Tab Panels */}
      {tabIndex === 0 && (
        <Box>
          <InventoryGrid listings={listings} onAddClick={handleOpen} />
          <ListingModal
            open={modalOpen}
            onClose={handleClose}
            onSubmit={handleAddListing}
          />
        </Box>
      )}

      {tabIndex === 1 && (
        <Box maxWidth="sm">
          <Typography variant="h6" gutterBottom>
            Make a Buy Request
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Let us know what kind of vehicle you're looking for, and we'll do
            our best to match it.
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Vehicle Type" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Preferred Make/Model"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Budget" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Additional Notes"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Submit Request
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default DashboardWithTabs;
