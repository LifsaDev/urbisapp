import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../../components/AppLayout';
import { Box, Grid2 as Grid, Card, Typography } from '@mui/material';
import { FaClipboardCheck, FaKey } from 'react-icons/fa';
import { styled } from '@mui/system';
import { useLang } from '../../contexts/langContext';
import Security_hero_image from '../../assets/Security_hero_image.png';
import { backgroupChoice } from '../../services/colorMap';

// Custom styled icon container
const IconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const IconWrapper = styled('div')({
  marginRight: '15px',
  color: '#3498db',
});

// The main component
const StreamliningSecurity = () => {
  const { translations: t } = useLang();

  const data = {
    title: t.securitystream_title,
    tagline: t.securitystreamt_tag,
    imageUrl: Security_hero_image,
    backgroundGradient: backgroupChoice,
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Security Streamlining | Urbis</title>
          <meta name="description" content="Welcome to the Security Streamlining page." />
        </Helmet>

        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
          <SolutionHero
            title={data.title}
            tagline={data.tagline}
            imageUrl={data.imageUrl}
            backgroundGradient={data.backgroundGradient}
          />

          <Box  sx={{ py: 5,display: 'flex',alignItems: 'center', alignContent: 'center', flexDirection: 'column',  }} >
            <Typography variant="h4" sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 600}} align="center" gutterBottom>
              {t.securitystream_d1}
            </Typography>
            <Card sx={{ maxWidth:'900px', boxShadow: 3, p: 4, mt: 4 }}>
              <Typography variant="h5" sx={{textAlign: 'center', fontWeight: 600}} gutterBottom>
                {t.securitystream_d2}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {t.securitystream_d3}
              </Typography>

              <Grid container spacing={4}>
                <Grid size={{xs: 12, md: 6}}>
                  <IconContainer>
                    <IconWrapper>
                      <FaClipboardCheck size={30} />
                    </IconWrapper>
                    <div>
                      <Typography variant="h6">{t.securitystream_d4}</Typography>
                      <Typography variant="body2">{t.securitystream_d5}</Typography>
                    </div>
                  </IconContainer>
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                  <IconContainer>
                    <IconWrapper>
                      <FaKey size={30} />
                    </IconWrapper>
                    <div>
                      <Typography variant="h6">{t.securitystream_d6}</Typography>
                      <Typography variant="body2">{t.securitystream_d7}</Typography>
                    </div>
                  </IconContainer>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default StreamliningSecurity;
