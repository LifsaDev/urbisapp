import * as React from 'react';
import { Box, Link } from '@mui/material';
import PagePaths from '../../../PagePaths';
import { useLang } from '../../../contexts/langContext';
import colorMap from '../../../utils/ColorPalette';
 
export default function WhyUsMenuItems() {
    const {translations: t} = useLang();
 
    return (
        <Box sx={{backgroundColor: colorMap.black, display: 'flex', justifyContent: 'space-between', p: 2 }}>
           <ul style={{ listStyleType: 'none', padding: 0 ,mt: 0, textAlign: 'start'}}>    
                <li>
                    <Link href={PagePaths.why_dorsia_management} sx={{color: colorMap.white, fontWeight: 400,fontSize: '0.87rem',  textDecoration: 'none',   display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                        {t.why_dorsia_management}
                    </Link>
                    <Link href={PagePaths.testimonial_page} sx={{color: colorMap.white, fontWeight: 400,fontSize: '0.87rem',  textDecoration: 'none',  display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                        {t.testimonials}
                    </Link>
                    <Link href={PagePaths.about_us} sx={{color: colorMap.white, fontWeight: 400,fontSize: '0.87rem',  textDecoration: 'none',   display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                        {t.about_us_title}
                    </Link>
                    <Link href={PagePaths.our_value} sx={{color: colorMap.white, fontWeight: 400,fontSize: '0.87rem',  textDecoration: 'none',   display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                        {t.our_values}
                    </Link>
                </li>  
          </ul>
        </Box>
    );
}

 