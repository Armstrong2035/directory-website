// components/inventory/ListingModal.jsx
import React from "react";
import SharedListingModal from "../listing/ListingModal";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const ListingModal = ({}) => {
  const [inventoryModalOpen, setInventoryModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleInventoryOpen = () => setInventoryModalOpen(true);
  const handleInventoryClose = () => setInventoryModalOpen(false);
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
  return (
    <Box>
      <Box
        sx={{
          position: "absolute", // Make button fixed within Paper
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid #eee",
          bgcolor: "#fff",
          p: 3,
        }}
      >
        <Button
          fullWidth
          variant="contained"
          onClick={handleInventoryOpen}
          sx={{
            bgcolor: "#3FB65B",
            color: "white",
            "&:hover": { bgcolor: "#3FB65B" },
            py: 1.5,
          }}
        >
          Add Inventory
        </Button>
      </Box>
      <SharedListingModal
        open={inventoryModalOpen}
        onClose={handleInventoryClose}
        onSubmit={handleAddInventoryListing}
        isLoading={isLoading}
        title="Add New Listing"
        submitButtonText="Submit"
      />
    </Box>
  );
};

export default ListingModal;
