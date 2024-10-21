import React from 'react';
import MainLayout from '../../components/AppLayout';
import { Box, Container, Grid2 as Grid, Card, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useLang } from '../../contexts/langContext';
import colorMap from '../../utils/ColorPalette';
import { FaCheckCircle, FaComment, FaHandshake, FaUserShield, FaHeart } from 'react-icons/fa';
 
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Hero = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  padding: theme.spacing(12, 0),
  textAlign: 'center',
  color: colorMap.black,
  fontWeight: 'bold',
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

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  color: '#333',
  fontSize: '2rem',
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

const ValueCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '10px',
  height: '300px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(3),
  textAlign: 'justify',
  transition: 'transform 0.3s ease-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },

  [theme.breakpoints.down('md')]: {
    height: '400px'
  }
}));
 

const ValueTitle = styled(Typography)(({ theme }) => ({
  color: '#333',
  fontSize: '1.8rem',
  marginBottom: theme.spacing(2),
}));

const ValueDescription = styled(Typography)(({ theme }) => ({
  color: '#333',
  fontSize: '1.0rem',
  textAlign: 'start'
}));

const OurValue = () => {
 
  const { translations: t } = useLang();

  const values = [
    {
      icon: <FaCheckCircle color='#764ba2' fontSize={28}/>,
      title: t.value_d1,
      description: t.value_d2,
    },
    {
      icon: <FaComment color='#764ba2' fontSize={28}/>,
      title: t.value_d3,
      description: t.value_d4,
    },
    {
      icon: <FaHandshake color='#764ba2' fontSize={28}/>,
      title: t.value_d5,
      description: t.value_d6,
    },
    {
      icon: <FaUserShield color='#764ba2' fontSize={28}/>,
      title: t.value_d7,
      description: t.value_d8,
    },
    {
      icon: <FaHeart color='#764ba2' fontSize={28}/>,
      title: t.value_d9,
      description: t.value_d10,
    },
  ];

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Our Value | Urbis</title>
          <meta
            name="description"
            content="Learn about our innovative technology solutions for community operations"
          />
        </Helmet>

        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
          <Hero>
            <Container>
              <Typography variant="h1" sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 'bold', fontSize: '2.8rem', marginBottom: '1rem' }}>
                {t.value_d12}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                {t.value_d13}
              </Typography>
            </Container>
          </Hero>

          <MainContainer>
            <Container sx={{background: colorMap.forward_gradient, paddingTop: 10, paddingBottom: 10}}>
              <Section>
                <SectionTitle sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', color: colorMap.black, fontWeight: 'bold'}} >{t.our_values}</SectionTitle>
                <Grid container spacing={2}>
                  {values.map((value, index) => (
                    <Grid size={{xs: 12, sm: 6, md: 4}} key={index}>
                      <ValueCard>
                        {value.icon}
                        <ValueTitle sx={{fontSize: '1.2rem',textShadow: '2px 2px 4px rgba(0,0,0,0.3)', color: colorMap.black, fontWeight: '900'}}  variant="h3">{value.title}</ValueTitle>
                        <ValueDescription variant="body1">{value.description}</ValueDescription>
                      </ValueCard>
                    </Grid>
                  ))}
                </Grid>
              </Section>
            </Container>
          </MainContainer>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default OurValue;
