"use client"

import { Box, Container, Typography, Button, useTheme, useMediaQuery } from "@mui/material"
import Image from "next/image"
import FloatingElements from "./FloatingElements"
import { dashboardTypographyStyles } from "../../styles/typography"

export default function HeroSection() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <Box
      sx={{
        background: "#B0E57F",
        minHeight: "80vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: 0
      }}
    >
      {/* Background Building Image */}
      <Box
        sx={{
          position: "absolute",
          right: isMobile ? "-20%" : isTablet ? "0%" : "0%",
         bottom: 0,
         
          opacity: 0.8,
          zIndex: 1,
          width: isMobile ? "120%" : isTablet ? "80%" : "60%",
          height: "auto",
          
        }}
      >
        <Image
          src="/images/building.png"
          alt="Modern Building"
          width={800}
          height={600}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

    
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 4 : 8,
            
            minHeight: { xs: "100vh", md: "100vh" },
            
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              order: isMobile ? 2 : 1,
              pr: isMobile ? 0 : 4,
              paddingTop: 28,
              paddingLeft: 20
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: isMobile ? "2.5rem" : isTablet ? "3.5rem" : "4.5rem",
                
                color: "#1D3108",
                lineHeight: 1.1,
                mb: 3,
                ...dashboardTypographyStyles.extraLargeBold,
                fontWeight: 900,
              }}
            >
              Where Landlords Meet Sellers.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: isMobile ? "1.1rem" : "1.3rem",
                  fontWeight: 700,
                  color: "#2D5016",
                  mb: 1,
                }}
              >
                Backed by Trust.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: isMobile ? "1.1rem" : "1.3rem",
                  fontWeight: 700,
                  color: "#2D5016",
                  mb: 3,
                }}
              >
                Powered by Intelligence.
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: isMobile ? "1rem" : "1.1rem",
                color: "#2D5016",
                mb: 4,
                lineHeight: 1.6,
                maxWidth: "500px",
              }}
            >
              A secure, data-driven platform that connects landlords, sellers, and brokers — transparently and
              efficiently.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#2D5016",
                fontSize: isMobile ? "1rem" : "1.1rem",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: "50px",
                textTransform: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                "&:hover": {
                  backgroundColor: "#F5F5F5",
                  boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              CTA
            </Button>
          </Box>

          {/* Right Content */}
          <Box
            sx={{
              order: isMobile ? 1 : 2,
              posi3tion: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: isMobile ? "400px" : "600px",
              height: "100%"
            }}
          >
            {/* Main Characters Image */}
            <Box
              sx={{
                position: "absolute",
                zIndex: 3,
                width: isMobile ? "280px" : isTablet ? "550px" : "700px",
                height: "auto",
                bottom: 0
              }}
            >
              <Image
                src="/images/characters.png"
                alt="Professional Meeting"
                width={600}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  bottom: 0
                }}
              />
            </Box>
            <Box
        sx={{
          position: "absolute",
          bottom: "200px",
          right: isMobile ? "15%" : "15%",
        
          width: isMobile ? 60 : 100,
          height: isMobile ? 60 : 100,
          zIndex: 4,
        }}
      >
        <Image
          src="/images/house-icon.png"
          alt="House Icon"
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 4px 20px rgba(0, 255, 0, 0.4))",
          }}
        />
      </Box>

            {/* Floating Elements */}
            <FloatingElements isMobile={isMobile} isTablet={isTablet} />
          </Box>
        </Box>
     
    </Box>
  )
}
