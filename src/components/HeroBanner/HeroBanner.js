import { Box, Button, Paper, Typography, Grid, Grow } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../../assets/banner.png';

const HeroBanner = () => {
  return (
    <Grow direction="right" in>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          mt: 2,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${BannerImage})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={BannerImage} alt="banner" />}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                sx={{
                  fontSize: { xs: 24, md: 50 },
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                Share your recipes and inspire others to get creative in the
                kitchen
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                sx={{
                  letterSpacing: 1,
                  lineHeight: 1.2,
                  fontWeight: 200,
                  pb: 2,
                  pr: { xs: 0, md: 20 },
                  fontSize: { xs: 12, md: 16 },
                }}
              >
                They enter the details of their recipe, including the
                ingredients, descriptions, and any notes or tips. They can also
                add photos of the finished dish.
              </Typography>
              <Button
                variant="contained"
                color="success"
                component={Link}
                to="/create-receipe"
                sx={{
                  cursor: 'pointer',
                }}
              >
                Create Receipe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grow>
  );
};

export default HeroBanner;
