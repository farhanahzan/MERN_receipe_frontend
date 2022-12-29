import React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { IconButton, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Button
            component={Link}
            to="/"
            variant="outlined"
            size="small"
            color="primary"
            sx={{ display: { xs: 'none', sm: 'flex' }, boxShadow: 1 }}
          >
            Receipes
          </Button>

          <Stack
            component={Link}
            to="/"
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <LocalDiningRoundedIcon
              sx={{ fontSize: 28, mr: 1, color: 'primary.dark' }}
            />
            <Typography
              variant="h4"
              noWrap
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'primary.dark',
              }}
            >
              CHEFY
            </Typography>
          </Stack>
          <Stack>
            <Button
              color="primary"
              variant="outlined"
              startIcon={<RefreshRoundedIcon />}
              size="small"
              onClick={() => window.location.reload(false)}
              sx={{ display: { xs: 'none', sm: 'flex' }, boxShadow: 1 }}
            >
              Refresh Page
            </Button>
            <IconButton
              color="inherit"
              size="small"
              aria-label="refresh"
              sx={{
                display: { xs: 'flex', sm: 'none' },
                bgcolor: 'primary.dark',
                boxShadow: 1,
              }}
              onClick={() => window.location.reload(false)}
            >
              <RefreshRoundedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
