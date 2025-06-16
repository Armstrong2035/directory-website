"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import InventoryGrid from "@/components/inventory/InventoryGrid";
import ListingModal from "@/components/inventory/ListingModal";
const Inventory = () => {
  const [open, setOpen] = useState(false);
  const [listings, setListings] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddListing = (newListing) => {
    setListings((prev) => [...prev, newListing]);
    handleClose();
  };

  return (
    <Box sx={{ p: 3 }}>
      <InventoryGrid listings={listings} onAddClick={handleOpen} />
      <ListingModal
        open={open}
        onClose={handleClose}
        onSubmit={handleAddListing}
      />
    </Box>
  );
};

export default Inventory;
