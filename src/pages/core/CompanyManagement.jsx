import React, { useEffect } from 'react';
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
  FaProjectDiagram, FaStore, FaMobileAlt, FaCreditCard,
  FaBullhorn, FaFileAlt, FaClipboardList, FaExclamationTriangle,
  FaChartBar, FaWrench, FaFolder, FaTasks
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
  fontWeight: '600',
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
  fontWeight: 900,
  margin: 0,
}));

const CompanyManagement = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const { translations: t } = useLang();
  const data = {
    title: t.companymanage_title,
    tagline: t.companymanage_tag,
    imageUrl: hero_image,
    backgroundGradient: backgroupChoice,
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Company Management | Urbis</title>
          <meta name="description" content="Welcome to the Company Management page." />
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
    { icon: <FaProjectDiagram />, title: "Portfolio Management", color: "#3498db" },
    { icon: <FaStore />, title: "Vendor Portal", color: "#2ecc71" },
    { icon: <FaMobileAlt />, title: "Mobile App", color: "#87CEEB" },
    { icon: <FaCreditCard />, title: "Online Payments", color: "#95a5a6" },
    { icon: <FaBullhorn />, title: "Announcements", color: "#95a5a6" },
    { icon: <FaFileAlt />, title: "Accounts Payable", color: "#3498db" },
    { icon: <FaClipboardList />, title: "Asset Management", color: "#2ecc71" },
    { icon: <FaExclamationTriangle />, title: "Violation Tracking", color: "#87CEEB" },
    { icon: <FaChartBar />, title: "Reports & Analytics", color: "#87CEEB" },
    { icon: <FaWrench />, title: "Maintenance Requests", color: "#95a5a6" },
    { icon: <FaFolder />, title: "Document Management", color: "#3498db" },
    { icon: <FaTasks />, title: "Task Tracking", color: "#2ecc71" },
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

export default CompanyManagement;
