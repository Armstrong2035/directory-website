"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const gradientBrandStyles = {
  background: "linear-gradient(90deg, #4f8cff 20%, #ffb86b 80%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontWeight: 900,
};

export default function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignIn = () => {
    router.push("/auth/signin");
    handleMenuClose();
  };

  const handleSignUp = () => {
    router.push("/auth/signup");
    handleMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(25, 33, 43, 0.8)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
        {/* Logo */}
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              ...gradientBrandStyles,
              fontSize: { xs: "1.5rem", md: "1.75rem" },
              fontWeight: 900,
            }}
          >
            Subarashi Scout
          </Typography>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              onClick={handleSignIn}
              sx={{
                color: "#fff",
                borderColor: "rgba(255, 255, 255, 0.3)",
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#4f8cff",
                  backgroundColor: "rgba(79, 140, 255, 0.1)",
                },
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              onClick={handleSignUp}
              sx={{
                background: "linear-gradient(90deg, #4f8cff 0%, #ffb86b 100%)",
                color: "#19212b",
                fontWeight: 700,
                px: 3,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #4f8cff 0%, #ffb86b 100%)",
                  opacity: 0.9,
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        ) : (
          /* Mobile Menu */
          <Box>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{
                color: "#fff",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#19212b",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 2,
                  mt: 1,
                  minWidth: 150,
                },
              }}
            >
              <MenuItem
                onClick={handleSignIn}
                sx={{
                  color: "#fff",
                  py: 1.5,
                  px: 3,
                  "&:hover": {
                    backgroundColor: "rgba(79, 140, 255, 0.1)",
                  },
                }}
              >
                Sign In
              </MenuItem>
              <MenuItem
                onClick={handleSignUp}
                sx={{
                  color: "#fff",
                  py: 1.5,
                  px: 3,
                  "&:hover": {
                    backgroundColor: "rgba(79, 140, 255, 0.1)",
                  },
                }}
              >
                Sign Up
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
