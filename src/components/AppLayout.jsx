import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
 
import { useLang } from '../contexts/langContext';
import Logo from './Logo';
import Footer from './Footer';
import colorMap from '../utils/ColorPalette';
import LangSwitcher from './LangSwitcher';
import DesktopMenu from './menu/desktop/DesktopMenu';
import MobileMenu from './menu/mobile/MobileMenu';
import PagePaths from '../PagePaths';
import { useNavigate } from 'react-router-dom';
 


const drawerWidth = '75%';
 
function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {translations: t} = useLang();
  const navigate_to = useNavigate();
 
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

 
  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="div"
        component="div"
        onClick={handleDrawerToggle}
        sx={{ flexGrow: 1, padding: 1, textAlign: 'flex-start', backgroundColor: colorMap.black, display: { xs: 'block', sm: 'block' } }}
      >
        <Logo heightValue={38} />
      </Typography>
      <Divider />
      <MobileMenu/>
    </Box>
  );

 
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: colorMap.black}}>
        <Toolbar sx={{ 
          justifyContent: 'space-between', 
          display: 'flex', 
          alignItems: 'center', 
          minHeight: 'auto!important',
          paddingTop: '5px!important',
          paddingBottom: '5px!important'
          }}>
          <Typography
            variant="div"
            component="div"
            sx={{margin: 0, flexGrow: 1, textAlign: 'flex-start', display: { xs: 'block', sm: 'block' } }}
          >
            <Logo heightValue={38} />
          </Typography>

          <DesktopMenu/>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon 
              sx={{
              color: colorMap.white,
              fontSize: {
                xs: '28px',  
                lg: '32px',  
                xl: '36px'   
              }
            }}
            />
          </IconButton>
          <LangSwitcher/>
          <Button
            disableElevation
            sx={{ mr: 1, ml: 1, textTransform: 'capitalize',':hover': {backgroundColor: colorMap.deepblack, color: colorMap.white}, backgroundColor: 'darkcyan', color: '#fff', display: { xs: 'none', md: 'block' } }}
            variant="outlined"
            size="small"
            onClick={()=>{navigate_to(PagePaths.demo_request)}}
          >
           {t.free_demo_btn}
          </Button>
          <Button onClick={()=>{navigate_to(PagePaths.login)}}  disableElevation sx={{backgroundColor: colorMap.blue, color: '#fff', textTransform: 'capitalize', ':hover': {backgroundColor: colorMap.deepblack, color: colorMap.white}, display: { xs: 'none', md: 'block' } }} variant="outlined" size="small">
            {t.log_in}
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ pr: 0, pl: 0, pb: 0, pt: 5,  overflowX: 'hidden'}}>
        {children}
        <Footer/>
      </Box>
    </Box>
  );
}

export default MainLayout;
