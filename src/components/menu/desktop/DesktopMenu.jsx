import * as React from 'react';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';

import { useLang } from '../../../contexts/langContext';
import colorMap from '../../../utils/ColorPalette';
import SolutionMenuItems from './SolutionMenuItems';
import ServicesMenuItems from './ServicesMenuItems';
// import ResourcesMenuItems from './ResourcesMenuItems';
import WhyUsMenuItems from './WhyUs';
import PagePaths from '../../../PagePaths';

export default function DesktopMenu() {
    const navigate_to = useNavigate();
    const [openSolutionMegaMenu, setOpenSolutionMegaMenu] = React.useState(false);
    const [openServiceMegaMenu, setOpenServiceMegaMenu] = React.useState(false);
    // const [openRessourceMegaMenu, setOpenResourceMegaMenu] = React.useState(false);
    const [openWhyUsMegaMenu, setOpenWhyUsMegaMenu] = React.useState(false);
    const { translations: t } = useLang();
 

    const SolutionmegaMenuContent = (
        <Grow in={openSolutionMegaMenu} style={{ transformOrigin: '0 0 0' }} timeout={500}>
            <Paper elevation={4} sx={{ position: 'absolute', top: '100%', left: 0, width: '600px', zIndex: 10, }}>
               <SolutionMenuItems/>
            </Paper>
        </Grow>
    );

    const ServicesmegaMenuContent = (
        <Grow in={openServiceMegaMenu} style={{ transformOrigin: '0 0 0' }} timeout={500}>
            <Paper elevation={4} sx={{ position: 'absolute', top: '100%', left: 0, width: '300px', zIndex: 10 }}>
               <ServicesMenuItems/>
            </Paper>
        </Grow>
    );

    // const ResourcesmegaMenuContent = (
    //     <Grow in={openRessourceMegaMenu} style={{ transformOrigin: '0 0 0' }} timeout={500}>
    //         <Paper elevation={4} sx={{ position: 'absolute', top: '100%', left: 0, width: '450px', zIndex: 10 }}>
    //            <ResourcesMenuItems/>
    //         </Paper>
    //     </Grow>
    // );

    const WhyUsmegaMenuContent = (
        <Grow in={openWhyUsMegaMenu} style={{ transformOrigin: '0 0 0' }} timeout={500}>
            <Paper elevation={4} sx={{ position: 'absolute', top: '100%', left: 0, width: '200px', zIndex: 10 }}>
               <WhyUsMenuItems/>
            </Paper>
        </Grow>
    );


    return (
        <Box sx={{ display: { flexGrow: 1, xs: 'none', sm: 'none', md: 'block' }, position: 'relative' }}>
            <Button
                size="small"
                sx={{ color: colorMap.white, marginRight: '10px!important', textTransform: 'capitalize' }}
                onMouseEnter={()=>{setOpenSolutionMegaMenu(true)}}
                onMouseLeave={()=>{setOpenSolutionMegaMenu(false)}}
                endIcon={openSolutionMegaMenu ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}
            >
                {t.solutions}
                {SolutionmegaMenuContent}
            </Button>
            <Button 
                size="small" 
                sx={{marginRight: '10px!important', fontSize: '0.9rem', color: colorMap.white, textTransform: 'capitalize' }}
                onMouseEnter={()=>{setOpenServiceMegaMenu(true)}}
                onMouseLeave={()=>{setOpenServiceMegaMenu(false)}}
                endIcon={openServiceMegaMenu ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}
            >
                {t.services}
                {ServicesmegaMenuContent}
            </Button>
            {/* <Button 
                size="small" 
                sx={{marginRight: '10px!important', fontSize: '0.9rem', color: colorMap.white, textTransform: 'capitalize' }}
                onMouseEnter={()=>{setOpenResourceMegaMenu(true)}}
                onMouseLeave={()=>{setOpenResourceMegaMenu(false)}}
                endIcon={openRessourceMegaMenu ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}
            >
                {ResourcesmegaMenuContent}
                {t.resources}
            </Button> */}
            <Button
              size="small" 
              sx={{display: {xs: 'none', sm: 'none', md: 'none', lg: 'inline-flex'} ,marginRight: '10px!important', fontSize: '0.9rem', color: colorMap.white, textTransform: 'capitalize' }}
              onMouseEnter={()=>{setOpenWhyUsMegaMenu(true)}}
              onMouseLeave={()=>{setOpenWhyUsMegaMenu(false)}}
              endIcon={openWhyUsMegaMenu ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}
            >
                {t.why_us}
                {WhyUsmegaMenuContent}
            </Button>
            <Button
              size="small" 
              sx={{display: {md: 'inline-flex', lg: 'none'}, marginRight: '10px!important', fontSize: '0.9rem', color: colorMap.white, textTransform: 'capitalize' }}
              onMouseEnter={()=>{setOpenWhyUsMegaMenu(true)}}
              onMouseLeave={()=>{setOpenWhyUsMegaMenu(false)}}
              endIcon={openWhyUsMegaMenu ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}
            >
                {t.more}
                {WhyUsmegaMenuContent}
            </Button>
            <Button onClick={()=>{navigate_to(PagePaths.contact)}} size="small" sx={{display: {xs: 'none', sm: 'none', md: 'none', lg: 'inline-block'}, marginRight: '10px!important', fontSize: '0.9rem', color: colorMap.white, textTransform: 'capitalize' }}>
                {t.contact}
            </Button>
        </Box>
    );
}

 