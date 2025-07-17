"use client"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import HeroSection from "../../components/home/HeroSection"
import Navbar from "../../components/home/Navbar"
import { Box } from "@mui/material"
import HowItWorksSection from "../../components/home/HowItWorksSection"
import ChooseTrackSection from "../../components/home/ChooseTrackSection"

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: "linear-gradient(135deg, #90EE90 0%, #32CD32 50%, #228B22 100%)" }}>
        <Navbar />
        <HeroSection />
      </Box>
      <HowItWorksSection />
      <ChooseTrackSection />
    </ThemeProvider>
  )
}
