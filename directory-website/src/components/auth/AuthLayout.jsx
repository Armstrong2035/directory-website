"use client";

import {
  Box,
  Container,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import ResponsiveAppBar from "../navigation/NavBar";

const AuthLayout = ({ children, title, subtitle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <ResponsiveAppBar />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#19212b",
          display: "flex",
          alignItems: "center",
          py: 3,
          mt: 10,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={24}
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: 3,
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backgroundColor: "#19212B",
            }}
          >
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(90deg, #4f8cff 20%, #ffb86b 80%)",
                  mb: 2,
                }}
              >
                <Home sx={{ fontSize: 32, color: "white" }} />
              </Box>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  background:
                    "linear-gradient(90deg, #4f8cff 20%, #ffb86b 80%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Subarashi Scout
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600, color: "#f7fafc" }}
              >
                {title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#cbd5e1" }}>
                {subtitle}
              </Typography>
            </Box>
            {children}
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default AuthLayout;
