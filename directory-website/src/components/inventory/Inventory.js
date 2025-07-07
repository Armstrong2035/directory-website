import DashboardLayout from "@/app/dashboardLayout/layout";
import InventoryTable from "./InventoryList";
import DashboardFilters from "../dashboardContent/dashboardControls/DashboardFilters";
import ListingModal from "./ListingModal";
import { Divider, Box } from "@mui/material";
import { useState } from "react";

export default function Inventory() {
  return (
    <Box>
      <DashboardFilters />
      <Divider sx={{ my: 4 }} />
      <InventoryTable />
    </Box>
  );
}
