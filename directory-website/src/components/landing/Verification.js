"use client";

import { Box, Typography, Grid, Paper } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SecurityIcon from "@mui/icons-material/Security";
import MonitorIcon from "@mui/icons-material/Monitor";

export default function Verification() {
  const verificationSteps = [
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40 }} color="primary" />,
      title: "Identity Verification",
      description: "Government ID and background checks",
    },
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 40 }} color="primary" />,
      title: "Financial Verification",
      description:
        "Proof of funds for buyers, ownership verification for sellers",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} color="primary" />,
      title: "Intent Verification",
      description: "Serious buyers and sellers only - no browsing allowed",
    },
    {
      icon: <MonitorIcon sx={{ fontSize: 40 }} color="primary" />,
      title: "Ongoing Monitoring",
      description: "Continuous verification to maintain platform integrity",
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
        🛡️ 100% Verified Users Only
      </Typography>

      <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
        Every buyer and seller on our platform goes through our rigorous
        verification process:
      </Typography>

      <Grid container spacing={3}>
        {verificationSteps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              <Box sx={{ mb: 2 }}>{step.icon}</Box>
              <Typography variant="h6" gutterBottom>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
