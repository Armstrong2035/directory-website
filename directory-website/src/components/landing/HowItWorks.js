"use client";

import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SellIcon from "@mui/icons-material/Sell";
import SearchIcon from "@mui/icons-material/Search";
import MatchIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function HowItWorks() {
  const sellerSteps = [
    {
      icon: <UploadIcon color="primary" />,
      text: "List - Upload your property details and photos",
    },
    {
      icon: <VerifiedUserIcon color="primary" />,
      text: "Verify - Complete our quick verification process",
    },
    {
      icon: <ConnectWithoutContactIcon color="primary" />,
      text: "Connect - Receive inquiries from verified buyers",
    },
    {
      icon: <SellIcon color="primary" />,
      text: "Sell - Negotiate directly and close on your terms",
    },
  ];

  const buyerSteps = [
    {
      icon: <SearchIcon color="primary" />,
      text: "Submit - Tell us exactly what you're looking for",
    },
    {
      icon: <VerifiedUserIcon color="primary" />,
      text: "Verify - Complete financial and identity verification",
    },
    {
      icon: <MatchIcon color="primary" />,
      text: "Match - Get connected with sellers who match your criteria",
    },
    {
      icon: <ShoppingCartIcon color="primary" />,
      text: "Buy - Deal directly with sellers and close faster",
    },
  ];

  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ mb: 4 }}
      >
        How It Works
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: "100%", borderRadius: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "primary.main" }}
            >
              For Sellers:
            </Typography>
            {sellerSteps.map((step, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <Box sx={{ mr: 2 }}>{step.icon}</Box>
                <Typography variant="body1">{step.text}</Typography>
              </Box>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: "100%", borderRadius: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "primary.main" }}
            >
              For Buyers:
            </Typography>
            {buyerSteps.map((step, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <Box sx={{ mr: 2 }}>{step.icon}</Box>
                <Typography variant="body1">{step.text}</Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
