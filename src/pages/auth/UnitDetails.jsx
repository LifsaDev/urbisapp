import React, { useState, useEffect } from 'react';
import {
  Box, Button, TextField, Typography, Container, Grid2 as Grid, Card, CardContent, Alert,  Stepper, Step, StepLabel, LinearProgress
} from '@mui/material';
import { styled } from '@mui/system';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { unit_vehicles_URL, unit_pets_URL } from '../../services/configs';
import { makeApiRequest } from '../../services/serverdata';
import { useLang } from '../../contexts/langContext';
import PagePaths from '../../PagePaths';
import colorMap from '../../utils/ColorPalette';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});


const StepContainer = styled(Box)(() => ({
  maxWidth: '800px',
  width: '800px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const StepPercentContainer = styled(Box)(() => ({
  maxWidth: '250px',
  width: '250px',
  [theme.breakpoints.up('md')]: {
    display: 'none',
    width: '500px',
    maxWidth: '500px',
  },
}));


const UnitDetails = () => {
  const [vehicles, setVehicles] = useState([{ id: null, vehicle_make: '', vehicle_model: '', vehicle_color: '', license_province: '', license_plate_number: '', parking_spot: '' }]);
  const [pets, setPets] = useState([{ id: null, type: '', name: '' }]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(true);
  const { translations: t } = useLang();
  const navigate = useNavigate();

  const steps = [
    t.sign_up,
    t.user_details,
    t.user_contacts,
    t.unit_details,
    t.electronic_consent_title,
    t.proof_of_residence_title,
  ];

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [vehiclesRes, petsRes] = await Promise.all([
          makeApiRequest(unit_vehicles_URL, "GET"),
          makeApiRequest(unit_pets_URL, "GET")
        ]);
        setVehicles(vehiclesRes.data);
        setPets(petsRes.data);
      } catch (error) {
        setError(t.error_fetching_details);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [t]);

 
  const handleArrayChange = (setter, index, field, value) => {
    setter(prev => {
      const newArray = [...prev];
      newArray[index] = { ...newArray[index], [field]: value };
      return newArray;
    });
  };

  const handleAddItem = (setter) => {
    setter(prev => [...prev, { id: null }]);
  };

  const handleRemoveItem = (setter, index) => {
    setter(prev => prev.filter((_, i) => i !== index));
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const vehiclesRequests = vehicles.map(vehicle => vehicle.id
        ? makeApiRequest(`${unit_vehicles_URL}${vehicle.id}/`, "PUT", vehicle)
        : makeApiRequest(unit_vehicles_URL, "POST", vehicle)
      );
      const petsRequests = pets.map(pet => pet.id
        ? makeApiRequest(`${unit_pets_URL}${pet.id}/`, "PUT", pet)
        : makeApiRequest(unit_pets_URL, "POST", pet)
      );
      await Promise.all([...vehiclesRequests, ...petsRequests]);
      navigate(PagePaths.electronic_singature);
    } catch (error) {
      setError(t.error_saving_unit_details);
    }
  };

 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Unit Details | Urbis</title>
        <meta name="description" content="Manage your unit details with Urbis" />
      </Helmet>

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          width: '100vw',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          py: 4,
        }}
      >
        <Container maxWidth="md">
          <StepContainer>
            <Stepper activeStep={3} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </StepContainer>
          <StepPercentContainer>
            <LinearProgressWithLabel value={50} />
          </StepPercentContainer>
          <Typography variant="h5" sx={{ color: colorMap.deepblack, mb: 2, [theme.breakpoints.up('md')]: {display: 'none'} }}>
            <strong>{t.unit_details}</strong>
          </Typography>
          <form onSubmit={handleSubmit}>
            <Card sx={{ mb: 4, mt: 5 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {t.vehicles}
                </Typography>
                <hr />

                {vehicles.map((vehicle, index) => (
                  <Grid container spacing={2} key={index} sx={{ mb: 3 }}>
                    <Grid size={{xs: 12, md: 4}}>
                      <TextField
                        fullWidth
                        label={t.vehicle_make}
                        value={vehicle.vehicle_make}
                        focused
                        size='small'
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
                          mb: 2
                        }}
                        onChange={(e) => handleArrayChange(setVehicles, index, 'vehicle_make', e.target.value)}
                      />
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                      <TextField
                        fullWidth
                        focused
                        size='small'
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
                          mb: 2
                        }}
                        label={t.vehicle_model}
                        value={vehicle.vehicle_model}
                        onChange={(e) => handleArrayChange(setVehicles, index, 'vehicle_model', e.target.value)}
                      />
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                      <TextField
                        fullWidth
                        focused
                        size='small'
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
                          mb: 2
                        }}
                        label={t.vehicle_color}
                        value={vehicle.vehicle_color}
                        onChange={(e) => handleArrayChange(setVehicles, index, 'vehicle_color', e.target.value)}
                      />
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                      <TextField
                        fullWidth
                        focused
                        size='small'
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
                          mb: 2
                        }}
                        label={t.license_province}
                        value={vehicle.license_province}
                        onChange={(e) => handleArrayChange(setVehicles, index, 'license_province', e.target.value)}
                      />
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                      <TextField
                        fullWidth
                        focused
                        size='small'
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
                          mb: 2
                        }}
                        label={t.license_plate_number}
                        value={vehicle.license_plate_number}
                        onChange={(e) => handleArrayChange(setVehicles, index, 'license_plate_number', e.target.value)}
                      />
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                      <TextField
                        fullWidth
                        focused
                        size='small'
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
                          mb: 2
                        }}
                        label={t.parking_spot}
                        value={vehicle.parking_spot}
                        onChange={(e) => handleArrayChange(setVehicles, index, 'parking_spot', e.target.value)}
                      />
                    </Grid>
                    <Grid size={{xs: 12, md: 2}}>
                      <Button variant="outlined" color="error" onClick={() => handleRemoveItem(setVehicles, index)}>
                        {t.remove}
                      </Button>
                    </Grid>
                  </Grid>
                ))}

                <Button variant="contained" color="primary" onClick={() => handleAddItem(setVehicles)} sx={{ mt: 2 }}>
                  {t.add_vehicle}
                </Button>
              </CardContent>
            </Card>

            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {t.pets}
                </Typography>
                <hr />

                {pets.map((pet, index) => (
                  <Grid container spacing={2} key={index} sx={{ mb: 3 }}>
                    <Grid size={{xs: 12, md: 5}}>
                      <TextField
                        fullWidth
                        focused
                        size='small'
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
                          mb: 2
                        }}
                        label={t.type}
                        value={pet.type}
                        onChange={(e) => handleArrayChange(setPets, index, 'type', e.target.value)}
                      />
                    </Grid>
                    <Grid size={{xs: 12, md: 5}}>
                      <TextField
                        fullWidth
                        focused
                        size='small'
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
                          mb: 2
                        }}
                        label={t.name}
                        value={pet.name}
                        onChange={(e) => handleArrayChange(setPets, index, 'name', e.target.value)}
                      />
                    </Grid>
                    <Grid size={{xs: 12, md: 2}}>
                      <Button variant="outlined" color="error" onClick={() => handleRemoveItem(setPets, index)}>
                        {t.remove}
                      </Button>
                    </Grid>
                  </Grid>
                ))}

                <Button variant="contained" color="primary" onClick={() => handleAddItem(setPets)} sx={{ mt: 2 }}>
                  {t.add_pet}
                </Button>
              </CardContent>
            </Card>

            <Button 
            sx={{
                mt: 2,
                backgroundColor: colorMap.blue,
                color: colorMap.white,
                ':hover': {
                  backgroundColor: colorMap.black,
                  color: colorMap.white,
                },
              }} type="submit" variant="contained" color="success" fullWidth>
              {t.save_unit_details}
            </Button>
          </form>

          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ mt: 2 }}>{success}</Alert>}
        </Container>
      </Box>
    </HelmetProvider>
  );
};

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: 'darkgreen', fontWeight: 900 }}>
          66.66%
        </Typography>
      </Box>
    </Box>
  );
}
export default UnitDetails;
