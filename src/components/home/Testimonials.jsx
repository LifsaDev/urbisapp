import React from 'react';
import { Box, Grid2, Avatar as MUIAvatar, Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { FaStar, FaQuoteLeft, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import { useLang } from '../../contexts/langContext';
import avatar from '../../assets/avatar2.png';
import colorMap from '../../utils/ColorPalette';

 
const TestimonialsSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  background: colorMap.forward_gradient
}));

 
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 800,
  color: colorMap.deepblack,
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  marginBottom: '60px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '5px',
    background: 'linear-gradient(90deg, #3498db, #2ecc71)',
    borderRadius: '2.5px',
  },
}));

 
const TestimonialCard = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '20px',
  height: '400px',
  padding: '15px',
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('md')]: {
    height: '450px',
  }
}));

 
const PersonInfo = styled(Box)(({ theme }) => ({
  flexGrow: 1,
}));

 
const Name = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  fontWeight: 700,
  color: '#2c3e50',
  margin: '0 0 5px',
}));

 
const Role = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#7f8c8d',
  margin: 0,
}));

 
const Rating = styled(Box)(({ theme }) => ({
  color: '#f1c40f',
  fontSize: '1.2rem',
  marginBottom: '15px',
}));

 
const TestimonialContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  textAlign: 'start',
  fontSize: '1.1rem',
  color: colorMap.deepblack,
  lineHeight: 1.7,
  marginBottom: '20px',
  flexGrow: 1,
}));

 
const Source = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  fontSize: '0.9rem',
  color: '#95a5a6',
}));

const testimonials = [
  {
    name: 'Boulma Ahma',
    role: 'CEO, Tech BLEDOAI',
    avatar: avatar,
    rating: 5,
    content: 'home_testimonial_jhon',
    source: 'LinkedIn',
    sourceUrl: 'https://linkedin.com/in/',
  },
  {
    name: 'Widi Ibrahim',
    role: 'Marketing Director, GRETAL',
    avatar: avatar,
    rating: 5,
    content: 'home_testimonial_jan',
    source: 'Twitter',
    sourceUrl: 'https://twitter.com/',
  },
  {
    name: 'Mohamed Belma',
    role: 'Founder, StartUp ApsoL',
    avatar: avatar,
    rating: 5,
    content: 'home_testimonial_alex',
    source: 'Company Website',
    sourceUrl: 'https://startupventures.com/testimonials',
  },
];

 
const renderStars = (rating) => {
  return [...Array(5)].map((_, index) => (
    <FaStar key={index} color={index < rating ? '#f1c40f' : '#bdc3c7'} />
  ));
};
 
const getSourceIcon = (source) => {
  switch (source.toLowerCase()) {
    case 'linkedin':
      return <FaLinkedin size={32} />;
    case 'twitter':
      return <FaTwitter size={32} />;
    default:
      return <FaGlobe size={32} />;
  }
};

const Testimonials = () => {
  const { translations: t } = useLang();

  return (
    <TestimonialsSection>
      <Container>
        <SectionTitle>{t.home_testimonial_section_title}</SectionTitle>
        <Grid2 container spacing={2}>
          {testimonials.map((testimonial, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 4 }}>
              <div data-aos="zoom-in-down"  data-aos-duration="2000">
              <TestimonialCard>
                <Box display="flex" alignItems="center" mb={2}>
                  <MUIAvatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 70, height: 70, marginRight: 2, border: '3px solid #3498db' }} />
                  <PersonInfo>
                    <Name>{testimonial.name}</Name>
                    <Role>{testimonial.role}</Role>
                  </PersonInfo>
                </Box>
                <Rating>{renderStars(testimonial.rating)}</Rating>
                <TestimonialContent>
                  <FaQuoteLeft style={{ position: 'absolute', top: -20, left: -10, color: '#42675d', fontSize: '2.5rem', opacity: 0.2 }} />
                  {t[testimonial.content]}
                </TestimonialContent>
                <Source>
                  Source:{' '}
                  <IconButton component="a" href={testimonial.sourceUrl} target="_blank" rel="noopener noreferrer" sx={{ color: '#3498db', marginLeft: 1 }}>
                    {getSourceIcon(testimonial.source)}
                  </IconButton>
                </Source>
              </TestimonialCard>
              </div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
