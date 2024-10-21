import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import MainLayout from '../../components/AppLayout';
import { Box, Grid2 as Grid, Card, Typography } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { FaLock, FaSearch, FaMobileAlt } from 'react-icons/fa';
import { styled } from '@mui/system';
import { useLang } from '../../contexts/langContext';
import DocumentStorage_hero_image from '../../assets/DocumentStorage_hero_image.png';
import { backgroupChoice } from '../../services/colorMap';

// Custom MUI Icon Container
const IconContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

const AccessDocuments = () => {
  const { translations: t } = useLang();

  const data = {
    title: t.accessdocument_title,
    tagline: t.accessdocument_tag,
    imageUrl: DocumentStorage_hero_image,
    backgroundGradient: backgroupChoice,
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Document Management | Urbis</title>
          <meta name="description" content="Welcome to the Document management page." />
        </Helmet>

        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
          <SolutionHero
            title={data.title}
            tagline={data.tagline}
            imageUrl={data.imageUrl}
            backgroundGradient={data.backgroundGradient}
          />

          <Box sx={{ py: 5 }}>
            <Grid container justifyContent="center" sx={{ mb: 5 }}>
              <Grid size={{md: 10, xs: 12}}>
                <Card sx={{ boxShadow: 3, p: 5 }}>
                  <Typography sx={{mb: 4, textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontSize: '1.8rem', fontWeight: 'bold'}}  variant="h4" align="center" gutterBottom>
                    {t.accessdocument_d1}
                  </Typography>
                  <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                    {t.accessdocument_d2}
                  </Typography>

                  <Grid container spacing={4}>
                    <Grid size={{md: 4, xs: 12}}>
                      <IconContainer>
                        <FaLock size={48} className="text-primary" />
                        <Typography variant="h5" sx={{ mt: 2,mb: 3, fontWeight: 'bold' }}>
                          {t.accessdocument_d3}
                        </Typography>
                        <Typography variant="body2">{t.accessdocument_d4}</Typography>
                      </IconContainer>
                    </Grid>
                    <Grid size={{md: 4, xs: 12}}>
                      <IconContainer>
                        <FaSearch size={48} className="text-primary" />
                        <Typography variant="h5" sx={{  mt: 2,mb: 3, fontWeight: 'bold' }}>
                          {t.accessdocument_d5}
                        </Typography>
                        <Typography variant="body2">{t.accessdocument_d6}</Typography>
                      </IconContainer>
                    </Grid>
                    <Grid size={{md: 4, xs: 12}}>
                      <IconContainer>
                        <FaMobileAlt size={48} className="text-primary" />
                        <Typography variant="h5" sx={{  mt: 2,mb: 3, fontWeight: 'bold' }}>
                          {t.accessdocument_d7}
                        </Typography>
                        <Typography variant="body2">{t.accessdocument_d8}</Typography>
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

export default AccessDocuments;
