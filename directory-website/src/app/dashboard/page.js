"use client";
import React, { useEffect } from "react";
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
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthButtons from "../../components/auth/AuthButtons";
import { useAuth } from "../../contexts/AuthContext";

const drawerWidth = 240;

const navItems = ["Home", "Inventory", "Leads", "Offers", "Profile"];

export default function DashboardLayout({ children }) {
  const auth = useAuth();
  const router = useRouter();

  // Handle authentication redirect in useEffect to avoid render issues
  useEffect(() => {
    if (!auth.loading && !auth.user) {
      router.push("/signin");
    }
  }, [auth.loading, auth.user, router]);

  // Show loading spinner while auth is loading
  if (auth.loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Return null while redirect is happening
  if (!auth.user) {
    return null;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            My Dashboard
          </Typography>
          <AuthButtons />
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
        {children || (
          <Box>
            <Typography variant="h4" gutterBottom>
              Welcome to the Dashboard!
            </Typography>
            <Typography variant="body1">
              Hello, {auth.user.displayName || auth.user.email}!
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
