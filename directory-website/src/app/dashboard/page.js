"use client";
import { Box } from "@mui/material";
import DashboardContent from "@/components/dashboardContent/DashboardContent";
import DashboardLayout from "../dashboardLayouts/layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Box>
        <DashboardContent />
      </Box>
    </DashboardLayout>
  );
}
