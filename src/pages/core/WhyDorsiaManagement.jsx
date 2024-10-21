import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../../components/AppLayout';
import { Box, Container, Grid2 as Grid, Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { backgroupChoice } from '../../services/colorMap';
import { useLang } from '../../contexts/langContext';
import why_dorsia from '../../assets/heroDashboard_image.png';
import { FaChartLine, FaWrench, FaUsers, FaEnvelope } from 'react-icons/fa';
import colorMap from '../../utils/ColorPalette';
 
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
  background: colorMap.homo_gradient,
  paddingTop: 20,
  paddingBottom: 20
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: colorMap.forward_gradient,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
}));

const IconWrapper = styled('div')(({ theme }) => ({
  color: colorMap.turquoiseDark,
  marginBottom: theme.spacing(2),
}));

const WhyDorsiaManagement = () => {
  const { translations: t } = useLang();
  const data = {
    title: t.why_dorsia_title,
    tagline: t.why_dorsia_tag,
    imageUrl: why_dorsia,
    backgroundGradient: backgroupChoice,
  };

  const features = [
    {
      icon: <FaChartLine size={30} />,
      title: t.why_dorsia_d1,
      description: t.why_dorsia_d2,
    },
    {
      icon: <FaWrench size={30} />,
      title: t.why_dorsia_d3,
      description: t.why_dorsia_d4,
    },
    {
      icon: <FaUsers size={30} />,
      title: t.why_dorsia_d5,
      description: t.why_dorsia_d6,
    },
    {
      icon: <FaEnvelope size={30} />,
      title: t.why_dorsia_d7,
      description: t.why_dorsia_d8,
    },
  ];

  const FeatureCards = () => (
    <StyledContainer>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid size={{xs: 12, sm: 6}} key={index}>
            <FeatureCard>
              <IconWrapper>{feature.icon}</IconWrapper>
              <Typography  variant="h6" sx={{fontWeight: 600}} gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body1">{feature.description}</Typography>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Why Urbis | Community</title>
          <meta name="description" content="Welcome to the Urbis community." />
        </Helmet>

        <Box sx={{ display: 'flex', flexDirection: 'column', background: '#F5F6F7', width: '100vw', paddingBottom: '80px' }}>
          <SolutionHero 
            title={data.title} 
            tagline={data.tagline} 
            imageUrl={data.imageUrl} 
            backgroundGradient={data.backgroundGradient}
          />
          <FeatureCards />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default WhyDorsiaManagement;
