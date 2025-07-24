"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
// import InventoryGrid from "@/components/inventory/InventoryGrid";
// import ListingModal from "@/components/inventory/ListingModal";
import DashboardLayout from "../dashboardLayout/layout";
import Inventory from "../../components/inventory/Inventory";
export default function Page() {
  const [open, setOpen] = useState(false);
  const [listings, setListings] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddListing = (newListing) => {
    setListings((prev) => [...prev, newListing]);
    handleClose();
  };

  return (
    <DashboardLayout>
      <Inventory />
    </DashboardLayout>
  );
}
