import React, { useState } from 'react';
import { Box,Paper, Container, Typography, Button, TextField, InputAdornment, IconButton, Alert } from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { login_URL } from '../../services/configs';
import { setAccessToken, setCommunityproject, setRefreshToken, setManagerPhone, setManagerEmail, setUsername, setPermission } from './secureStorage';
import { useLang } from '../../contexts/langContext';
import PagePaths from '../../PagePaths';
import { api } from '../../services/configs';
import logo_ap from '../../assets/final_log_white.png';
import colorMap from '../../utils/ColorPalette';
import { createTheme } from '@mui/material/styles';
 

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,       
      sm: 600,     
      md: 900,   
      mdextend: 936,   
      extramd: 768,
      lg: 1200,    
      xl: 1536,     
    },
  },
});

const PageWrapper = {
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  padding: '10px',
  [theme.breakpoints.down('md')]: {
    height: '100vh',
    width: '100vw',
    maxWidth: '100vw',
  },
};

const ContentContainer = {
  backgroundColor: 'white',
  borderRadius: '15px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
  padding: '2rem',
  maxWidth: '800px',
  width: '800px',
  [theme.breakpoints.down('md')]: {
    height: '90vh',
    width: '100vw',
    maxWidth: '100vw',
    padding: '1.1rem',
  },
};

const PaperSx = {
  flexGrow: 1,
  pr: 2,
  pl: 2,
  [theme.breakpoints.down('md')]: {
    height: '80vh',
    paddingTop: '10px'
  },
}

const LeftSection = {
  background: 'linear-gradient(135deg, #f9fafc 0%, #dfe9f3 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  padding: '0.9rem',
  maxWidth: '400px',
  display: { xs: 'none', md: 'flex' },
};

 

const StyledLink = {
  color: '#007bff',
  textDecoration: 'none',
  fontWeight: 'bold',
  '&:hover': {
    textDecoration: 'underline',
  },
};

const Logo = {
  height: '64px',
  width: 'auto',
  display: 'block',
  margin: '0 auto 1.5rem'
};

const LogoSmall = {
  height: '36px',
  width: 'auto',
  display: 'block',
  margin: '0 auto 1.5rem'
};
 
const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate_to = useNavigate();
  const { translations: t } = useLang();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      const response = await api.post(login_URL, { identifier, password });
      if (response && response.status === 200) {
        const { project, manager_email, manager_phone, permission, status, username, access, refresh } = response.data;
        setAccessToken(access);
        setRefreshToken(refresh);
        setUsername(username);
        setPermission(permission);
        setManagerEmail(manager_email);
        setManagerPhone(manager_phone);
        setCommunityproject(project);
        localStorage.setItem('lat', new Date().getTime());
        setError('');
        setPassword('');
        setIdentifier('');
        if (status === 'Completed') {
          if (permission === 'STAFF' || permission === 'SYNDIC') {
            navigate_to(PagePaths.window_choice);
          } else {
            navigate_to(PagePaths.app_dashboard);
          }
        } else {
          navigate_to(PagePaths.user_details);
        }
      } else {
        setError(response.data.error);
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        setError('Failed to execute the request! Try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const move_to_signup = () => {
    navigate_to(PagePaths.sign_up);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Login | Urbis</title>
        <meta name="description" content="Connect to your Urbis Space." />
      </Helmet>
      <Box sx={PageWrapper}>
        <Container sx={ContentContainer}>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
            <Box sx={LeftSection}>
              <Link to="/">
                <img src={logo_ap} alt="Logo" style={Logo} />
              </Link>
              <Typography sx={{color: colorMap.black, textAlign: 'start'}}>{t.login_welcome}</Typography>
              <Button fullWidth size='small' variant="contained" sx={{ mt: 7, backgroundColor: colorMap.blue}} onClick={() => navigate_to(PagePaths.demo_request)}>
                {t.free_demo_btn}
              </Button>
            </Box>  
            <Paper elevation={2} sx={PaperSx}>
              <Box sx={{[theme.breakpoints.up('extramd')]: {display: 'none'}, display: 'block'}}>
                <Link to="/">
                  <img  src={logo_ap} alt="Logo" style={LogoSmall} />
                </Link>
                <hr style={{marginTop: '0px'}} />
              </Box>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  focused
                  label={t.username}
                  size='small'
                  variant="outlined"
                  margin="normal"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                  sx={{
                    '& .MuiInputLabel-root.Mui-focused': {
                      fontWeight: '700', 
                      color: colorMap.deepblack
                    },
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: colorMap.black, 
                        borderWidth: '1px', 
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label={t.password}
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  margin="normal"
                  focused
                  size='small'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  sx={{
                    '& .MuiInputLabel-root.Mui-focused': {
                      fontWeight: '700', 
                      color: colorMap.deepblack
                    },
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: colorMap.black, 
                        borderWidth: '1px', 
                      },
                    },
                  }}
                  slotProps={{
                    input: {
                      endAdornment:
                        <InputAdornment position="end">
                            <IconButton onClick={togglePasswordVisibility} edge="end">
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                      }
                    }
                  }
                />
                <Button  size='small' disableElevation fullWidth variant="contained" type="submit" disabled={isSubmitting} sx={{ mt: 2, backgroundColor: colorMap.turquoiseDark, color: colorMap.white,':hover': {backgroundColor: colorMap.black, color: colorMap.white} }}>
                  {t.log_in}
                </Button>
              </form>
              <Typography align="center" sx={{ mt: 2 }}>
                {t.forgot_password}{' '}
                <Link to={PagePaths.password_reset} style={StyledLink}>
                  {t.reset_password}
                </Link>
              </Typography>
              <Button size='small' fullWidth variant="contained" sx={{ mt: 2, backgroundColor: colorMap.blue, color: colorMap.white, ':hover': {backgroundColor: colorMap.black, color: colorMap.white} }} onClick={move_to_signup}>
                {t.sign_up}
              </Button>
              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}
            </Paper>
          
          </Box>
        </Container>
      </Box>
    </HelmetProvider>
  );
};

export default Login;
