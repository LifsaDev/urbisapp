import React from 'react';
import { Box, Container, Paper, Typography, Link as MuiLink } from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLang } from '../../contexts/langContext';
import final_logo from '../../assets/final_log_white.png'

 
const PageWrapper = {
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f8f9fa',
};

const ContentContainer = {
  backgroundColor: 'white',
  borderRadius: '15px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
  padding: '2rem',
  maxWidth: '600px',
  textAlign: 'center',
};

const Logo = {
  height: '64px',
  width: 'auto',
  display: 'block',
  margin: '0 auto 1.5rem',
};

const ThankYouPage = () => {
  const { translations: t } = useLang();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Thank You | Urbis</title>
        <meta name="description" content="Thank you for your request" />
      </Helmet>
      <Box sx={PageWrapper}>
        <Container sx={{justifyContent: 'center',  display: 'flex'}}>
          <Paper sx={ContentContainer}>
            <img src={final_logo} alt="Urbis Logo" style={Logo} />
            <Typography variant="h4" color="primary" gutterBottom>
              {t.thank_you_title}
            </Typography>
            <Typography variant="body1" sx={{ padding: '10px', fontSize: '1.2rem', marginBottom: '2rem' }}>
              {t.thank_you_message}
            </Typography>
            <MuiLink component={Link} to="/" sx={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
              {t.return_home}
            </MuiLink>
          </Paper>
        </Container>
      </Box>
    </HelmetProvider>
  );
};

export default ThankYouPage;
