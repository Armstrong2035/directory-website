"use client";

import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

export default function CallToAction() {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ mb: 2 }}
      >
        Ready to Experience Real Estate Without the Middleman?
      </Typography>

      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        align="center"
        sx={{ mb: 4 }}
      >
        🚀 Start Your Journey Today
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          background: "linear-gradient(45deg, #f8f9fa 30%, #e9ecef 90%)",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                For Sellers:
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<HomeIcon />}
                sx={{
                  mb: 2,
                  py: 1.5,
                  px: 4,
                  fontSize: "1.1rem",
                }}
              >
                List Your Property Now
              </Button>
              <Typography variant="body2" color="text.secondary">
                Free to list • No upfront costs • Keep every dollar
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                For Buyers:
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<SearchIcon />}
                sx={{
                  mb: 2,
                  py: 1.5,
                  px: 4,
                  fontSize: "1.1rem",
                }}
              >
                Submit Your Requirements
              </Button>
              <Typography variant="body2" color="text.secondary">
                Get matched in 24 hours • Direct seller access • No agent
                pressure
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
