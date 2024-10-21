import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';
import PagePaths from '../../../PagePaths';
import { useLang } from '../../../contexts/langContext';
import colorMap from '../../../utils/ColorPalette';
 
export default function ServicesMenuItems() {
    const {translations: t} = useLang();
 
    return (
        <Box sx={{backgroundColor: colorMap.black, display: 'flex', justifyContent: 'space-between', p: 2 }}>
           <ul style={{ listStyleType: 'none', padding: 0 , textAlign: 'start'}}>    
                <li>
                    <Link href={PagePaths.service_apartment} sx={{color:colorMap.white, fontWeight: 400,fontSize: '0.87rem',  textDecoration: 'none',   display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                        {t.service_apartment}
                    </Link>
                    <Link href={PagePaths.service_hoa} sx={{color:colorMap.white, fontWeight: 400,fontSize: '0.87rem',  textDecoration: 'none', display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                        {t.service_communities}
                    </Link>
                    <Link href={PagePaths.company_management} sx={{color:colorMap.white, fontWeight: 400,fontSize: '0.87rem',  textDecoration: 'none',  display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                        {t.service_management}
                    </Link>
                </li>  
          </ul>
        </Box>
    );
}

 