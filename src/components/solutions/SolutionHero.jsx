import React from 'react';
import { Box, Grid2, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import PagePaths from '../../PagePaths';
import { useLang } from '../../contexts/langContext';
import colorMap from '../../utils/ColorPalette';

 
const HeroSection = styled(Box)(({ theme }) => ({
  padding: '80px 0',
  background: colorMap.forward_gradient,
  color: '#333',
}));

 
const HeroImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '10px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

 
const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '20px',
  color: '#2c3e50',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.3rem',
  },
}));

 
const Tagline = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  textAlign: 'start',
  color: '#34495e',
  marginBottom: '30px',
  lineHeight: 1.6,
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
}));

 
const StyledButton = styled(Button)(({ theme }) => ({
  padding: '8px 30px',
  fontSize: '0.9rem',
  fontWeight: 600,
  color: '#fff',
  backgroundColor: colorMap.blue,
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: colorMap.deepblack,
    boxShadow: '0 5px 15px rgba(52, 152, 219, 0.4)',
  },
}));

 
const SolutionHero = ({ title, tagline, imageUrl, backgroundGradient }) => {
  const navigate_to = useNavigate();
  const { translations: t } = useLang();

  const move_to_demo = () => {
    navigate_to(PagePaths.demo_request);
  };

  return (
    <HeroSection>
      <Container>
        <Grid2 container alignItems="center" spacing={4}>
          <Grid2 size={{sx: 12, md: 6}}>
            <Box>
              <Title variant="h1">{title}</Title>
              <Tagline variant="body1">{tagline}</Tagline>
              <StyledButton onClick={move_to_demo}>{t.demo_request}</StyledButton>
            </Box>
          </Grid2>
          <Grid2 size={{sx: 12, md: 6}}>
            <HeroImage src={imageUrl} alt={title} />
          </Grid2>
        </Grid2>
      </Container>
    </HeroSection>
  );
};

export default SolutionHero;
