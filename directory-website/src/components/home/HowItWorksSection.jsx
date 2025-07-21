"use client"

import { Box, Container, Typography, Button, useTheme, useMediaQuery } from "@mui/material"
import ProcessStep from "./ProcessStep"

export default function HowItWorksSection() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"))

  const steps = [
    {
      id: 1,
      title: "You Sign Up:",
      description: "Submit your goals, documents, and role (Landlord / Seller / Broker)",
      circleColor: "#4CAF50",
    },
    {
      id: 2,
      title: "We Match You:",
      description: "Get matched based on data, preferences, and verified intent.",
      circleColor: "#F4D03F",
    },
    {
      id: 3,
      title: "You Close or Earn",
      description: "Track deal flow, commissions, and outcomes — all in one secure dashboard.",
      circleColor: "#4CAF50",
    },
  ]

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5DC",
        py: { xs: 6, md: 10 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
              fontWeight: 700,
              color: "#2D5016",
              mb: 3,
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            }}
          >
            How it Works
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              color: "#666666",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            A secure, data-driven platform that connects landlords, sellers, and brokers — transparently and
            efficiently.
          </Typography>
        </Box>

        {/* Process Steps */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "center" : "flex-start",
            gap: { xs: 4, md: 2 },
            mb: { xs: 6, md: 8 },
            position: "relative",
          }}
        >
          {/* Connecting Lines - Desktop Only */}
          {!isMobile && (
            <>
              {/* First connecting line */}
              <Box
                sx={{
                  position: "absolute",
                  top: "60px",
                  left: "calc(33.33% - 60px)",
                  width: "120px",
                  height: "2px",
                  borderTop: "2px dashed #999999",
                  zIndex: 1,
                }}
              />
              {/* Second connecting line */}
              <Box
                sx={{
                  position: "absolute",
                  top: "60px",
                  right: "calc(33.33% - 60px)",
                  width: "120px",
                  height: "2px",
                  borderTop: "2px dashed #999999",
                  zIndex: 1,
                }}
              />
            </>
          )}

          {steps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} isMobile={isMobile} isTablet={isTablet} />
          ))}
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#90EE90",
              color: "#2D5016",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              fontWeight: 600,
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 2 },
              borderRadius: "50px",
              textTransform: "none",
              boxShadow: "0 4px 20px rgba(144, 238, 144, 0.3)",
              minWidth: { xs: "200px", md: "250px" },
              "&:hover": {
                backgroundColor: "#7FDD7F",
                boxShadow: "0 6px 25px rgba(144, 238, 144, 0.4)",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
