import { dashboardTypographyStyles } from "@/styles/typography";
import { Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import DashboardCards from "./dashboardControls/DashboardCards";
import DashboardFilters from "./dashboardControls/DashboardFilters";
import InventoryList from "../inventory/InventoryList";
import { Inventory } from "@mui/icons-material";

export default function DashboardContent() {
  return (
    <Box
      sx={{
        height: "100%",

        backgroundColor: "#F5F6FA",
        p: 10,
      }}
    >
      <Box>
        <Typography sx={{ ...dashboardTypographyStyles.largeBold }}>
          Dashboard
        </Typography>
        <Typography sx={{ ...dashboardTypographyStyles.tinyLight }}>
          Manage your inventory and deals from one place
        </Typography>
      </Box>
      <Divider sx={{ my: 4 }} />

      <DashboardCards />

      <Divider sx={{ my: 4 }} />

      <DashboardFilters />

      <Divider sx={{ my: 4 }} />

      <InventoryList />
    </Box>
  );
}
