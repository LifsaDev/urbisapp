import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import { styled } from '@mui/system';
import { FaHeadset, FaBook, FaUsers, FaMedal } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLang } from '../../contexts/langContext';
import supportQual from '../../assets/supportQual.png';
import colorMap from '../../utils/ColorPalette';
 
const SupportQualitySection = styled(Box)(({ theme }) => ({
  padding: '60px 0',
  background: colorMap.light_gradient,
}));

 
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 800,
  alignSelf: 'center',
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
 
 
const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#34495e',
  lineHeight: 1.6,
  marginBottom: '30px',
  textAlign: 'justify',
}));

 
 
const FeatureItem = styled(motion.create(Box))(({ theme }) => ({
  background: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
}));

 
const FeatureIcon = styled(Box)(({ theme }) => ({
  fontSize: '24px',
  color: '#3498db',
}));

 
const FeatureText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#2c3e50',
  margin: 0,
}));
 

const SupportQuality = () => {
  const { translations: t } = useLang();

  return (
    <SupportQualitySection>
      <Container>
        <Grid2 container spacing={4} alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box>
              <SectionTitle>{t.home_support_quality_title}</SectionTitle>
              <Description>{t.home_support_quality_description}</Description>
              
              <Grid2 container spacing={2} mt={4}>
                <Grid2  size={{ xs: 12, md: 6 }}>
                  <FeatureItem whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <FeatureIcon><FaHeadset /></FeatureIcon>
                    <FeatureText>{t.home_support_quality_24hours}</FeatureText>
                  </FeatureItem>
                </Grid2>
                <Grid2  size={{ xs: 12, md: 6 }}>
                  <FeatureItem whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <FeatureIcon><FaBook /></FeatureIcon>
                    <FeatureText>{t.home_support_quality_guide}</FeatureText>
                  </FeatureItem>
                </Grid2>
                <Grid2  size={{ xs: 12, md: 6 }}>
                  <FeatureItem whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <FeatureIcon><FaUsers /></FeatureIcon>
                    <FeatureText>{t.home_support_quality_forum}</FeatureText>
                  </FeatureItem>
                </Grid2>
                <Grid2  size={{ xs: 12, md: 6 }}>
                  <FeatureItem whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <FeatureIcon><FaMedal /></FeatureIcon>
                    <FeatureText>{t.home_support_quality_solutions}</FeatureText>
                  </FeatureItem>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
          <Grid2  size={{ xs: 12, md: 6 }}>
            <Box sx={{ maxWidth: '500px', width: '100%' }}>
              <Box component="img" src={supportQual} alt="Support Quality" sx={{ width: '100%', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }} />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </SupportQualitySection>
  );
};

export default SupportQuality;
