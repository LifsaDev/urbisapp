import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import MainLayout from '../../components/AppLayout';
import { Box, Grid2 as Grid, Card, Typography } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/system';
import { useLang } from '../../contexts/langContext';
import ImprovingComunication_hero_image from '../../assets/ImprovingComunication_hero_image.png';
import { backgroupChoice } from '../../services/colorMap';

const IconContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

const ImproveCommunication = () => {
  const { translations: t } = useLang();

  const data = {
    title: t.improvecommunication_title,
    tagline: t.improvecommunication_tag,
    imageUrl: ImprovingComunication_hero_image,
    backgroundGradient: backgroupChoice,
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Improve Communication | Urbis</title>
          <meta name="description" content="Welcome to the Communication Improving page." />
        </Helmet>

        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
          <SolutionHero
            title={data.title}
            tagline={data.tagline}
            imageUrl={data.imageUrl}
            backgroundGradient={data.backgroundGradient}
          />

          <Box sx={{ py: 5 }}>
            <Grid container justifyContent="center">
              <Grid size={{xs: 12, md: 8}}>
                <Card sx={{ boxShadow: 3, p: 5 }}>
                  <Typography sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontSize: '1.8rem', fontWeight: 'bold'}}  variant="h4" align="center" gutterBottom>
                    {t.improvecommunication_d1}
                  </Typography>
                  <Typography variant="body1" align="start" sx={{ mb: 4 }}>
                    {t.improvecommunication_d2}
                  </Typography>
                  <Grid container spacing={4}>
                    <Grid size={{md: 4, xs: 12}}>
                      <IconContainer>
                        <i className="fas fa-comments fa-3x" style={{ color: '#3498db' }}></i>
                        <Typography variant="h5" sx={{mt: 2,  mb: 2, fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'start' }}>
                          {t.improvecommunication_d3}
                        </Typography>
                        <Typography variant="body2" sx={{textAlign: 'start'}}>{t.improvecommunication_d4}</Typography>
                      </IconContainer>
                    </Grid>
                    <Grid size={{md: 4, xs: 12}}>
                      <IconContainer>
                        <i className="fas fa-clock fa-3x" style={{ color: '#3498db' }}></i>
                        <Typography variant="h5" sx={{mt: 2, mb: 2, fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'start' }}>
                          {t.improvecommunication_d5}
                        </Typography>
                        <Typography variant="body2" sx={{textAlign: 'start'}}>{t.improvecommunication_d6}</Typography>
                      </IconContainer>
                    </Grid>
                    <Grid size={{md: 4, xs: 12}}>
                      <IconContainer>
                        <i className="fas fa-users fa-3x" style={{ color: '#3498db' }}></i>
                        <Typography variant="h5" sx={{mt: 2, mb: 2, fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'start' }}>
                          {t.improvecommunication_d7}
                        </Typography>
                        <Typography variant="body2" sx={{textAlign: 'start'}}>{t.improvecommunication_d8}</Typography>
                      </IconContainer>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default ImproveCommunication;
