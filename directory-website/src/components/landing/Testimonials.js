"use client";

import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I saved $30,000 in agent fees and sold my house in 3 weeks. The buyers were serious and pre-qualified - no wasted time!",
      author: "Sarah M.",
      role: "Homeowner",
    },
    {
      quote:
        "Finally found my dream home that wasn't even listed on the MLS. Direct communication with the seller made the whole process so much smoother.",
      author: "David K.",
      role: "First-time Buyer",
    },
  ];

  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ mb: 4 }}
      >
        What Our Users Say
      </Typography>

      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                borderRadius: 2,
              }}
            >
              <FormatQuoteIcon
                sx={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  fontSize: 40,
                  color: "primary.main",
                  opacity: 0.2,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontStyle: "italic",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </Typography>
              <Box sx={{ mt: "auto", display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                  {testimonial.author[0]}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonial.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
