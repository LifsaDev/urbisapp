import React, { useState } from 'react';
import {
   Button, TextField, Typography, Box, Alert ,  Container
} from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { passwordReset_URL } from '../../services/configs';
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


 
const PasswordReset = () => {
  // Define state and constants
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { translations: t } = useLang();
  const navigate_to = useNavigate();

 
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setMessage('');
    setIsSubmitting(true);

    try {
      await makeApiRequest(passwordReset_URL, 'POST', { email });
      setMessage(t.success_reset_password);
      setError(false);
    } catch (error) {
      setError(true);
      setMessage(t.user_not_exist);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Password Reset | Urbis</title>
        <meta name="description" content="Reset your password." />
      </Helmet>

      <Box sx={PageWrapper}>
        <Container sx={ContentContainer}>
          <Typography sx={{ color: colorMap.deepblack, mb: 2 }}><strong>{t.reset_password}</strong></Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              focused
              size="small"
              sx={{
                '& .MuiInputLabel-root.Mui-focused': {
                  fontWeight: '700',
                  color: colorMap.deepblack,
                },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: colorMap.black,
                    borderWidth: '1px',
                  },
                },
                mb: 2,
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isSubmitting}
              sx={{
                mt: 2,
                backgroundColor: colorMap.blue,
                color: colorMap.white,
                ':hover': { backgroundColor: colorMap.black, color: colorMap.white },
              }}
            >
              {t.reset_password}
            </Button>
          </form>

          {!error && message && <Alert severity="success" sx={{ mt: 2 }}>{message}</Alert>}
          {error && message && <Alert severity="error" sx={{ mt: 2 }}>{message}</Alert>}

          <Typography variant="body2" sx={{ mt: 2 }}>
            {t.remember_password}{' '}
            <a href={PagePaths.login} style={{ color: colorMap.blue, fontWeight: 900 }}>
              {t.log_in}
            </a>
          </Typography>
        </Container>
      </Box>
    </HelmetProvider>
  );
};
 

export default PasswordReset;
