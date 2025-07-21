"use client"

import { Box, Typography } from "@mui/material"

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#E5E5E5",
        py: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: "0.9rem",
          color: "#666666",
          fontWeight: 400,
        }}
      >
        © 2025 Subarashi Real Estate. All rights reserved.
      </Typography>
    </Box>
  )
}
