import React, { useState, useEffect } from 'react';
import {
  Container, Button, TextField, Box, Alert, Typography, Stepper, Step, StepLabel, LinearProgress
} from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { usercontacts_URL } from '../../services/configs';
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

// Styled component for the page layout
const PageWrapper = styled(Box)`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const ContentContainer = styled(Container)(()=>({
  backgroundColor: 'white',
  borderRadius: '15px',
  marginTop: '20px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
  padding: '2rem',
  width: '500px',
  maxWidth: '500px',
  [theme.breakpoints.between('sm', 'md')]: {
    padding: '1.4rem',
    width: '400px',
    maxWidth: '400px',
  },
  [theme.breakpoints.down('xs')]: {
    padding: '1.4rem',
    width: '100%',
    maxWidth: '100%',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    padding: '1.4rem',
    width: '300px',
    maxWidth: '300px',
  },
})) 

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

const UserContacts = () => {
  // Define state and constants
  const [cell_phone, setCellPhone] = useState('');
  const [work_phone, setWorkPhone] = useState('');
  const [emergency_name, setEmergencyName] = useState('');
  const [emergency_relationship, setEmergencyRelationship] = useState('');
  const [emergency_cell_phone, setEmergencyCellPhone] = useState('');
  const [emergency_email, setEmergencyEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [existingContacts, setExistingContacts] = useState(null);
  const navigate_to = useNavigate();
  const { translations: t } = useLang();

  const steps = [
    t.sign_up,
    t.user_details,
    t.user_contacts,
    t.unit_details,
    t.electronic_consent_title,
    t.proof_of_residence_title,
  ];

  // Fetch existing user contact details
  useEffect(() => {
    const fetchUserContacts = async () => {
      try {
        const response = await makeApiRequest(usercontacts_URL, 'GET');
        if (response.data.length > 0) {
          const contacts = response.data[0];
          setExistingContacts(contacts);
          setCellPhone(contacts.cell_phone);
          setWorkPhone(contacts.work_phone);
          setEmergencyName(contacts.emergency_name);
          setEmergencyRelationship(contacts.emergency_relationship);
          setEmergencyCellPhone(contacts.emergency_cell_phone);
          setEmergencyEmail(contacts.emergency_email);
        }
      } catch (error) {
        setError(true);
        console.error('Error fetching user contacts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserContacts();
  }, []);

  // Submit new user contact details
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setMessage('');

    const data = {
      cell_phone,
      work_phone,
      emergency_name,
      emergency_relationship,
      emergency_cell_phone,
      emergency_email,
    };

    try {
      if (existingContacts) {
        await makeApiRequest(`${usercontacts_URL}${existingContacts.id}/`, 'PUT', data);
      } else {
        await makeApiRequest(usercontacts_URL, 'POST', data);
      }
      navigate_to(PagePaths.unit_details);
    } catch (error) {
      setMessage(t.error_expect);
      setError(true);
    }
  };

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>User Contacts | Urbis</title>
        <meta name="description" content="Manage your contact information with Urbis" />
      </Helmet>
      <PageWrapper>
        <StepContainer>
          <Stepper activeStep={2} alternativeLabel>
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
          <strong>{t.user_contacts}</strong>
        </Typography>
        <ContentContainer>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={t.cell_phone}
              value={cell_phone}
              onChange={(e) => setCellPhone(e.target.value)}
              required
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
            />
            <TextField
              fullWidth
              label={t.work_phone}
              value={work_phone}
              onChange={(e) => setWorkPhone(e.target.value)}
              size='small'
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
                mb: 2
              }}
            />
            <TextField
              fullWidth
              label={t.emergency_name}
              value={emergency_name}
              onChange={(e) => setEmergencyName(e.target.value)}
              required
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
            />
            <TextField
              fullWidth
              label={t.emergencyRelationship}
              value={emergency_relationship}
              onChange={(e) => setEmergencyRelationship(e.target.value)}
              size='small'
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
                mb: 2
              }}
            />
            <TextField
              fullWidth
              label={t.emergency_cell_phone}
              value={emergency_cell_phone}
              onChange={(e) => setEmergencyCellPhone(e.target.value)}
              required
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
            />
            <TextField
              fullWidth
              label={t.emergency_email}
              value={emergency_email}
              onChange={(e) => setEmergencyEmail(e.target.value)}
              size='small'
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
                mb: 2
              }}
            />

            <Button
              type="submit"
              fullWidth
              size='small'
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: colorMap.blue,
                color: colorMap.white,
                ':hover': {
                  backgroundColor: colorMap.black,
                  color: colorMap.white,
                },
              }}
            >
              {t.save_contacts}
            </Button>
          </form>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {message}
            </Alert>
          )}
        </ContentContainer>
      </PageWrapper>
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
        50.0%
        </Typography>
      </Box>
    </Box>
  );
}

export default UserContacts;
