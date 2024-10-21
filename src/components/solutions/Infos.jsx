import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled, textAlign } from '@mui/system';
import colorMap from '../../utils/ColorPalette';

 
const Section = styled(Box)(({ theme, background }) => ({
  padding: '50px 0',
  background: colorMap.forward_gradient,
}));

 
const ContentWrapper = styled(Box)(({ theme, imageposition }) => ({
  display: 'flex',
  flexDirection: imageposition === 'left' ? 'row' : 'row-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  background: colorMap.light_gradient,
  borderRadius: '15px',
  boxShadow: '0 6px 30px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

 
const ImageWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: '50%',
  '& img': {
    width: 'auto',
    borderRadius: '15px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '80%',
    marginBottom: '20px',
  },
}));

 
const TextContent = styled(Box)(({ theme }) => ({
  flex: 1,
  color: colorMap.deepblack,
  padding: '20px',
  textAlign: 'flex-start',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    padding: 0,
  },
}));

 
const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: colorMap.turquoiseDark,
  marginBottom: '20px',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.0rem',
    textAlign: 'start'
  },
}));

 
const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#525252',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8rem',
    textAlign: 'start'
  },
}));

 
const ImageTextSection = ({ imageSrc, imagePosition = 'left', title, description, background }) => {
  return (
    <Section>
      <Container>
        <ContentWrapper imageposition={imagePosition}>
          <ImageWrapper>
            <img src={imageSrc} alt="Illustration" />
          </ImageWrapper>
          <TextContent>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </TextContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default ImageTextSection;
