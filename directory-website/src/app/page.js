"use client";

import { Container, Box } from "@mui/material";
import Hero from "@/components/landing/Hero";
import NavBar from "@/components/navigation/NavBar";

export default function LandingPage() {
  return (
    <Box sx={{ bgcolor: "#19212b" }}>
      <NavBar />
      <Hero />
    </Box>
  );
}
