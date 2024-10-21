import React from 'react';
import { Box, Grid2, Typography, Card, CardContent, Container } from '@mui/material';
import { height, styled } from '@mui/system';
import colorMap from '../../utils/ColorPalette';

 
const Section = styled(Box)(({ theme }) => ({
  padding: '50px 0',
  background: colorMap.homo_gradient,
}));

 
const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: '15px',
  height: '300px',
  background: colorMap.forward_gradient,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
  textAlign: 'center',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    height: '350px'
  }
}));

 
const CardIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  color: '#5bc0de',
  marginBottom: '15px',
}));

 
const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  fontWeight: 700,
  color: '#343a40',
  marginBottom: '10px',
}));

 
const CardText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: colorMap.deepblack,
  textAlign: 'start'
}));

 
const AfterHero = ({ data }) => {
  return (
    <Section>
      <Container>
        <Grid2 container spacing={4}>
          {data && data.map((item, index) => (
            <Grid2  size={{ xs: 12, md: 4 }} key={index}>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
              <CustomCard>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <CardIcon>{item.icon}</CardIcon>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText>{item.text}</CardText>
                </CardContent>
              </CustomCard>
              </div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Section>
  );
};

export default AfterHero;
