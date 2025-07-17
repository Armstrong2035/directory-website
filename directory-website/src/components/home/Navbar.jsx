"use client"

import { AppBar, Toolbar, Box, Button, useTheme, useMediaQuery, IconButton, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"

export default function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"))
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const navItems = ["How It Works", "Landlords", "Sellers", "Brokers", "Data Network", "Trust & Privacy"]

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          py: 2,
        }}
      >
        {/* Left Navigation Items */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#2D5016",
                    fontSize: "1rem",
                    fontWeight: 500,
                    textTransform: "none",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                    minWidth: "auto",
                    padding: "8px 12px",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          ) : (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{
                  color: "#2D5016",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                  },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem key={item} onClick={handleMenuClose} sx={{ color: "#2D5016", fontWeight: 500 }}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Box>

        {/* Right Action Buttons */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD700",
              color: "#2D5016",
              fontSize: isMobile ? "0.9rem" : "1rem",
              fontWeight: 600,
              px: isMobile ? 2 : 3,
              py: 1,
              borderRadius: "25px",
              textTransform: "none",
              boxShadow: "0 2px 10px rgba(255, 215, 0, 0.3)",
              "&:hover": {
                backgroundColor: "#FFC107",
                boxShadow: "0 4px 15px rgba(255, 215, 0, 0.4)",
              },
            }}
          >
            Log In
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF6B35",
              color: "#FFFFFF",
              fontSize: isMobile ? "0.9rem" : "1rem",
              fontWeight: 600,
              px: isMobile ? 2 : 3,
              py: 1,
              borderRadius: "25px",
              textTransform: "none",
              boxShadow: "0 2px 10px rgba(255, 107, 53, 0.3)",
              "&:hover": {
                backgroundColor: "#E55A2B",
                boxShadow: "0 4px 15px rgba(255, 107, 53, 0.4)",
              },
            }}
          >
            Join Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
