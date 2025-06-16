"use client";
import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  CssBaseline,
} from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;

const navItems = ["Home", "Inventory", "Leads", "Offers", "Profile"];

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            My Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {navItems.map((text) => (
              <Link
                href={`/${text.toLowerCase()}`}
                key={text}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem button>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children || <Typography>Welcome to the Dashboard!</Typography>}
      </Box>
    </Box>
  );
}
