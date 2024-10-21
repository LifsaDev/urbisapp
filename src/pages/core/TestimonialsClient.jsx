import React from 'react';
import MainLayout from '../../components/AppLayout';
import { Box } from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Testimonials from '../../components/home/Testimonials';

const TestimoniaClient = () => {
 
  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Testimonials | Urbis</title>
          <meta name="description" content="Welcome to the Urbis Testimonials page." />
        </Helmet>

        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
            <Testimonials/>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};
 



export default TestimoniaClient;
