"use client";

import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import SpeedIcon from "@mui/icons-material/Speed";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import SecurityIcon from "@mui/icons-material/Security";

const MotionBox = motion(Box);

export default function ForBuyers() {
  const benefits = [
    {
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      title: "Off-Market Properties",
      description:
        "Access exclusive listings not available on traditional platforms",
    },
    {
      icon: <ChatIcon sx={{ fontSize: 40 }} />,
      title: "Direct Communication",
      description:
        "Connect directly with motivated sellers - no intermediaries",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: "No Pressure",
      description: "Browse and communicate at your own pace - no pushy agents",
    },
    {
      icon: <PriceCheckIcon sx={{ fontSize: 40 }} />,
      title: "Faster Process",
      description: "Streamlined negotiations and quicker closing times",
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
      title: "Transparent Pricing",
      description: "Clear pricing with no hidden fees or surprises",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: "Verified Sellers",
      description: "Peace of mind with thoroughly vetted property owners",
    },
  ];

  return (
    <Box sx={{ py: 12, position: "relative", bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        height: "100%",
                        borderRadius: 4,
                        background: "white",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: "primary.main",
                          mb: 2,
                        }}
                      >
                        {benefit.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1,
                          fontWeight: 600,
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Paper>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={5}>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 800,
                  mb: 3,
                  background: "linear-gradient(45deg, #1a237e, #0d47a1)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                For Property Buyers
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: "text.primary",
                  mb: 4,
                  fontWeight: 500,
                }}
              >
                List Your Requirements, Find Your Perfect Match
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  mb: 4,
                }}
              >
                Stop browsing endless listings that don&apos;t match what you
                really want. Tell us exactly what you&apos;re looking for, and
                we&apos;ll connect you with sellers who have it.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "primary.main",
                }}
              >
                Submit your requirements and get matched with perfect properties
                within 24 hours.
              </Typography>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
