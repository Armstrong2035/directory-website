"use client";

import {
  Box,
  Typography,
  Card,
  Grid,
  Button,
  CardContent,
  CardHeader,
  Container,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SellIcon from "@mui/icons-material/Sell";
import SearchIcon from "@mui/icons-material/Search";
import MatchIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { typography } from "@/styles/typography";

import { StepConnector, stepConnectorClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.vertical}`]: {
    marginLeft: 16,
    padding: 0,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderLeftWidth: 3,
    borderLeftStyle: "dashed",
    borderColor: "#4f8cff", // change to match your theme
    opacity: 0.7,
    transition: "border-color 0.3s ease, opacity 0.3s ease",
  },
}));

const sectionIcons = {
  "For Sellers": <SellIcon sx={{ color: "#ffb86b" }} />,
  "For Buyers": <VerifiedUserIcon sx={{ color: "#4f8cff" }} />,
  "For Everyone": <MatchIcon sx={{ color: "#34d399" }} />,
};

const theWorkflow = [
  {
    title: "For Sellers",
    tagline: "List. Match. Close.",
    process: [
      "Submit your property.",
      "We verify and list it discreetly.",
      "Get matched with buyers who have already shown proof of funds.",
    ],
  },
  {
    title: "For Buyers",
    tagline: "Proof-Backed Access.",
    process: [
      "Apply to join the private buyer list.",
      "Upload proof of funds for verification.",
      "Get exclusive access to off-market, owner-listed properties.",
    ],
  },
  {
    title: "For Everyone",
    tagline: "Simple. Secure. Direct.",
    process: ["Sign Up", "Get matched", "Close deal"],
  },
];

export default function HowItWorks() {
  return (
    <Container
      sx={{
        mb: 6,

        minHeight: "100vh",
        py: 4,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: -15,
      }}
    >
      {/* Header */}
      <Typography variant="h6" sx={{ color: "#ffffff", opacity: 0.8, mb: 1 }}>
        How It Works
      </Typography>
      <Typography
        variant="h4"
        sx={{
          ...typography.body1,
          mb: 4,
          color: "#ffffff",
          fontWeight: 600,
        }}
      >
        No Middlemen. No Delays. Just Real People with real deals.
      </Typography>

      {/* Workflow Grid */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {theWorkflow.map((section, index) => (
          <Grid item size={{ xs: 12, md: 4 }} key={`section-${index}`}>
            <Card
              sx={{
                height: "100%",
                bgcolor: "#2a3441",
                border: "1px solid #374151",
                borderRadius: 3,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(270deg, #4f8cff, #ffb86b, #4f8cff)",
                  backgroundSize: "600% 600%",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  zIndex: -1,
                },
                "&:hover": {
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                  "&::before": {
                    opacity: 0.15,
                    animation: "gradientFlow 3s ease infinite",
                  },
                  "& .MuiCardHeader-title": {
                    background:
                      "linear-gradient(90deg, #4f8cff 20%, #ffb86b 80%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 900,
                  },
                },
              }}
            >
              <CardHeader
                avatar={sectionIcons[section.title]}
                title={section.title}
                sx={{
                  "& .MuiCardHeader-title": {
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                  },
                }}
              />
              <CardContent>
                <Typography
                  variant="caption"
                  sx={{ color: "#9ca3af", mb: 2, display: "block" }}
                >
                  {section.tagline}
                </Typography>

                <Stepper
                  orientation="vertical"
                  activeStep={-1}
                  connector={<CustomConnector />}
                  sx={{
                    "& .MuiStep-root": {
                      "& .MuiStepLabel-root": {
                        padding: "8px 0",
                      },
                      "& .MuiStepLabel-label": {
                        color: "#e5e7eb !important",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                      },
                      "& .MuiStepIcon-root": {
                        background:
                          "linear-gradient(90deg, #4f8cff 20%, #ffb86b 80%)",
                        borderRadius: "50%",
                        width: 32,
                        height: 32,
                        border: "none",
                        "& .MuiStepIcon-text": {
                          fill: "#ffffff",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                          textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                        },
                      },
                    },
                  }}
                >
                  {section.process.map((step, stepIndex) => (
                    <Step key={`step-${index}-${stepIndex}`} completed={false}>
                      <StepLabel>
                        <Typography
                          variant="body2"
                          sx={{ color: "#e5e7eb", fontSize: "0.875rem" }}
                        >
                          {step}
                        </Typography>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* CTA Button */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            background: "linear-gradient(90deg, #4f8cff, #ffb86b)",
            color: "#1a1f2e",
            fontWeight: 700,
            textTransform: "none",
            borderRadius: 2,
            boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
            "&:hover": {
              background: "linear-gradient(270deg, #4f8cff, #ffb86b)",
            },
          }}
        >
          Get Started Now
        </Button>
      </Box>

      {/* Keyframes (inject into <style jsx global> or your CSS baseline) */}
      <style jsx global>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </Container>
  );
}
