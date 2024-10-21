import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { Box, Card, Typography, Alert } from '@mui/material';
import MainLayout from '../../components/AppLayout';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { FaTools } from 'react-icons/fa';
import { useLang } from '../../contexts/langContext';
import MaintenanceTracking_hero_image from '../../assets/MaintenanceTracking_hero_image.png';
import { backgroupChoice } from '../../services/colorMap';
 

const TrackingMaintenance = () => {
  const { translations: t } = useLang();
  const data = {
    title: t.maintenance_title,
    tagline: t.maintenance_tag,
    imageUrl: MaintenanceTracking_hero_image,
    backgroundGradient: backgroupChoice,
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Maintenance & Tracking | Urbis</title>
          <meta name="description" content="Welcome to the maintenance and tracking page." />
        </Helmet>

        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
          <SolutionHero 
            title={data.title} 
            tagline={data.tagline} 
            imageUrl={data.imageUrl} 
            backgroundGradient={data.backgroundGradient} 
          />

          <Box sx={{ py: 5, px: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
              {t.maintenance_d1}
            </Typography>

            <Card sx={{ boxShadow: 3, p: 4, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <FaTools size={40} className="text-primary" />
                <Typography variant="h5" sx={{ ml: 2 }}>
                  {t.maintenance_d2}
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ mb: 4 }}>
                {t.maintenance_d3}
              </Typography>

              <Alert severity="info" sx={{ mt: 4 }}>
                {t.maintenance_d4}
              </Alert>
            </Card>
          </Box>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default TrackingMaintenance;
