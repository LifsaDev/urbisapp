import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid2 as Grid, Card, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FaCheck, FaBuilding, FaClipboardList, FaChartBar } from 'react-icons/fa';
import { styled } from '@mui/system';
import { useLang } from '../../contexts/langContext';
import Residents_hero_image from '../../assets/Residents_hero_image.png';
import resident_info_1_img from '../../assets/resident_info-1.png';
import resident_info_2_img from '../../assets/resident_info-2.png';
import resident_info_3_img from '../../assets/resident_info-3.png';
import { backgroupChoice } from '../../services/colorMap';
import MainLayout from '../../components/AppLayout';
import colorMap from '../../utils/ColorPalette';
 

const Image = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  borderRadius: '8px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
}));

const Resident = () => {
  const { translations: t } = useLang();

  const data = {
    title: t.by_user_resident_title,
    tagline: t.by_user_resident_tag,
    imageUrl: Residents_hero_image,
    backgroundGradient: backgroupChoice,
  };

  const ResidentFeatures = () => (
    <Container sx={{ my: 5 }}>
      <Grid container spacing={4}>
        <Grid size={{md: 6}}>
          <Card sx={{ height: '100%', boxShadow: 3, padding: 3 }}>
            {[
              { icon: <FaBuilding />, title: t.by_user_resident_info_1_title, description: t.by_user_resident_info_1_description },
              { icon: <FaClipboardList />, title: t.by_user_resident_info_2_title, description: t.by_user_resident_info_2_description },
              { icon: <FaChartBar />, title: t.by_user_resident_info_3_title, description: t.by_user_resident_info_3_description },
            ].map((feature, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <Box sx={{ bgcolor: colorMap.blue, color: 'white', borderRadius: '50%', p: 1, mr: 2 }}>
                  {feature.icon}
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>{feature.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{feature.description}</Typography>
                </Box>
              </Box>
            ))}
          </Card>
        </Grid>
        <Grid size={{md: 6}}>
          <Image src={resident_info_3_img} alt="Laptop" />
        </Grid>
      </Grid>

      <Card sx={{ mt: 5, background: colorMap.homo_gradient, color: 'white', padding: 3 }} >
        <Typography sx={{color: colorMap.black, textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 500, fontSize: '1.5rem' }} variant="h4" gutterBottom>{t.by_user_resident_topreason}</Typography>
        <List>
          {[t.by_user_resident_v1, t.by_user_resident_v2, t.by_user_resident_v3, t.by_user_resident_v4].map((reason, index) => (
            <ListItem key={index} sx={{ p: 0 }}>
              <ListItemIcon sx={{ color: colorMap.black }}>
                <FaCheck />
              </ListItemIcon>
              <ListItemText sx={{color: colorMap.deepblack}} primary={reason} />
            </ListItem>
          ))}
        </List>
      </Card>

      <Grid container spacing={4} sx={{ mt: 5, background: colorMap.forward_gradient }}>
        <Grid size={{md: 8}}>
          <Typography sx={{color: colorMap.black, textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 500, fontSize: '1.8rem' }} variant="h4" gutterBottom>{t.by_user_resident_wrok_t1}</Typography>
          <Typography >{t.by_user_resident_wrok_d1}</Typography>
          <Typography >{t.by_user_resident_wrok_d2}</Typography>
          <Typography >{t.by_user_resident_wrok_d3}</Typography>
        </Grid>
        <Grid size={{md: 4}}>
          <Image src={resident_info_1_img} alt="Person working" />
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 5, background: colorMap.light_gradient }}>
        <Grid size={{md: 4}}>
          <Image src={resident_info_2_img} alt="Laptop with 99.95% uptime" />
        </Grid>
        <Grid size={{md: 8}}>
          <Typography sx={{color: colorMap.black, textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 500, fontSize: '1.8rem' }} variant="h4" gutterBottom>{t.by_user_resident_wrok_t2}</Typography>
          <Typography >{t.by_user_resident_wrok_d21}</Typography>
          <Typography >{t.by_user_resident_wrok_d22}</Typography>
        </Grid>
      </Grid>
    </Container>
  );

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Resident | Urbis</title>
          <meta name="description" content="Welcome to the Resident page." />
        </Helmet>

        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
          <SolutionHero
            title={data.title}
            tagline={data.tagline}
            imageUrl={data.imageUrl}
            backgroundGradient={data.backgroundGradient}
          />
          <ResidentFeatures />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default Resident;
