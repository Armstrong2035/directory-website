"use client";

import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SecurityIcon from "@mui/icons-material/Security";
import MessageIcon from "@mui/icons-material/Message";
import GavelIcon from "@mui/icons-material/Gavel";

const MotionBox = motion(Box);

export default function ForSellers() {
  const benefits = [
    {
      icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
      title: "Keep 100% of Your Sale",
      description:
        "No agent commissions - keep every dollar of your sale price",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: "Pre-qualified Buyers",
      description: "Meet only serious buyers - no tire kickers or time wasters",
    },
    {
      icon: <HomeIcon sx={{ fontSize: 40 }} />,
      title: "Full Control",
      description: "Manage showings, negotiations, and timeline on your terms",
    },
    {
      icon: <MessageIcon sx={{ fontSize: 40 }} />,
      title: "Secure Communication",
      description: "Safe messaging and document sharing with verified buyers",
    },
    {
      icon: <GavelIcon sx={{ fontSize: 40 }} />,
      title: "Legal Support",
      description: "Professional legal assistance when you need it",
    },
  ];

  return (
    <Box sx={{ py: 12, position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
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
                For Property Sellers
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: "text.primary",
                  mb: 4,
                  fontWeight: 500,
                }}
              >
                List Your Property, Meet Your Buyer
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
                Tired of paying hefty agent commissions? Ready to take control
                of your sale? Our platform connects you directly with verified
                buyers who are serious about purchasing.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "primary.main",
                }}
              >
                List your property in under 10 minutes and start meeting real
                buyers today.
              </Typography>
            </MotionBox>
          </Grid>

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
                        background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
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
        </Grid>
      </Container>
    </Box>
  );
}
