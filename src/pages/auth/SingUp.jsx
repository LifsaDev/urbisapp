import React, { useState } from 'react';
import { Box, Container, Button, TextField, Alert, InputAdornment, IconButton, Typography } from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { users_URL } from '../../services/configs';
import { useLang } from '../../contexts/langContext';
import { api } from '../../services/configs';
import PagePaths from '../../PagePaths';
import colorMap from '../../utils/ColorPalette';

const SignUp = () => {
  // DEFINE STATE AND CONSTANTS
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registration_code, setRegistrationCode] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate_to = useNavigate();
  const { translations: t } = useLang();

  // HANDLE SUBMITTING
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      setMessage(t.min_password_length);
      setError(true);
      return;
    }
    try {
      await api.post(`${users_URL}create_resident_account/`, { username, email, password, registration_code });
      setUsername('');
      setPassword('');
      setEmail('');
      alert('Account created successfully! Please navigate to the login page.');
      navigate_to(PagePaths.login);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
        setMessage(error.response.data.error);
      } else {
        setError(t.error_expect);
        setMessage(t.error_expect);
      }
    }
  };

  // TOGGLE PASSWORD VISIBILITY
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign Up | Dorsia Management</title>
        <meta name="description" content="Create your account with Dorsia Management" />
      </Helmet>

      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          pr: 2,
          pl: 2,
          pt: 1,
          pb: 1
        }}
      >
        <Container
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',
            width: '500px',
            p: 4,
            textAlign: 'center',
          }}
        >
          <Alert severity="info" sx={{ mb: 3 }}>
            {t.registrationcode_indication}
          </Alert>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              size='small'
              label="Registration Code"
              variant="outlined"
              margin="normal"
              value={registration_code}
              onChange={(e) => setRegistrationCode(e.target.value)}
              required
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
            />
            <TextField
              fullWidth
              label={t.username}
              size='small'
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
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
            />
            <TextField
              fullWidth
              label="Email"
              size='small'
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
            />
            <TextField
              fullWidth
              focused
              label={t.password}
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              size='small'
              margin="normal"
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, backgroundColor: '#295979', ':hover': {backgroundColor: colorMap.black, color: colorMap.white} }}
            >
              {t.sign_up}
            </Button>
          </form>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {message}
            </Alert>
          )}

          <Typography variant="body2" sx={{ mt: 3 }}>
            <span style={{color: "black"}}>{t.do_you_have_account}</span>{' '}
            <a href={PagePaths.login} style={{ color: '#007bff', fontWeight: 900, textDecoration: 'none' }}>
              {t.log_in}
            </a>
          </Typography>
        </Container>
      </Box>
    </HelmetProvider>
  );
};

export default SignUp;
