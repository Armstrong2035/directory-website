"use client";

import { Box, Typography, Paper, Divider } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function Contact() {
  const trustBadges = [
    { icon: <SecurityIcon />, text: "Secure" },
    { icon: <VerifiedUserIcon />, text: "Verified" },
    { icon: <HomeIcon />, text: "Direct" },
    { icon: <AttachMoneyIcon />, text: "Commission-Free" },
  ];

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" component="h2" gutterBottom align="center">
        Questions? We're Here to Help
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon color="primary" />
            <Typography variant="h6">1-800-REAL-BUY</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon color="primary" />
            <Typography variant="h6">support@directrealestate.com</Typography>
          </Box>
        </Box>

        <Typography variant="body1" sx={{ mb: 4 }}>
          Join thousands of verified buyers and sellers who've discovered a
          better way to do real estate.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {trustBadges.map((badge, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "primary.main",
              }}
            >
              {badge.icon}
              <Typography variant="body1" fontWeight="medium">
                {badge.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
