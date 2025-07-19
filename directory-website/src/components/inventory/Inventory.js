
import InventoryTable from "./InventoryList";
import DashboardFilters from "../dashboardContent/dashboardControls/DashboardFilters";
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
