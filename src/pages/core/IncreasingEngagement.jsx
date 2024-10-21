import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { Box, Typography, Card, List, ListItem } from '@mui/material';
import MainLayout from '../../components/AppLayout';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { FaCalendarCheck } from 'react-icons/fa6';
import { useLang } from '../../contexts/langContext';
import ImprovingComunication_hero_image from '../../assets/ImprovingComunication_hero_image.png';
import { backgroupChoice } from '../../services/colorMap';

const IncreaseCommunity = () => {
  const { translations: t } = useLang();

  const data = {
    title: t.communityengagement_title,
    tagline: t.communityengagement_tag,
    imageUrl: ImprovingComunication_hero_image,
    backgroundGradient: backgroupChoice,
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Community Engagement | Urbis</title>
          <meta name="description" content="Welcome to the community engagement page." />
        </Helmet>

        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
          <SolutionHero 
            title={data.title} 
            tagline={data.tagline} 
            imageUrl={data.imageUrl} 
            backgroundGradient={data.backgroundGradient} 
          />

          <Box sx={{ py: 5,display: 'flex',alignItems: 'center', alignContent: 'center', flexDirection: 'column',  }}>
            <Typography sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 600, mb: 4}} variant="h4" align="center" gutterBottom>
              {t.communityengagement_d1}
            </Typography>

            <Card sx={{maxWidth: '900px', boxShadow: 3, p: 4 }}>
              <Box sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 600, mb: 4}}>
                <Typography variant="h5" sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 500, ml: 2}}>
                  {t.communityengagement_d2}
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ mb: 4 }}>
                {t.communityengagement_d3}
              </Typography>

              <List>
                <ListItem>{t.communityengagement_d4}</ListItem>
                <ListItem>{t.communityengagement_d5}</ListItem>
                <ListItem>{t.communityengagement_d6}</ListItem>
                <ListItem>{t.communityengagement_d7}</ListItem>
              </List>
            </Card>
          </Box>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default IncreaseCommunity;
