import { Box, Typography, Card } from "@mui/material"
import Image from "next/image"

export default function TrackCard({ track, isMobile, isTablet }) {
  return (
    <Card
      sx={{
        backgroundColor: track.backgroundColor,
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        width: { xs: "280px", md: "320px", lg: "360px" },
        height: { xs: "400px", md: "450px", lg: "500px" },
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 16px 48px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      {/* Background Decoration */}
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
          src={track.decorationImage || "/placeholder.svg"}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: { xs: 3, md: 4 },
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.8rem", md: "2.2rem", lg: "2.5rem" },
            fontWeight: 700,
            color: "#2D5016",
            mb: { xs: 3, md: 4 },
            textAlign: "center",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          }}
        >
          {track.title}
        </Typography>

        {/* Person Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: { xs: "200px", md: "240px", lg: "280px" },
              height: { xs: "250px", md: "300px", lg: "350px" },
              position: "relative",
            }}
          >
            <Image
              src={track.image || "/placeholder.svg"}
              alt={`${track.title} representative`}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  )
}
