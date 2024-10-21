import React, { useState } from 'react';
import {
  Container, Button, TextField, Typography, Box, Alert,  InputAdornment, IconButton
} from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { passwordConfirm_URL } from '../../services/configs';
import { useLang } from '../../contexts/langContext';
import { makeApiRequest } from '../../services/serverdata';
import colorMap from '../../utils/ColorPalette';
import PagePaths from '../../PagePaths';
import { createTheme } from '@mui/material/styles';
 

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,       
      sm: 600,     
      md: 900,   
      mdextend: 936,   
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

const PasswordResetConfirm = () => {
  // Define constants and states
  const { uid, token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { translations: t } = useLang();
  const navigate_to = useNavigate();
 
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage(t.password_not_match);
      setError(true);
      return;
    }
    if (newPassword.length < 8 || 
      !/[A-Z]/.test(newPassword) || 
      !/[a-z]/.test(newPassword) || 
      !/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
      setMessage(t.min_password_lenght);
      setError(true);
      return;
    }
    try {
      await makeApiRequest(passwordConfirm_URL, 'POST', { uidb64: uid, token, new_password: newPassword });
      setMessage(t.confirm_reset_success);
      setError(false);
      setTimeout(() => navigate_to(PagePaths.login), 2000);  
    } catch (error) {
      setError(true);
      setMessage(t.error_expect);
    }
  };

  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Confirm Password | Urbis</title>
        <meta name="description" content="Confirm Reset your password." />
      </Helmet>

      <Box sx={PageWrapper}>
        <Container sx={ContentContainer}>
          <Typography sx={{ color: colorMap.deepblack, mb: 2 }}>
            <strong>{t.confirm_password}</strong>
          </Typography>
          <hr />
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="New Password"
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              focused
              size="small"
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
                mb: 2,
                mt: 4
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
  
            <TextField
              fullWidth
              label="Confirm password"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              size="small"
              focused
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
            

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: colorMap.blue,
                color: colorMap.white,
                ':hover': { backgroundColor: colorMap.black, color: colorMap.white },
              }}
            >
              {t.confirm_password}
            </Button>
          </form>

          {message && (
            <Alert severity={error ? "error" : "success"} sx={{ mt: 2 }}>
              {message}
            </Alert>
          )}
        </Container>
      </Box>
    </HelmetProvider>
  );
};

 

export default PasswordResetConfirm;
