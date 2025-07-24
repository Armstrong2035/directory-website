// components/layout/DesktopLayout.tsx
"use client";

import {
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  Avatar,
  Select,
  MenuItem,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SidebarContent from "./SidebarContent";

const drawerWidth = 240;

export default function DesktopLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Select defaultValue="EN" size="small" sx={{ mx: 2 }}>
            <MenuItem value="EN">EN</MenuItem>
            <MenuItem value="FR">FR</MenuItem>
          </Select>
          <Avatar sx={{ width: 32, height: 32 }} />
          <ArrowDropDownIcon sx={{ ml: 1 }} />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
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
        sx={{ flexGrow: 1, bgcolor: "#F5F6FA", mt: 8, p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
}
