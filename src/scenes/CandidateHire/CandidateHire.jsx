import React from 'react';
import { Typography, Button, Container } from '@mui/material';

const HomePage = () => {
  const handleRedirect = () => {
    window.location.href = 'http://localhost:8501';
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Candidate Matching Service
      </Typography>
      <Typography variant="body1" gutterBottom>
        Finding the best candidates for a job is a challenging task that demands a significant amount of time from recruiters. With over 100,000 candidates in our platform, assessing each candidate individually becomes an overwhelming process. VanHack has developed its own matching algorithm, but we are continuously striving to enhance it for more precise candidate evaluation and ultimately, more successful hires.
      </Typography>
      <Button variant="contained" onClick={handleRedirect} sx={{ mt: 2 }}>
        Access the Service
      </Button>
    </Container>
  );
};

export default HomePage;
