import React, { useEffect, useRef } from 'react';
import { Typography, styled } from '@mui/material';
import colorMap from '../../utils/ColorPalette';

const AnimatedTypography = styled(Typography)(({ theme }) => ({
  fontSize: '2.8rem', 
  fontWeight: 'bold',
  textAlign: 'start',
  color: colorMap.white,
  marginBottom: '30px',
  marginTop: '2px',
  lineHeight: 1.2,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem', 
  },
}));

const AnimatedLetter = styled('span')(({ theme }) => ({
  display: 'inline-block',
  '@keyframes fadeOutToTop': {
    '0%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
    '100%': {
      opacity: 0,
      transform: 'translateY(-20px)',
    },
  },
  animation: 'fadeOutToTop 1000ms ease infinite',
}));

const AnimatedText = ({ text, duration = 1000, delay = 100 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animateLetters = () => {
      container.innerHTML = '';
      text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        span.style.animationDelay = `${index * delay}ms`;
        span.style.animationDuration = `${duration}ms`;
        span.className = AnimatedLetter.toString();
        container.appendChild(span);
      });
    };

    animateLetters();

    const intervalId = setInterval(() => {
      animateLetters();
    }, (text.length * delay) + duration);

    return () => clearInterval(intervalId);
  }, [text, duration, delay]);

  return (
    <AnimatedTypography ref={containerRef} component="div">
      { text }
    </AnimatedTypography>
  );
};

export default AnimatedText;