"use client";

import { Container, Box } from "@mui/material";
import Hero from "@/components/landing/Hero";
import NavBar from "@/components/navigation/NavBar";

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function LandingPage() {
  return (
    <Box sx={{ bgcolor: "#19212b" }}>
      <NavBar />
      <Hero />
    </Box>
  );

  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.loading) {
      if (auth.user) {
        router.push('/dashboard');
      } else {
        router.push('/signin');
      }
    }
  }, [auth.loading, auth.user, router]);


  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: "linear-gradient(135deg, #005244 0%, #22ab72 100%)"
      }}
    >
      <CircularProgress size={60} sx={{ color: 'white', mb: 2 }} />
      <Typography variant="h6" sx={{ color: 'white' }}>
        Loading...
      </Typography>
    </Box>
  );
}
