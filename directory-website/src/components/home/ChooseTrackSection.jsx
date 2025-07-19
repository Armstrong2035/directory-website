"use client"

import { Box, Container, Typography, Button, useTheme, useMediaQuery } from "@mui/material"
import TrackCard from "./TrackCard"

export default function ChooseTrackSection() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"))

  const tracks = [
    {
      id: "sellers",
      title: "Sellers",
      image: "/images/seller-person.png",
      backgroundColor: "#F4D03F",
      decorationImage: "/images/yellow-decoration.svg",
      decorationType: "yellow-swirl",
    },
    {
      id: "buyers",
      title: "Buyers",
      image: "/images/buyer-person.png",
      backgroundColor: "#90EE90",
      decorationImage: "/images/green-decoration.svg",
      decorationType: "green-swirl",
    },
    {
      id: "brokers",
      title: "Brokers",
      image: "/images/broker-person.png",
      backgroundColor: "#F9D8EE",
      decorationImage: "/images/pink-decoration.svg",
      decorationType: "pink-swirl",
    },
  ]

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5DC",
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "200px",
          height: "400px",
          opacity: 0.1,
          zIndex: 1,
        }}
      >
        <img
          src="/images/green-swirl.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
              fontWeight: 700,
              color: "#2D4A87",
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            }}
          >
            Choose your Track
          </Typography>
        </Box>

        {/* Track Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1fr 1fr",
            gap: { xs: 3, md: 4 },
            mb: { xs: 6, md: 8 },
            justifyItems: "center",
          }}
        >
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} isMobile={isMobile} isTablet={isTablet} />
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
            Choose Your Role
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
