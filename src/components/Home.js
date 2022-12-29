import { Container } from '@mui/material';
import React from 'react';

const Home = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ pb: 6, minHeight: '100vh' }}>
      {children}
    </Container>
  );
};

export default Home;
