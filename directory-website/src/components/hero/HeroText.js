"use client";

import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HeroText() {
  const router = useRouter();

  return (
    <Box
      sx={{
        p: { xs: 4, md: 8 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2.5rem", md: "3.5rem" },
        }}
      >
        Find Your Perfect Property
      </Typography>

      <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Connect directly with verified buyers and sellers. No middlemen, no
        hassles.
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/ap")}
          sx={{ px: 4, py: 1.5 }}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => router.push("/inventory")}
          sx={{ px: 4, py: 1.5 }}
        >
          Browse Properties
        </Button>
      </Box>
    </Box>
  );
}
