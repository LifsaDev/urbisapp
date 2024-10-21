import React from 'react';
import {Grid2, Box, Typography, Button, Link } from '@mui/material';
import { useLang } from '../../../contexts/langContext';
import PagePaths from '../../../PagePaths';
import colorMap from '../../../utils/ColorPalette';

const features = {
    Learn: [
    { name: 'articles', link_to: "*" },
    { name: 'case_studies', link_to: "*" },
    { name: 'webinars', link_to: "*" },
    { name: 'savings_calculator', link_to: "*" },
    { name: 'technology_score', link_to: "*" },
  ],
  Help: [
    { name: 'help_center', link_to: "*" },
    { name: 'community_forum', link_to: "*" },
    { name: 'feature_suggestion', link_to: "*" },
  ] 
};

export default function ResourcesMenuItems(){
  const { translations: t } = useLang();

  return (
    <Box sx={{backgroundColor: colorMap.black, p: 2, overflowY: 'auto', maxHeight: '400px', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
      <Grid2 container spacing={2}>
        {/* Learn */}
        <Grid2 xs={12} md={6} lg={4}>
          <Typography variant="h6" sx={{color: colorMap.turquoiseClair, textAlign: 'start', fontWeight: 'bold', mb: 2, fontSize: '0.9rem'}}>
            {t.learn}
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 , textAlign: 'start'}}>
            {features.Learn.map((item, index) => (
              <li key={index}>
                <Link href={item.link_to} sx={{color: colorMap.white, fontWeight: 400, fontSize: '0.87rem',  textDecoration: 'none',   display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                  {t[item.name]}
                </Link>
              </li>
            ))}
          </ul>
        </Grid2>

        {/* Help */}
        <Grid2 xs={12} md={6} lg={4}>
          <Typography variant="h6" sx={{color: colorMap.turquoiseClair, textAlign: 'start', fontWeight: 'bold', mb: 2, fontSize: '0.9rem' }}>
            {t.product_help}
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 , textAlign: 'start'}}>
            {features.Help.map((item, index) => (
              <li key={index}>
                <Link href={item.link_to} sx={{color: colorMap.white, fontWeight: 400, fontSize: '0.87rem',  textDecoration: 'none',  display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                  {t[item.name]}
                </Link>
              </li>
            ))}
          </ul>
        </Grid2>
      </Grid2>
    </Box>
  );
};

 