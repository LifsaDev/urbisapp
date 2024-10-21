import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; 
import { styled } from '@mui/system';
import { useLang } from '../../contexts/langContext';
import { useNavigate } from 'react-router-dom';
import PagePaths from '../../PagePaths';
import heroImage from '../../assets/heroDashboard_image.png';
import colorMap from '../../utils/ColorPalette';
import { motion } from 'framer-motion'; 
import { createTheme } from '@mui/material/styles';
 


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,       
      sm: 600,     
      md: 900,   
      mdextend: 936,   
      lg: 1200,    
      xl: 1536,     
    },
  },
});
  
const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '40vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: colorMap.forward_gradient,
  paddingBottom: '50px',
  paddingTop: '30px',
  boxSizing: 'border-box',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    padding: '30px 10px',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  [theme.breakpoints.down('md')]: {
   justifyContent: 'center',
   alignItems: 'center',
   textAlign: 'center'
  },

}));

const HeroContent = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  maxWidth: '600px',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100vw',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    maxWidth: '600px',
  },
}));


const HeroTitle = styled(motion.create(Typography))(({ theme }) => ({
  fontSize: '2.2rem', 
  fontWeight: 'bold',
  textAlign: 'start',
  color: colorMap.black,
  marginBottom: '50px',
  marginTop: '20px',
  letterSpacing: '0.1875em',
  lineHeight: 1.2,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem', 
  },
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: '1.8rem', 
  },
}));


 

const HeroText = styled(motion.create(Typography))(({ theme }) => ({
  fontSize: '1.4rem',  
  color: colorMap.deepblack,
  letterSpacing: '0.4px', 
  marginBottom: '80px',
  lineHeight: 1.6,  
  '&:hover': {
   
    transform: 'translateY(-3px)',  
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem', 
    marginBottom: '40px',
    textAlign: 'start',
    alignItems: 'start'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem', 
    marginBottom: '30px',
    textAlign: 'start',  
  },
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: '0.975rem',
    textAlign: 'start',
    alignItems: 'start'
  },
}));



const HeroButton = styled(Button)(({ theme }) => ({
  backgroundColor: colorMap.black,
  color: colorMap.white,
  padding: '8px 20px',
  marginRight: '10px',
  textTransform: 'capitalize',
  borderRadius: '5px',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: colorMap.deepblack,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: '10px',
  },
}));



const HeroImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  maxWidth: '500px',
  display: 'block',
  boxShadow: '0px 8px 20px rgba(0,0,0,0.15)', 
  borderRadius: '0px',
  [theme.breakpoints.down('md')]: {
    marginTop: '30px',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    maxWidth: '300px',
    marginTop: '0px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    maxWidth: '100%',
  }
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const HeroNewDesign = () => {
  const { translations: t } = useLang();
  const navigate_to = useNavigate();

  const move_to_demo = () => {
    navigate_to(PagePaths.demo_request);
  };

  const move_to_allsolution = () => {
    navigate_to(PagePaths.all_solution);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: 'easeInOut' },
  }

  return (
    <HeroSection>
      <HeroTitle {...fadeInUp}>{t.hero_title}</HeroTitle>
      <Grid2 container spacing={2} columns={12} alignItems="center" justifyContent="space-between">
        <Grid2 xs={12} md={6}>
          <HeroContent>
            <HeroText sx={{[theme.breakpoints.between('md','mdextend')]: {
              marginBottom: '20px', 
              },}} {...fadeInUp}>{t.hero_text}</HeroText>
            <ButtonBox>
              <HeroButton sx={{backgroundColor: colorMap.turquoiseDark}} onClick={move_to_demo}>{t.free_demo_btn}</HeroButton>
              <HeroButton sx={{backgroundColor: colorMap.blue}} onClick={move_to_allsolution} variant="outlined">
                {t.all_solution_btn}
              </HeroButton>
            </ButtonBox>
          </HeroContent>
        </Grid2>
       
        <Grid2 xs={12} md={6} container justifyContent="center">
          <div  data-aos-duration="2000" data-aos="zoom-in-down">
            <HeroImage sx={{[theme.breakpoints.between('md','mdextend')]: {
            maxWidth: '200px', 
            },}} src={heroImage} alt="Hero" />
          </div>
        </Grid2>
      </Grid2>
    </HeroSection>
  );
};

export default HeroNewDesign;
