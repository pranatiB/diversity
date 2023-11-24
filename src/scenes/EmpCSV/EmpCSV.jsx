import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import Sidebar from '../global/Sidebar';
import { useState } from 'react';

const EmpCSV = () => {
const [isSidebar, setIsSidebar] = useState(true);
  
  const handleRedirect = () => {
    window.location.href = 'https://employeechurn.streamlit.app/';

  };

  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} />
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
        Welcome to Dashboard Query Solver
      </Typography>
      {/* <Typography variant="body1" gutterBottom>
          We embrace the ebb and flow of our workforce. Here, we focus on smooth transitions, transparent communication, and continuous improvement. Whether bidding farewell or welcoming new talent, our goal is to create a workplace that thrives on diversity, innovation, and collaboration.
          Explore resources and testimonials for a glimpse into the enriching experiences that define our dynamic culture.
        </Typography> */}
      <Button variant="contained" onClick={handleRedirect} sx={{ mt: 2 }}>
        Access the Service
      </Button>
    </Container>
   

    </div>
  
   
  );
};

export default EmpCSV;
