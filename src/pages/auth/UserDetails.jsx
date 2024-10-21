import React, { useState, useEffect } from 'react';
import {
  Container, Button, TextField, MenuItem,Typography, Box, Alert, Stepper, Step, StepLabel, LinearProgress
} from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { userdetails_URL } from '../../services/configs';
import { useLang } from '../../contexts/langContext';
import { makeApiRequest } from '../../services/serverdata';
import PagePaths from '../../PagePaths';
import colorMap from '../../utils/ColorPalette';
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
 
 

// Styled Component for page layout
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

const UserDetails = () => {
  // DEFINE STATES AND CONSTANTS
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [prefered_language, setPreferedLanguage] = useState('');
  const [assistance, setAssistance] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [existingDetails, setExistingDetails] = useState(null);
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

  // FETCH EXISTING USER DETAILS DATA
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await makeApiRequest(userdetails_URL, 'GET');
        if (response.data.length > 0) {
          const details = response.data[0];
          setExistingDetails(details);
          setFirstName(details.first_name);
          setLastName(details.last_name);
          setTitle(details.title);
          setPreferedLanguage(details.prefered_language);
          setAssistance(details.assistance);
        }
      } catch (error) {
        setMessage(t.error_fetching_details);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserDetails();
  }, [t]);

  // SUBMIT NEW USERS DETAILS DATA
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setMessage('');
    const data = {
      first_name,
      last_name,
      title,
      prefered_language,
      assistance: assistance,
    };

    try {
      if (existingDetails) {
        await makeApiRequest(`${userdetails_URL}${existingDetails.id}/`, 'PUT', data);
      } else {
        await makeApiRequest(userdetails_URL, 'POST', data);
      }
      navigate_to(PagePaths.user_contacts);
    } catch (error) {
      setMessage(t.error_expect);
      setError(true);
    }
  };

  // HANDLE LOADING STATE
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>User Details | Urbis</title>
        <meta name="description" content="Complete your user details with Urbis" />
      </Helmet>

      <PageWrapper>
        <StepContainer >
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}  sx={{fontSize: '0.5rem'}}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </StepContainer>
        <StepPercentContainer>
          <LinearProgressWithLabel value={33.33} />
        </StepPercentContainer>
        <Typography sx={{color: colorMap.deepblack,   [theme.breakpoints.up('md')]: {display: 'none'},}}><strong>{t.user_details}</strong></Typography>
        <ContentContainer>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={t.first_name}
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
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
              label={t.last_name}
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
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
              select
              fullWidth
              label={t.user_title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
            >
              <MenuItem value="Mr.">Mr.</MenuItem>
              <MenuItem value="Ms.">Ms.</MenuItem>
            </TextField>

            <TextField
              select
              fullWidth
              label={t.prefered_language}
              value={prefered_language}
              onChange={(e) => setPreferedLanguage(e.target.value)}
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
            >
              <MenuItem value="">{t.select_language}</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="Arabic">Arabic</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label={t.assistance}
              multiline
              rows={3}
              value={assistance}
              onChange={(e) => setAssistance(e.target.value)}
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

            <Button
              type="submit"
              size='small' 
              fullWidth 
              variant="contained" 
              sx={{ mt: 2, backgroundColor: colorMap.blue, color: colorMap.white, ':hover': {backgroundColor: colorMap.black, color: colorMap.white} }}
            >
              {t.save_details}
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
        <Typography variant="body2" sx={{ color: 'darkgreen', fontWeight: 900, }}>
         33.33%
        </Typography>
      </Box>
    </Box>
  );
}

export default UserDetails;
