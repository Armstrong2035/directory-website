"use client"

import { Box, Container, Typography, useTheme, useMediaQuery } from "@mui/material"
import Image from "next/image"

export default function TrustPrivacySection() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5DC",
        py: { xs: 6, md: 20 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Content Card */}
        <Box
          sx={{
            backgroundColor: "#B0E57F",
            borderRadius: "40px",
            p: { xs: 4, md: 6, lg: 14 },
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: { xs: 4, md: 6, lg: 8 },
            minHeight: { xs: "auto", md: "300px" },
          }}
        >
          {/* Left Side - Trust Badge */}
          <Box
            sx={{
              flex: isMobile ? "none" : "0 0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "250px", md: "300px", lg: "350px" },
                height: { xs: "100px", md: "120px", lg: "140px" },
                position: "relative",
              }}
            >
              <Image
                src="/images/trusted.png"
                alt="Trusted Badge with 5 Stars"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>

          {/* Right Side - Content */}
          <Box
            sx={{
              
              textAlign:  "right",
            }}
          >
            {/* Main Heading */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4.5rem" },
                fontWeight: 700,
                color: "#2D5016",
                mb: { xs: 3, md: 4 },
               
                lineHeight: 1.1,
              }}
            >
              Trust &{" "}
              <Box component="span" sx={{ display: "block" }}>
                privacy
              </Box>
              Guarantee
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem", lg: "1.2rem" },
                color: "#2D5016",
                lineHeight: 1.6,
                
                textWrap: "wrap",
                textAlign: "right"
              }}
            >
              We protect your data with military-grade encryption, platform access controls, and signed NDAs. Your
              information stays safe, always.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
