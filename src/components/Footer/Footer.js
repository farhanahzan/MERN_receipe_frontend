import React from 'react';

import { Container, Box, Typography, Link, Stack } from '@mui/material';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#393939' }}>
      <Container maxWidth="lg">
        <Box
          py={2}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Stack
            component={Link}
            to="/"
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              textDecoration: 'none',
              flex: 1,
            }}
          >
            <LocalDiningRoundedIcon
              sx={{ fontSize: 28, mr: 1, color: 'primary.light' }}
            />
            <Typography
              variant="h4"
              noWrap
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'primary.light',
              }}
            >
              CHEFY
            </Typography>
          </Stack>
          <Typography
            component="p"
            variant="body2"
            gutterBottom={false}
            align="center"
            sx={{
              color: 'white',
            }}
          >
            © {new Date().getFullYear()} Chefy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
