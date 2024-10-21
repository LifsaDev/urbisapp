import React from 'react';
import MainLayout from '../../components/AppLayout';
import { Box, Container, Grid2 as Grid, Card, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useLang } from '../../contexts/langContext';
import colorMap from '../../utils/ColorPalette';
 
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Hero = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  padding: theme.spacing(12, 0),
  textAlign: 'center',
  color:  colorMap.black,
  animation: `${fadeIn} 1s ease-out`,
}));

const MainContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: '#f8f9fa',
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(12),
  animation: `${fadeIn} 1s ease-out`,
}));

const CircleIcon = styled(Box)(({ theme }) => ({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 2rem',
  fontSize: '3rem',
  color: '#fff',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const StatsCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '12px',
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  color: '#333',
  fontSize: '2.5rem',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '50px',
    height: '3px',
    backgroundColor: '#764ba2',
    margin: theme.spacing(2, 'auto', 0),
  },
}));

const AboutUS = () => {
  const { translations: t } = useLang();

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>About Us | Urbis</title>
          <meta
            name="description"
            content="Learn about our innovative technology solutions for community operations"
          />
        </Helmet>
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
          <Hero>
            <Container>
              <Typography variant="h1" sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 'bold', fontSize: '2.9rem', marginBottom: '1rem' }}>
                {t.about_d1}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}
              >
                {t.about_d2}
              </Typography>
            </Container>
          </Hero>

          <MainContainer>
            <Container sx={{background: colorMap.forward_gradient}}>
              <Section>
                <SectionTitle sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', color: colorMap.black, fontWeight: 'bold'}}>{t.about_d3}</SectionTitle>
                <Grid container spacing={4}>
                  <Grid size={{xs: 12, sm: 4}}>
                    <CircleIcon sx={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}>
                      🖥️
                    </CircleIcon>
                    <Typography sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}} variant="h4" align="center" gutterBottom>
                      {t.about_d4}
                    </Typography>
                    <Typography variant="body1" alignItems="start">
                      {t.about_d5}
                    </Typography>
                  </Grid>
                  <Grid size={{xs: 12, sm: 4}}>
                    <CircleIcon sx={{ background: 'linear-gradient(135deg, #007bff 0%, #6610f2 100%)' }}>
                      💻
                    </CircleIcon>
                    <Typography sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}} variant="h4" align="center" gutterBottom>
                      {t.about_d6}
                    </Typography>
                    <Typography variant="body1" alignItems="start">
                      {t.about_d7}
                    </Typography>
                  </Grid>
                  <Grid size={{xs: 12, sm: 4}}>
                    <CircleIcon sx={{ background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)' }}>
                      👥
                    </CircleIcon>
                    <Typography sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}} variant="h4" align="center" gutterBottom>
                      {t.about_d8}
                    </Typography>
                    <Typography variant="body1" alignItems="start">
                      {t.about_d9}
                    </Typography>
                  </Grid>
                </Grid>
              </Section>

              <Section>
                <SectionTitle sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', color: colorMap.black, fontWeight: 'bold'}} variant="h4">{t.about_d10}</SectionTitle>
                <Grid container spacing={4}>
                  {[
                    { value: '98%', label: t.about_d11 },
                    { value: '99%', label: t.about_d12 },
                    { value: '97%', label: t.about_d13 },
                    { value: '99.9%', label: t.about_d14 },
                  ].map((stat, index) => (
                    <Grid size={{xs: 12, sm: 6,md: 3}} key={index}>
                      <StatsCard>
                        <Typography variant="h3">{stat.value}</Typography>
                        <Typography variant="body1">{stat.label}</Typography>
                      </StatsCard>
                    </Grid>
                  ))}
                </Grid>
              </Section>

              <Section>
                <SectionTitle sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', color: colorMap.black, fontWeight: 'bold'}} >{t.about_d15}</SectionTitle>
                <Typography
                  variant="body1"
                  alignItems="start"
                  sx={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}
                >
                  {t.about_d16}
                </Typography>
              </Section>
            </Container>
          </MainContainer>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default AboutUS;
