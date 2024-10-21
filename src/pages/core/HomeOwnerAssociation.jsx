import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../../components/AppLayout';
import { Box, Container, Grid2 as Grid, Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { backgroupChoice } from '../../services/colorMap';
import { useLang } from '../../contexts/langContext';
import hero_image from '../../assets/heroDashboard_image.png';
import { 
  FaBullhorn, FaFileInvoiceDollar, FaVoteYea, FaCreditCard,
  FaExclamationTriangle, FaUserLock, FaUsers, FaCalendarAlt,
  FaFolder, FaWrench, FaHome, FaGlobe
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
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
}));

const IconCircle = styled('div')(({ color }) => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1rem',
  backgroundColor: color,
  flexShrink: 0,
}));

const SolutionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#333',
  fontWeight: '600',
  margin: 0,
}));


const HomeOwnerAssociation = () => {
 
  const { translations: t } = useLang();
  const data = {
    title: t.homeownerassociation_title,
    tagline: t.homeownerassociation_tag,
    imageUrl: hero_image,
    backgroundGradient: backgroupChoice,
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Home-Owner Association | Urbis</title>
          <meta name="description" content="Welcome to the Home-Owner Association page." />
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
    { icon: <FaBullhorn />, title: "Announcements & Bulletin", color: "#3498db" },
    { icon: <FaFileInvoiceDollar />, title: "Vendor Management", color: "#2ecc71" },
    { icon: <FaVoteYea />, title: "E-Voting", color: "#87CEEB" },
    { icon: <FaCreditCard />, title: "Online Payments", color: "#95a5a6" },
    { icon: <FaExclamationTriangle />, title: "Violation Tracking", color: "#95a5a6" },
    { icon: <FaUserLock />, title: "Access Control Integration", color: "#3498db" },
    { icon: <FaUsers />, title: "Resident Database", color: "#2ecc71" },
    { icon: <FaCalendarAlt />, title: "Community Calendar", color: "#87CEEB" },
    { icon: <FaFolder />, title: "Document Library", color: "#87CEEB" },
    { icon: <FaWrench />, title: "Maintenance Request", color: "#95a5a6" },
    { icon: <FaHome />, title: "Architectural Reviews", color: "#3498db" },
    { icon: <FaGlobe />, title: "Website", color: "#2ecc71" },
  ];

  return (
    <StyledContainer>
      <SectionTitle>{t.comprehensive_solution}</SectionTitle>
      <Grid container spacing={4}>
        {solutions.map((solution, index) => (
          <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}} key={index}>
            <SolutionCard>
              <IconCircle color={solution.color}>
                {React.cloneElement(solution.icon, { color: 'white', size: 24 })}
              </IconCircle>
              <SolutionTitle>{solution.title}</SolutionTitle>
            </SolutionCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default HomeOwnerAssociation;
