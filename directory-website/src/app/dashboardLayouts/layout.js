"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  AppBar,
  Typography,
  IconButton,
  Avatar,
  MenuItem,
  Select,
  CircularProgress,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import { dashboardTypographyStyles } from "@/styles/typography";
import { useAuth } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

const drawerWidth = 240;

const navItems = [
  { text: "Dashboard", icon: <HistoryToggleOffIcon />, href: "/dashboard" },
  { text: "My Inventory", icon: <ChecklistIcon />, href: "/inventory" },
  { text: "Inbox", icon: <ForumOutlinedIcon />, href: "/inbox" },
  { text: "Calendar", icon: <CalendarMonthOutlinedIcon />, href: "/calendar" },
];

const secondaryNavItems = [
  { text: "Settings", icon: <SettingsOutlinedIcon />, href: "/settings" },
  { text: "Logout", icon: <PowerSettingsNewOutlinedIcon />, href: "/logout" },
];

export default function DashboardLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const auth = useAuth();
  const user = auth.user;

  useEffect(() => {
    if (user) {
      // Optionally fetch user-specific data here
    }
  }, [user]);

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(255,255,255,0.7)",
          zIndex: 9999,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* App Bar */}
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

      {/* Drawer */}
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
          <Typography variant="h6" noWrap>
            Rashii
          </Typography>
        </Toolbar>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.text} sx={{ pr: 2, pl: 2 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                selected={pathname === item.href}
                sx={{
                  "&.Mui-selected": {
                    bgcolor: "#3FB65B",
                    "&:hover": { bgcolor: "#3FB65B" },
                  },
                  "&:hover": { bgcolor: "transparent" },
                }}
              >
                <ListItemIcon
                  sx={{ color: pathname === item.href ? "white" : "inherit" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    ...dashboardTypographyStyles.smallSemiBold,
                    color: pathname === item.href ? "white" : "inherit",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {secondaryNavItems.map((item) => (
            <ListItem key={item.text} sx={{ pr: 2, pl: 2 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                selected={pathname === item.href}
                sx={{
                  "&.Mui-selected": {
                    bgcolor: "#3FB65B",
                    "&:hover": { bgcolor: "#3FB65B" },
                  },
                  "&:hover": { bgcolor: "transparent" },
                }}
              >
                <ListItemIcon
                  sx={{ color: pathname === item.href ? "white" : "inherit" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    ...dashboardTypographyStyles.smallSemiBold,
                    color: pathname === item.href ? "white" : "inherit",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#F5F6FA", mt: 8, p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
}
