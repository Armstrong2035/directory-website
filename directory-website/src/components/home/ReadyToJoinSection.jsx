"use client"

import { Box, Container, Typography, Button, useTheme, useMediaQuery } from "@mui/material"

export default function ReadyToJoinSection() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box
      sx={{
        backgroundColor: "#52A230",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Swirls */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
          zIndex: 1,
        }}
      >
        <img
          src="/images/green-swirl.svg"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Content Card */}
        <Box
          sx={{
            backgroundColor: "#B0E57F",
            borderRadius: "40px",
            p: { xs: 4, md: 8 },
            textAlign: "center",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
              fontWeight: 700,
              color: "#FFFFFF",
              mb: { xs: 3, md: 4 },
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            }}
          >
            Ready to Join Rashii?
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              fontWeight: 500,
              color: "#2D5016",
              mb: { xs: 4, md: 6 },
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Subscribe to your role. Discover the future of real estate matchmaking.
          </Typography>

          {/* Join Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#2D5016",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              fontWeight: 600,
              px: { xs: 6, md: 8 },
              py: { xs: 1.5, md: 2 },
              borderRadius: "50px",
              textTransform: "none",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              minWidth: { xs: "200px", md: "250px" },
              "&:hover": {
                backgroundColor: "#F5F5F5",
                boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            Join
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
