"use client";

import Hero from "@/components/landing/Hero";
import NavBar from "@/components/navigation/NavBar";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import { Box, CircularProgress, Typography, Container } from "@mui/material";
import HowItWorks from "@/components/landing/HowItWorks";

export default function LandingPage() {
  return (
    <Box sx={{ bgcolor: "#19212b" }}>
      <NavBar />
      <Hero />
      <HowItWorks />
    </Box>
  );
}
