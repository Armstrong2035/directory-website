"use client";
import { Box } from "@mui/material";
import DashboardContent from "../../components/dashboardContent/DashboardContent";
import DashboardLayout from "../dashboardLayout/layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardContent />
    </DashboardLayout>
  );
}
