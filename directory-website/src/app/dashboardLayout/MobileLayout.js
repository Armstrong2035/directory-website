// components/layout/MobileLayout.tsx
"use client";

import {
  Box,
  CssBaseline,
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Select,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import SidebarContent from "./SidebarContent";

const drawerWidth = 240;

export default function MobileLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Select defaultValue="EN" size="small" sx={{ mx: 2 }}>
              <MenuItem value="EN">EN</MenuItem>
              <MenuItem value="FR">FR</MenuItem>
            </Select>
            <Avatar sx={{ width: 32, height: 32 }} />
            <ArrowDropDownIcon sx={{ ml: 1 }} />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#F6FCF7",
            border: "none",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6">Rashii</Typography>
        </Toolbar>
        <SidebarContent />
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#F5F6FA", mt: 8, p: 3, width: "100%" }}
      >
        {children}
      </Box>
    </Box>
  );
}
