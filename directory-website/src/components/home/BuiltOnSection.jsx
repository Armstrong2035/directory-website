import React from 'react';
import { Box, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { dashboardTypographyStyles } from "../../styles/typography"
export default function BuiltOnVerifiedData ()  {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box 
      sx={{
        height: 800,
        py: 8,
        px: { xs: 3, sm: 5, md: 8, lg: 10 },
        backgroundColor: '#B0E57F',
        position: "relative"
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h1" 
            component="h1"
            sx={{

              lineHeight: 1.2,
              mb: 2,
              color: '#000000',
              ...dashboardTypographyStyles.largeBold,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '5rem' },
              fontWeight: 700,
            }}
          >
            Built on Verified Data.
          </Typography>
          
          <Typography 
            variant="h2" 
            component="h2"
            sx={{
   
              lineHeight: 1.3,
              mb: 3,
              color: '#000000',
              ...dashboardTypographyStyles.largeBold,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '5rem' },
              fontWeight: 700,
            }}
          >
            Driven by Intelligence
          </Typography>
          
          <Typography 
            variant="body1" 
            component="p"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              mb: 3,
              color: '#333333',
            }}
          >
            Our platform integrates:
          </Typography>
          
          <Box 
            component="ul" 
            sx={{ 
              pl: 2.5,
              mb: 4,
              '& li': {
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#333333',
              }
            }}
          >
            <li>Government-verified ownership records</li>
            <li>Behavioral intelligence</li>
            <li>Predictive matching algorithms</li>
          </Box>
          
          <Box sx={{ height: '1px', width: '100%', backgroundColor: '#e0e0e0', mb: 4 }} />
          
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: '4px',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#333333',
              }
            }}
          >
            Sign Up
          </Button>
        </Grid>
        
        {isMdUp && (
          <Grid item xs={12} md={6} sx={{
            position: "absolute",
            bottom: 50,
            right: 50
          }}>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                '& img': {
                  maxWidth: '100%',
                  height: 'auto'
                }
              }}
            >
              <Image 
                src="/images/dots.svg" 
                alt="Decorative dots graphic"
                width={625} 
                height={512}
                priority
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

