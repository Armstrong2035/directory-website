"use client"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import HeroSection from "../../components/home/HeroSection"
import Navbar from "../../components/home/Navbar"
import { Box } from "@mui/material"
import HowItWorksSection from "../../components/home/HowItWorksSection"
import ChooseTrackSection from "../../components/home/ChooseTrackSection"
import BuiltOnVerifiedData from "../../components/home/BuiltOnSection"
import TrustPrivacySection from "../../components/home/TrustPrivacySection"
import ReadyToJoinSection from "../../components/home/ReadyToJoinSection"
import Footer from "../../components/home/Footer"

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
     
      <Box sx={{ backgroundColor: "#B0E57F", paddingTop: 0 }}>
        <Navbar />
        <HeroSection />
      </Box>
      <HowItWorksSection />
      <ChooseTrackSection />
      <BuiltOnVerifiedData />
      <TrustPrivacySection />
      <ReadyToJoinSection />
      <Footer />
    </ThemeProvider>
  )
}
