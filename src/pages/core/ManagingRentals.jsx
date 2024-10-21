import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { Box, Grid2 as Grid, Card, Typography } from '@mui/material';
import MainLayout from '../../components/AppLayout';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaShieldAlt } from 'react-icons/fa';
import { backgroupChoice } from '../../services/colorMap';
import { useLang } from '../../contexts/langContext';
import ShortTermRentals_hero_image from '../../assets/ShortTermRentals_hero_image.png';

const ManagingRentals = () => {
  const { translations: t } = useLang();
  const data = {
    title: t.rentals_title,
    tagline: t.rentals_tag,
    imageUrl: ShortTermRentals_hero_image,
    backgroundGradient: backgroupChoice
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Rentals Tracking | Urbis</title>
          <meta name="description" content="Welcome to the Rentals tracking page." />
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
              {t.rentals_d1}
            </Typography>

            <Card sx={{ boxShadow: 3, p: 4, mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                {t.rentals_d2}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {t.rentals_d3}
              </Typography>

              <Grid container spacing={4}>
                <Grid size={{xs: 12, md: 6}}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FaHome size={30} className="text-primary" />
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6">{t.rentals_d2}</Typography>
                      <Typography>{t.rentals_d3}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FaShieldAlt size={30} className="text-primary" />
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6">{t.rentals_d4}</Typography>
                      <Typography>{t.rentals_d5}</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default ManagingRentals;
