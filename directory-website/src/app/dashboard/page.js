"use client";

import React from "react";
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
import DashboardContent from "@/components/dashboardContent/DashboardContent";

const drawerWidth = 240;

const navItems = [
  { text: "Dashboard", icon: <HistoryToggleOffIcon /> },
  { text: "My Inventory", icon: <ChecklistIcon /> },
  { text: "Inbox", icon: <ForumOutlinedIcon /> },
  { text: "Calendar", icon: <CalendarMonthOutlinedIcon /> },
];

const secondaryNavItems = [
  { text: "Settings", icon: <SettingsOutlinedIcon /> },
  { text: "Logout", icon: <PowerSettingsNewOutlinedIcon /> },
];

export default function PermanentDrawer() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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
          border: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "flex-end", border: "none" }}>
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
          {navItems.map((item, index) => (
            <ListItem key={item.text} sx={{ pr: 2, pl: 2 }}>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
                sx={{
                  "&.Mui-selected": {
                    bgcolor: "#3FB65B",
                    "&:hover": {
                      bgcolor: "#3FB65B",
                    },
                  },
                  "&:hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                <ListItemIcon
                  sx={{ color: selectedIndex === index ? "white" : "inherit" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    ...dashboardTypographyStyles.smallSemiBold,
                    color: selectedIndex === index ? "white" : "inherit",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {secondaryNavItems.map((item, index) => (
            <ListItem key={item.text} sx={{ pr: 2, pl: 2 }}>
              <ListItemButton
                selected={selectedIndex === index + navItems.length}
                onClick={() => setSelectedIndex(index + navItems.length)}
                sx={{
                  "&.Mui-selected": {
                    bgcolor: "#3FB65B",
                    "&:hover": {
                      bgcolor: "#3FB65B",
                    },
                  },
                  "&:hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      selectedIndex === index + navItems.length
                        ? "#fff"
                        : "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    ...dashboardTypographyStyles.smallSemiBold,
                    color:
                      selectedIndex === index + navItems.length
                        ? "white"
                        : "inherit",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#F5F6FA" }}>
        {(() => {
          switch (selectedIndex) {
            case 0:
              return <DashboardContent />;
            case 1:
              return <Typography>My Inventory content</Typography>;
            case 2:
              return <Typography>Inbox content</Typography>;
            case 3:
              return <Typography>Calendar content</Typography>;
            case 4:
              return <Typography>Settings content</Typography>;
            case 5:
              return <Typography>Logging out...</Typography>;
            default:
              return <Typography>Unknown tab</Typography>;
          }
        })()}
      </Box>
    </Box>
  );
}
