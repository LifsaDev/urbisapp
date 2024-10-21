import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useLang } from '../../contexts/langContext';
import logo from '../../assets/final_logo.png'
import colorMap from '../../utils/ColorPalette';

// Page wrapper using MUI's Box
const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colorMap.black,
}));

// Container with custom styling
const ContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: colorMap.deepblack,
  borderRadius: '15px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
  padding: '2rem',
  maxWidth: '600px',
  textAlign: 'center',
  
}));

// Logo styling
const Logo = styled('img')(({ theme }) => ({
  height: '64px',
  width: 'auto',
  display: 'block',
  margin: '0 auto 1.5rem',
}));

// Custom MUI Link styling
const StyledLink = styled(Link)(({ theme }) => ({
  color: '#007bff',
  textDecoration: 'none',
  fontWeight: 'bold',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const PageNotFound = () => {
  const { translations: t } = useLang();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Page Not Found | Urbis</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <PageWrapper>
        <ContentContainer>
          <Link to="/">
            <Logo src={logo} alt="Urbis Logo" />
          </Link>
          <Typography variant="h4" color={colorMap.turquoiseClair} mb={3}>
            {t.page_not_found}
          </Typography>
          <Typography variant="body1" mb={4}>
            {t.page_not_found_text}
          </Typography>
          <StyledLink to="/">{t.return_home}</StyledLink>
        </ContentContainer>
      </PageWrapper>
    </HelmetProvider>
  );
};

export default PageNotFound;
