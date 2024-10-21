import React from 'react';
import MainLayout from '../../components/AppLayout';
import { Box, Container, Grid2 as Grid, Typography, Card } from '@mui/material';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { styled } from '@mui/system';
import { useLang } from '../../contexts/langContext';
import colorMap from '../../utils/ColorPalette';

 
const Hero = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  padding: theme.spacing(12, 0),
  textAlign: 'center',
  color: '#fff',
  animation: `fadeIn 1s ease-out`,
}));

const MainContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: '#f8f9fa',
}));

const ContactInfo = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(4),
}));

const MapContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  iframe: {
    width: '100%',
    height: '400px',
    border: 0,
  },
}));

const Contact = () => {
  const { translations: t } = useLang();

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Contact Us | Urbis</title>
          <meta name="description" content="Contact Urbis Community team for more information" />
        </Helmet>
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
          <Hero>
            <Container>
              <Typography variant="h4" sx={{textTransform: 'capitalize', mb: 3 ,textShadow: '2px 2px 4px rgba(0,0,0,0.3)', color: colorMap.black, fontWeight: 'bold', fontSize: '2rem'}} >
                {t.contact_d1}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'start',color: colorMap.black, fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                {t.contact_d2}
              </Typography>
            </Container>
          </Hero>

          <MainContainer>
            <Container sx={{background: colorMap.forward_gradient, paddingTop: 6, paddingBottom: 6}}>
              <Grid container spacing={4}>
                <Grid size={{xs: 12, md: 4}}>
                  <ContactInfo>
                    <Typography variant="h5"><strong>Location</strong></Typography>
                    <Typography variant="body1">Casa Finance City (CFC)</Typography>
                    <Typography>Morocco</Typography>
                  </ContactInfo>
                </Grid>
                <Grid size={{xs: 12, md: 4}}>
                  <ContactInfo>
                    <Typography variant="h5"><strong>Phone</strong></Typography>
                    <Typography variant="body1">Sales: +212 522-123456</Typography>
                    <Typography variant="body1">Support: +212 522-654321</Typography>
                  </ContactInfo>
                </Grid>
                <Grid size={{xs: 12, md: 4}}>
                  <ContactInfo>
                    <Typography variant="h5"><strong>Hours</strong></Typography>
                    <Typography variant="body1">9 am to 5 pm WET</Typography>
                    <Typography variant="body1">Monday to Friday</Typography>
                  </ContactInfo>
                </Grid>
              </Grid>

              <MapContainer>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.298983057185!2d-7.62822298537222!3d33.59428538073147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee372c99f7e9%3A0x123456789abcdef!2sDorsia%20Management!5e0!3m2!1sen!2sma!4v1692348162635!5m2!1sen!2sma"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </MapContainer>
            </Container>
          </MainContainer>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default Contact;
