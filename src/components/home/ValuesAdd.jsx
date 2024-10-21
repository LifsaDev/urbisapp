import React from 'react';
import { Container, Grid2, Box, Typography } from '@mui/material';  
import { styled } from '@mui/system';
import { color, motion } from 'framer-motion';
import { useLang } from '../../contexts/langContext';
import colorMap from '../../utils/ColorPalette';

 
 
const ValuePropSection = styled(Box)(({ theme }) => ({
  padding: '60px 0',
  background: colorMap.homo_gradient,
}));

 
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 800,
  color: colorMap.deepblack,
  textAlign: 'center',
  marginBottom: '60px',
  position: 'relative',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #3f51b5, #2196f3)',
    borderRadius: '2px',
  },
}));
 

const ValueCard = styled(motion.create(Box))(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  height: '430px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',   
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',  
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',  
  },
  [theme.breakpoints.down('sm')]: {
    height: '480px',
  },
}));


 
const ValueImage = styled(Box)(({ src }) => ({
  height: '200px',
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(63, 81, 181, 0.2), rgba(33, 150, 243, 0.2))',
  },
}));

 
const ValueContent = styled(Box)(({ theme }) => ({
  padding: '10px',
}));
 
const ValueTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 700,
  color: colorMap.black,
  marginBottom: '15px',
}));

 
const ValueDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  textAlign: 'start',
  color: colorMap.deepblack,
  lineHeight: 1.6,
  marginBottom: '20px',
}));

 
 
const ValueAdd = () => {
  const { translations: t } = useLang();

  const values = [
    { key: 'chaos', imgSrc: '/static/replaceChaos.png' },
    { key: 'savetime', imgSrc: '/static/saveTime.png' },
    { key: 'deliver', imgSrc: '/static/deliver_experience.png' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ValuePropSection>
      <Container>
        <SectionTitle>{t.value_proposition_title || 'Notre Proposition de Valeur'}</SectionTitle>
        <Grid2 container spacing={2}>
          {values.map(({ key, imgSrc }, index) => (
            <Grid2 size={{ xs: 12, md: 4 }} key={key} >
              <div data-aos="zoom-in-down"  data-aos-duration="2000">
                <ValueCard
                  data-aos="flip-right"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ValueImage src={imgSrc} />
                  <ValueContent>
                    <ValueTitle>{t[`${key}_value`]}</ValueTitle>
                    <ValueDescription>{t[`${key}_description`]}</ValueDescription>
                  </ValueContent>
                </ValueCard>
              </div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </ValuePropSection>
  );
};

export default ValueAdd;
