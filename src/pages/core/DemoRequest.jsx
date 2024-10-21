import React, { useState } from 'react';
import { Button, TextField, MenuItem, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainLayout from '../../components/AppLayout';
import { Box, Container, Paper, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { demo_request_URL } from '../../services/configs';
import PagePaths from '../../PagePaths';
import { useLang } from '../../contexts/langContext';
import { makeApiRequest } from '../../services/serverdata';
import colorMap from '../../utils/ColorPalette'; 

 

const PageWrapper = {
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: '#F5F6F7',
};

const ContentContainer = {
  backgroundColor: 'white',
  borderRadius: '15px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
  padding: '2rem',
  maxWidth: '600px',
  width: '100%',
};

 

const DemoRequestForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    phone: '',
    number_of_units: '',
    role: '',
    amenities_facilities: false,
    doorman_concierge: false,
    features_interested: '',
    more_description: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { translations: t } = useLang();

  // HANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // HANDLE SUBMITTING
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setMessage('');
    setIsSubmitting(true);
    console.log("data: ", formData)
    try {
      await makeApiRequest(demo_request_URL, 'POST', formData);
      navigate(PagePaths.thank_you);
    } catch (err) {
      setMessage('Error submitting the form');
      setError(true);
      console.log(err)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Demo Request | Urbis</title>
          <meta name="description" content="Request a demo for Property Management" />
        </Helmet>
        <Box sx={PageWrapper} paddingTop={5} paddingBottom={15}>
          <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <Paper sx={ContentContainer} component="form" onSubmit={handleSubmit}>
              <Alert sx={{fontWeight: 900, mb: 2}} severity="info">
              Veuillez remplir les champs obligatoires et fournir une brève description des informations dont vous avez besoin. Un expert de notre service support vous contactera via l'adresse email que vous avez renseignée dans les plus brefs délais pour répondre à votre demande avec tous les détails nécessaires.
              </Alert>
              {/* First Name */}
              <TextField
                size='small'
                focused
                fullWidth
                margin="normal"
                label={t.first_name}
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
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

              {/* Last Name */}
              <TextField
                size='small'
                focused
                fullWidth
                margin="normal"
                label={t.last_name}
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
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

              {/* Company */}
              <TextField
                fullWidth
                margin="normal"
                focused
                size='small'
                label={t.company}
                name="company"
                value={formData.company}
                onChange={handleChange}
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

              {/* Email */}
              <TextField
                fullWidth
                margin="normal"
                focused
                label="Email"
                size='small'
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
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

              {/* Phone */}
              <TextField
                fullWidth
                focused
                margin="normal"
                size='small'
                label={t.phone}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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

              {/* Number of Units */}
              <TextField
                fullWidth
                margin="normal"
                focused
                size='small'
                label={t.number_of_units}
                name="number_of_units"
                type="number"
                slotProps={{
                  htmlInput: {
                    min: 0
                  }  
                }}
                value={formData.number_of_units}
                onChange={handleChange}
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

              {/* Role */}
              <TextField
                fullWidth
                margin="normal"
                focused
                size='small'
                label={t.role}
                name="role"
                select
                value={formData.role}
                onChange={handleChange}
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
              >
                <MenuItem value="">{t.select_role}</MenuItem>
                <MenuItem value="Property Manager">Property Manager</MenuItem>
                <MenuItem value="Board Manager">Board Manager</MenuItem>
                <MenuItem value="Security">Security</MenuItem>
                <MenuItem value="Developer">Developer</MenuItem>
                <MenuItem value="Resident">Resident</MenuItem>
              </TextField>

              {/* Amenities Facilities */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.amenities_facilities}
                    onChange={handleChange}
                    name="amenities_facilities"
                  />
                }
                label={t.amenities_facilities}
                sx={{
                  '& .MuiFormControlLabel-label': {
                    color: colorMap.deepblack,  
                    fontWeight: '700',
                    fontSize: 13
                  },
                }}
              />

              {/* Doorman Concierge */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.doorman_concierge}
                    onChange={handleChange}
                    name="doorman_concierge"
                  />
                }
                label={t.doorman_concierge}
                sx={{
                  '& .MuiFormControlLabel-label': {
                    color: colorMap.deepblack,  
                    fontWeight: '700',
                    fontSize: 13
                  },
                }}
              />

              {/* Features Interested */}
              <TextField
                fullWidth
                margin="normal"
                focused
                size='small'
                label={t.features_interested}
                name="features_interested"
                select
                value={formData.features_interested}
                onChange={handleChange}
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
              >
                <MenuItem value="">{t.select_feature}</MenuItem>
                <MenuItem value="Amenity Booking & Online Payments">Amenity Booking & Online Payments</MenuItem>
                <MenuItem value="Package & Parking Management">Package & Parking Management</MenuItem>
                <MenuItem value="Communication">Communication</MenuItem>
                <MenuItem value="Maintenance & Service Request">Maintenance & Service Request</MenuItem>
                <MenuItem value="Document Sharing & Storage">Document Sharing & Storage</MenuItem>
              </TextField>

              {/* More Description */}
              <TextField
                fullWidth
                margin="normal"
                size='small'
                focused
                label={t.more_description}
                name="more_description"
                multiline
                rows={3}
                value={formData.more_description}
                onChange={handleChange}
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

              <Button
                fullWidth
                variant="contained"
                type="submit"
                size='small'
                sx={{backgroundColor: colorMap.blue, marginTop: 2, padding: 1, ':hover':{ backgroundColor: colorMap.deepblack, color: colorMap.white} }}
                disabled={isSubmitting}
              >
                {t.submit}
              </Button>

              {error && (
                <Alert severity="error" sx={{ marginTop: 2, fontSize: '0.9rem' }}>
                  {message}
                </Alert>
              )}
            </Paper>
          </Container>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default DemoRequestForm;
