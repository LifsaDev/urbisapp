import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import MainLayout from '../../components/AppLayout';
import { Box, Card, List, ListItem, Typography } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { FaGavel } from 'react-icons/fa';
import { styled } from '@mui/system';
import { useLang } from '../../contexts/langContext';
import RuleEnforcement_hero_image from '../../assets/RuleEnforcement_hero_image.png';
import { backgroupChoice } from '../../services/colorMap';

// Custom styled icon container
const IconContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
});

// The main component
const EnforcingRules = () => {
  const { translations: t } = useLang();

  const data = {
    title: t.securitystream_title,
    tagline: t.securitystreamt_tag,
    imageUrl: RuleEnforcement_hero_image,
    backgroundGradient: backgroupChoice,
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Enforcing Rules | Urbis</title>
          <meta name="description" content="Welcome to the Enforcing Rules page." />
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
              {t.enforcingrules_d1}
            </Typography>

            <Card sx={{maxWidth: '900px', boxShadow: 3, p: 4 }}>
              <IconContainer sx={{textAlign: 'center', fontWeight: 600}} >
                <FaGavel size={40} className="text-primary" />
                <Typography variant="h5" sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 500, ml: 2}} >
                  {t.enforcingrules_d2}
                </Typography>
              </IconContainer>

              <Typography sx={{textAlign: 'center', fontWeight: 600}}  variant="body1" >
                {t.enforcingrules_d3}
              </Typography>

              <List>
                <ListItem>{t.enforcingrules_d4}</ListItem>
                <ListItem>{t.enforcingrules_d5}</ListItem>
                <ListItem>{t.enforcingrules_d6}</ListItem>
                <ListItem>{t.enforcingrules_d7}</ListItem>
              </List>
            </Card>
          </Box>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default EnforcingRules;
