import React from 'react';
import { Box, Container, Grid2 as Grid, Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import MainLayout from '../../components/AppLayout';
import { useLang } from '../../contexts/langContext';
import PagePaths from '../../PagePaths';
import colorMap from '../../utils/ColorPalette';

 
 
const Hero = styled('div')(({ theme }) => ({
  background: 'linear-gradient(135deg, #8d99ad 0%, #4A505C 100%)',
  padding: theme.spacing(12, 0),
  textAlign: 'center',
  color: '#fff',
}));


const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: '15px',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'start',
  fontStyle: 'italic',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
}));

const GridCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  },
  padding: theme.spacing(2),
  backgroundColor: colorMap.lightgray,
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontSize: '2rem',
  color: colorMap.black,
  textAlign: 'center',
}));

const ButtonLink = styled('a')({
  textTransform: 'capitalize',
  textDecoration: 'none',
  color: colorMap.primary,
  fontWeight: 'bold',
  fontSize: '0.8rem',
  padding: '8px 16px',
  backgroundColor: colorMap.turquoiseDark,
  color: colorMap.white,
  borderRadius: '4px',
  display: 'inline-block',
  marginTop: '10px',
  '&:hover': {
    backgroundColor: colorMap.turquoiseClair,
    color: colorMap.white,
  },
});

const SolutionsPage = () => {
  const { translations: t } = useLang();

  const features = {
    Communication: [
      { name: 'virtual_meetings', link_to: PagePaths.virtual_meetings },
      { name: 'architectural_request', link_to: PagePaths.architectural_request },
      { name: 'discussion_forum', link_to: PagePaths.discussion_forum },
      { name: 'events_calendar', link_to: PagePaths.events_calendar },
      { name: 'website', link_to: PagePaths.website },
      { name: 'file_library', link_to: PagePaths.file_library },
      { name: 'announcements_bulletin', link_to: PagePaths.announcements_bulletin },
      { name: 'work_service_request', link_to: PagePaths.work_service_request },
      { name: 'portfolio_management', link_to: PagePaths.portfolio_management },
    ],
    RecordKeeping: [
      { name: 'electronic_consent', link_to: PagePaths.electronic_consent },
      { name: 'violation_tracking', link_to: PagePaths.violation_tracking },
      { name: 'e_voting', link_to: PagePaths.e_voting },
      { name: 'unit_file_database', link_to: PagePaths.unit_file_database },
      { name: 'reports', link_to: PagePaths.reports },
      { name: 'maintenance_tracking', link_to: PagePaths.maintenance_tracking },
      { name: 'vendor_management', link_to: PagePaths.vendor_management },
      { name: 'amenity_booking', link_to: PagePaths.amenity_booking },
      { name: 'online_payments', link_to: PagePaths.online_payments },
    ],
    Security: [
      { name: 'package_scanning', link_to: PagePaths.package_scanning },
      { name: 'asset_management', link_to: PagePaths.asset_management },
      { name: 'visitor_parking', link_to: PagePaths.visitor_parking },
      { name: 'security_logs', link_to: PagePaths.security_logs },
      { name: 'authorized_entry', link_to: PagePaths.authorized_entry },
      { name: 'package_tracking', link_to: PagePaths.package_tracking },
      { name: 'key_tracking', link_to: PagePaths.key_tracking },
      { name: 'incident_reports', link_to: PagePaths.incident_reports },
      { name: 'security_patrol', link_to: PagePaths.security_patrol },
    ],
  };

  const use_by_challenges = [
    { name: 'improving_communication', link_to: PagePaths.by_challenge_improve_communicaton },
    { name: 'documents_and_resident_info', link_to: PagePaths.by_challenge_accessing_document },
    { name: 'streamlining_security', link_to: PagePaths.by_challenge_streaming_security },
    { name: 'enforcing_rules', link_to: PagePaths.by_challenge_enforcing_rules },
    { name: 'increasing_community', link_to: PagePaths.by_challenge_increase_community },
    { name: 'tracking_managing', link_to: PagePaths.by_challenge_tracking_and_maintenance },
    { name: 'managing_rentals', link_to: PagePaths.by_challenge_visitor_mangement },
    { name: 'managing_visitors', link_to: PagePaths.by_challenge_visitor_mangement },
    { name: 'making_tracking', link_to: PagePaths.by_challenge_payment_management },
  ];

  const renderCards = (items) => {
    return items.map((item, index) => (
      <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
        <GridCard>
          <Typography variant="h6" sx={{ fontWeight: 'bolder', mb: 1, fontSize: '1.2rem', color: colorMap.black }}>
            {t[item.name]}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: colorMap.grisFonce }}>
            {t[item.name + '_description']}
          </Typography>
          <ButtonLink href={item.link_to}>{t.learn_more}</ButtonLink>
        </GridCard>
      </Grid>
    ));
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Our Solutions | Urbis</title>
          <meta name="description" content="Explore the range of solutions offered by URBIS." />
        </Helmet>
        <Hero>
          <Container>
            <Title variant="h1">{t.all_solution_d1}</Title>
            <Subtitle>{t.all_solution_d2}</Subtitle>
          </Container>
        </Hero>

        <Box sx={{ display: 'flex', flexDirection: 'column', background: colorMap.homo_gradient, width: '100vw' }}>
          <Container maxWidth="lg">
            {Object.keys(features).map((category, idx) => (
              <Box key={idx} sx={{ mb: 5 }}>
                <CategoryTitle>{t[category]}</CategoryTitle>
                <Grid container spacing={3}>
                  {renderCards(features[category])}
                </Grid>
              </Box>
            ))}

            <CategoryTitle>{t.use_by_challenges_title}</CategoryTitle>
            <Grid container spacing={3}>
              {renderCards(use_by_challenges)}
            </Grid>
          </Container>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default SolutionsPage;
