import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../../components/AppLayout';
import { Box, Container, Grid2 as Grid, Card, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FaCheck, FaBuilding, FaClipboardList, FaChartBar } from 'react-icons/fa';
import { styled } from '@mui/system';
import { useLang } from '../../contexts/langContext';
import BoardMembers_hero_image from '../../assets/BoardMembers_hero_image.png';
import board_info_1_img from '../../assets/board_info-1.png';
import board_info_2_img from '../../assets/board_info-2.png';
import board_info_3_img from '../../assets/board_info-3.png';
import { backgroupChoice } from '../../services/colorMap';
import colorMap from '../../utils/ColorPalette';

 
const Image = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  borderRadius: '8px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
}));

const Board = () => {
  const { translations: t } = useLang();

  const data = {
    title: t.by_user_board_title,
    tagline: t.by_user_board_tag,
    imageUrl: BoardMembers_hero_image,
    backgroundGradient: backgroupChoice,
  };

  const BoardFeatures = () => (
    <Container sx={{ my: 5 }}>
      <Grid container spacing={4}>
        <Grid size={{md: 6}}>
          <Card sx={{ height: '100%', boxShadow: 3, padding: 3 }}>
            {[
              { icon: <FaBuilding />, title: t.by_user_board_info_1_title, description: t.by_user_board_info_1_description },
              { icon: <FaClipboardList />, title: t.by_user_board_info_2_title, description: t.by_user_board_info_2_description },
              { icon: <FaChartBar />, title: t.by_user_board_info_3_title, description: t.by_user_board_info_3_description },
            ].map((feature, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <Box sx={{ bgcolor: colorMap.blue, color: 'white', borderRadius: '50%', p: 1, mr: 2 }}>
                  {feature.icon}
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>{feature.title}</Typography>
                  <Typography variant="body1" color="textSecondary">{feature.description}</Typography>
                </Box>
              </Box>
            ))}
          </Card>
        </Grid>
        <Grid size={{md: 6}}>
          <Image src={board_info_3_img} alt="Laptop" />
        </Grid>
      </Grid>

      <Card sx={{ mt: 5, background: colorMap.homo_gradient, color: 'white', padding: 3 }}>
        <Typography sx={{color: colorMap.black, textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 500, fontSize: '1.5rem' }} variant="h4" gutterBottom>{t.by_user_board_topreason}</Typography>
        <List>
          {[t.by_user_board_v1, t.by_user_board_v2, t.by_user_board_v3, t.by_user_board_v4].map((reason, index) => (
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
        <Grid size={{md: 6}}>
          <Typography  sx={{color: colorMap.black, textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 500, fontSize: '1.8rem' }}  variant="h4" gutterBottom>{t.by_user_board_wrok_t1}</Typography>
          <Typography >{t.by_user_board_wrok_d1}</Typography>
          <Typography >{t.by_user_board_wrok_d2}</Typography>
          <Typography >{t.by_user_board_wrok_d3}</Typography>
        </Grid>
        <Grid size={{md: 4}}>
          <Image src={board_info_1_img} alt="Person working" />
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 5, background: colorMap.light_gradient }}>
        <Grid size={{md: 4}}>
          <Image src={board_info_2_img} alt="Laptop with 99.95% uptime" />
        </Grid>
        <Grid size={{md: 8}}>
          <Typography sx={{color: colorMap.black, textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 500, fontSize: '1.8rem' }} variant="h4" gutterBottom>{t.by_user_board_wrok_t2}</Typography>
          <Typography >{t.by_user_board_wrok_d21}</Typography>
          <Typography >{t.by_user_board_wrok_d22}</Typography>
        </Grid>
      </Grid>
    </Container>
  );

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Board Manager | Urbis</title>
          <meta name="description" content="Welcome to the Board management page." />
        </Helmet>

        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
          <SolutionHero
            title={data.title}
            tagline={data.tagline}
            imageUrl={data.imageUrl}
            backgroundGradient={data.backgroundGradient}
          />
          <BoardFeatures />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default Board;
