import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid2 as Grid, Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import MainLayout from '../../components/AppLayout';
import { backgroupChoice } from '../../services/colorMap';
import { useLang } from '../../contexts/langContext';
import hero_image from '../../assets/heroDashboard_image.png';
import { 
  FaBullhorn, FaCalendarAlt, FaCar, FaBox, 
  FaCreditCard, FaVideo, FaClipboardList, FaEnvelope,
  FaFolder, FaWrench, FaVoteYea, FaMobileAlt
} from 'react-icons/fa';
import colorMap from '../../utils/ColorPalette';

 
const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: colorMap.homo_gradient,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  fontSize: '2.5rem',
  color: '#333',
  fontWeight: 700,
}));

const SolutionCard = styled(Card)(({ theme }) => ({
  background: colorMap.forward_gradient,
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
}));

const IconCircle = styled('div')(({ color }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem',
  backgroundColor: color,
}));

const SolutionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: '#333',
  fontWeight: '600',
  marginTop: theme.spacing(2),
  textAlign: 'center',
}));

const ServiceAppartement = () => {
  const { translations: t } = useLang();
  const data = {
    title: t.serviceApartment_title,
    tagline: t.serviceApartment_tag,
    imageUrl: hero_image,
    backgroundGradient: backgroupChoice,
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Apartment & Co-ownership | Urbis</title>
          <meta name="description" content="Welcome to the Apartment & Co-ownership page." />
        </Helmet>

        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
          <SolutionHero 
            title={data.title} 
            tagline={data.tagline} 
            imageUrl={data.imageUrl} 
            backgroundGradient={data.backgroundGradient}
          />
          <SolutionsSection />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

const SolutionsSection = () => {
  const { translations: t } = useLang();
  const solutions = [
    { icon: <FaBullhorn />, title: t.announcements, color: "#3498db" },
    { icon: <FaCalendarAlt />, title: t.amenity_booking, color: "#2ecc71" },
    { icon: <FaCar />, title: t.visitor_parking, color: "#87CEEB" },
    { icon: <FaBox />, title: t.package_tracking, color: "#95a5a6" },
    { icon: <FaCreditCard />, title: t.online_payments, color: "#95a5a6" },
    { icon: <FaVideo />, title: t.virtual_meetings, color: "#3498db" },
    { icon: <FaClipboardList />, title: t.security_logs, color: "#2ecc71" },
    { icon: <FaEnvelope />, title: t.budget_mailout, color: "#87CEEB" },
    { icon: <FaFolder />, title: t.file_library, color: "#87CEEB" },
    { icon: <FaWrench />, title: t.service_requests, color: "#95a5a6" },
    { icon: <FaVoteYea />, title: t.proxy_voting, color: "#3498db" },
    { icon: <FaMobileAlt />, title: t.mobile_app, color: "#2ecc71" },
  ];

  return (
    <StyledContainer maxWidth="xl">
      <SectionTitle>{t.comprehensive_solution}</SectionTitle>
      <Grid container spacing={4}>
        {solutions.map((solution, index) => (
          <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}} key={index}>
            <SolutionCard>
              <IconCircle color={solution.color}>
                {React.cloneElement(solution.icon, { color: 'white', size: 40 })}
              </IconCircle>
              <SolutionTitle>{solution.title}</SolutionTitle>
            </SolutionCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default ServiceAppartement;
