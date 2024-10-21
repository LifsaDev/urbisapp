import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from '../../components/AppLayout';
import { Box, Typography, Grid2 as Grid, Card, CardContent } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { styled } from '@mui/system';
import { useLang } from '../../contexts/langContext';
import AmenityManagement_hero_image from '../../assets/AmenityManagement_hero_image.png';
import { backgroupChoice } from '../../services/colorMap';

// Custom styled icon container
const IconContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
});

const MaximizingAmenities = () => {
  const { translations: t } = useLang();

  const data = {
    title: t.maximizingamenity_title,
    tagline: t.maximizingamenity_tag,
    imageUrl: AmenityManagement_hero_image,
    backgroundGradient: backgroupChoice,
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Maximizing Amenity | Urbis</title>
          <meta name="description" content="Welcome to the maximizing amenity page." />
        </Helmet>

        <Box sx={{ py: 5,display: 'flex',alignItems: 'center', alignContent: 'center', flexDirection: 'column',  }}>
          <SolutionHero
            title={data.title}
            tagline={data.tagline}
            imageUrl={data.imageUrl}
            backgroundGradient={data.backgroundGradient}
          />

          <Box sx={{ py: 5, px: 3 }}>
            <Typography sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 600, mb: 4}} variant="h4" align="center" gutterBottom>
              {t.maximizingamenity_d1}
            </Typography>

            <Card sx={{maxWidth: '900px', boxShadow: 3, p: 4 }}>
              <CardContent>
                <Typography sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 500, ml: 2}} variant="h5" gutterBottom>
                  {t.maximizingamenity_d2}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  {t.maximizingamenity_d3}
                </Typography>

                <Grid container spacing={4}>
                  <Grid size={{xs: 12, md: 6}}>
                    <IconContainer>
                      <FaCalendarAlt size={30} className="text-primary" />
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="h6">{t.maximizingamenity_d4}</Typography>
                        <Typography variant="body2">{t.maximizingamenity_d5}</Typography>
                      </Box>
                    </IconContainer>
                  </Grid>

                  <Grid size={{xs: 12, md: 6}}>
                    <IconContainer>
                      <FaUsers size={30} className="text-primary" />
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="h6">{t.maximizingamenity_d6}</Typography>
                        <Typography variant="body2">{t.maximizingamenity_d7}</Typography>
                      </Box>
                    </IconContainer>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default MaximizingAmenities;
