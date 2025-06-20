"use client";

import { Box, Typography, Button } from "@mui/material";
import { typography } from "@/styles/typography";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";


export const gradientBrandStyles = {
  background: "linear-gradient(90deg, #4f8cff 20%, #ffb86b 80%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontWeight: 900,
};

export default function Hero() {
  const auth = useAuth();
  const router = useRouter();

  const handleCTA = () => {
    if (auth.user) {
      router.push("/dashboard");
    } else {
      router.push("/signin");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="overline"
        sx={{
          color: "#fff",
          opacity: 0.7,
          letterSpacing: 2,
          fontWeight: 700,
          mb: 2,
          textAlign: "center",
        }}
      >
        DIRECT CONNECTION WITH BUYERS & SELLERS
      </Typography>
      <Typography
        variant="h1"
        sx={{
          ...typography.heading1,
          fontSize: { xs: "2.5rem", md: "4rem", lg: "4.5rem" },
          lineHeight: { xs: "1.1", md: "1.05" },
          textAlign: "center",
        }}
      >
        Meet direct buyers, and sellers with
        <br />
        <Typography
          component="span"
          sx={{
            ...typography.heading1,
            ...gradientBrandStyles,
            fontSize: { xs: "2.5rem", md: "4rem", lg: "4.5rem" },
          }}
        >
          Subarashi Scout
        </Typography>
      </Typography>
      <Typography
        variant="h6"
        sx={{
          ...typography.body1,
          mb: 4,
          textAlign: "center",
        }}
      >
        Skip the middleman. Connect with buyers and sellers directly
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => router.push("/auth/signup")}
        sx={{
          background: "linear-gradient(90deg, #4f8cff 0%, #ffb86b 100%)",
          color: "#19212b",
          fontWeight: 700,
          fontSize: "1.1rem",
          px: 4,
          py: 1.5,
          borderRadius: 2,
          boxShadow: "0 4px 24px 0 rgba(79,140,255,0.15)",
          textTransform: "none",
          "&:hover": {
            background: "linear-gradient(90deg, #4f8cff 0%, #ffb86b 100%)",
            opacity: 0.9,
          },
        }}
        onClick={handleCTA}
      >
        Start transacting now
      </Button>
    </Box>
  );
}
