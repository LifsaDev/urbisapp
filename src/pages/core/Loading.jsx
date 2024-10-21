import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import colorMap from '../../utils/ColorPalette';

// Page wrapper using MUI's Box
const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colorMap.black,
}));

// Container with custom styling
const ContentContainer = styled(Box)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
  padding: '2rem',
  maxWidth: '600px',
  textAlign: 'center',
  
}));

 

const Loading = () => {
 
  return (
      <PageWrapper>
        <ContentContainer>
            <CircularProgress color='secondary' size={100}/>
        </ContentContainer>
      </PageWrapper>
  );
};

export default Loading;
