import * as React from 'react';
import Box from '@mui/material/Box';
import { HelmetProvider, Helmet } from 'react-helmet-async';
  
import MainLayout from '../../components/AppLayout';
import HeroWhite from '../../components/home/HeroWhite';
import ValueAdd from '../../components/home/ValuesAdd';
import Testimonials from '../../components/home/Testimonials';
import SupportQuality from '../../components/home/SupportQuality';


export default function Home() {
  
  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Urbis</title>
          <meta name="description" content="Welcome to the home page of my application" />
        </Helmet>
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw'}}>
          <HeroWhite/>
          <ValueAdd/>
          <Testimonials/>
          <SupportQuality/>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
}


 