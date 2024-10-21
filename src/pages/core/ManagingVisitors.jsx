import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import MainLayout from '../../components/AppLayout';
import { Box, Card, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { backgroupChoice } from '../../services/colorMap';
import { useLang } from '../../contexts/langContext';
import { FaUserFriends, FaCar } from 'react-icons/fa';
import VisitorManagement_hero_image from '../../assets/VisitorManagement_hero_image.png';

const ManagingVisitors = () => {
  const { translations: t } = useLang();
  const data = {
    title: t.visitorsparking_title,
    tagline: t.visitorsparking_tag,
    imageUrl: VisitorManagement_hero_image,
    backgroundGradient: backgroupChoice
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Visitor Management | Urbis</title>
          <meta name="description" content="Welcome to the Visitor Management page." />
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
              {t.visitorsparking_d1}
            </Typography>

            <Card sx={{ boxShadow: 3, p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <FaUserFriends size={40} className="text-primary" />
                <Typography variant="h5" sx={{ ml: 2 }}>
                  {t.visitorsparking_d2}
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ mb: 4 }}>
                {t.visitorsparking_d3}
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <FaCar size={30} className="text-primary" />
                  </ListItemIcon>
                  <ListItemText primary={t.visitorsparking_d4} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={t.visitorsparking_d5} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={t.visitorsparking_d6} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={t.visitorsparking_d7} />
                </ListItem>
              </List>
            </Card>
          </Box>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default ManagingVisitors;
