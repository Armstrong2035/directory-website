import { Box, Typography } from "@mui/material"
import Image from "next/image"

export default function FloatingElements({ isMobile, isTablet }) {
  const elementSize = isMobile ? 80 : isTablet ? 100 : 150
  const fontSize = isMobile ? "0.9rem" : "1.1rem"

  return (
    <>
      {/* Intelligence Circle - Top Left */}
      <Box
        sx={{
          position: "absolute",
          top: isMobile ? "10%" : "15%",
          right: isMobile ? "10%" : "20%",
          width: elementSize,
          height: elementSize,
          backgroundColor: "#FCE97E",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          boxShadow: "0 4px 20px rgba(255, 215, 0, 0.3)",
        }}
      >
        <Typography
          sx={{
            color: "#2D5016",
            fontWeight: 600,
            fontSize: fontSize,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Intelligence
        </Typography>
      </Box>

      {/* Private Circle - Top Right */}
      <Box
        sx={{
          position: "absolute",
          top: isMobile ? "20%" : "25%",
          right: isMobile ? "5%" : "10%",
          width: elementSize,
          height: elementSize,
          backgroundColor: "#F5C197",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          boxShadow: "0 4px 20px rgba(255, 160, 122, 0.3)",
        }}
      >
        <Typography
          sx={{
            color: "#2D5016",
            fontWeight: 600,
            fontSize: fontSize,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Private
        </Typography>
      </Box>

      {/* House Icon - Center Right */}


      {/* Secure Circle - Bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: isMobile ? "15%" : "0%",
          right: isMobile ? "20%" : "18%",
          width: elementSize,
          height: elementSize,
          backgroundColor: "#FFFFFF",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          sx={{
            color: "#2D5016",
            fontWeight: 600,
            fontSize: fontSize,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Secure
        </Typography>
      </Box>

      {/* Additional decorative circles */}
      <Box
        sx={{
          position: "absolute",
          top: isMobile ? "5%" : "10%",
          right: isMobile ? "40%" : "45%",
          width: isMobile ? 40 : 60,
          height: isMobile ? 40 : 60,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: isMobile ? "5%" : "10%",
          right: isMobile ? "5%" : "15%",
          width: isMobile ? 30 : 50,
          height: isMobile ? 30 : 50,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
    </>
  )
}
