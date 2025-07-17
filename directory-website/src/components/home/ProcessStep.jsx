import { Box, Typography } from "@mui/material"

export default function ProcessStep({ step, index, isMobile, isTablet }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        flex: 1,
        maxWidth: isMobile ? "300px" : "350px",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Circle */}
      <Box
        sx={{
          width: { xs: 80, md: 120 },
          height: { xs: 80, md: 120 },
          backgroundColor: step.circleColor,
          borderRadius: "50%",
          mb: { xs: 3, md: 4 },
          boxShadow: `0 4px 20px ${step.circleColor}40`,
        }}
      />

      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "1.3rem", md: "1.6rem" },
          fontWeight: 700,
          color: "#2D5016",
          mb: { xs: 2, md: 3 },
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        }}
      >
        {step.title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          color: "#666666",
          lineHeight: 1.6,
          maxWidth: "280px",
        }}
      >
        {step.description}
      </Typography>

      {/* Mobile Connecting Line */}
      {isMobile && index < 2 && (
        <Box
          sx={{
            width: "2px",
            height: "40px",
            backgroundColor: "#999999",
            mt: 3,
            opacity: 0.5,
          }}
        />
      )}
    </Box>
  )
}
