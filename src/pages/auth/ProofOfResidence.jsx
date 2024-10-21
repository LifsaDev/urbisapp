import React, { useState, useEffect } from 'react';
import {
  Container, Button, Typography, Box, Alert, Stepper, Step, StepLabel, LinearProgress
} from '@mui/material';
import styled from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { proof_of_residence_URL } from '../../services/configs';
import { makeApiRequest, makeMultipartApiRequest } from '../../services/serverdata';
import { useLang } from '../../contexts/langContext';
import { useNavigate } from 'react-router-dom';
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

const ProofOfResidence = () => {
  // Define state and constants
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [existingFile, setExistingFile] = useState(null);
  const { translations: t } = useLang();
  const navigate_to = useNavigate();

  const steps = [
    t.sign_up,
    t.user_details,
    t.user_contacts,
    t.unit_details,
    t.electronic_consent_title,
    t.proof_of_residence_title,
  ];

  // Fetch existing proof of residence file
  useEffect(() => {
    const fetchExistingFile = async () => {
      try {
        const response = await makeApiRequest(proof_of_residence_URL, 'GET');
        if (response.data.length > 0) {
          setExistingFile(response.data[0]);
        }
      } catch (error) {
        console.error('Failed to fetch existing proof of residence', error);
      }
    };
    fetchExistingFile();
  }, []);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (selectedFile && allowedTypes.includes(selectedFile.type) && selectedFile.size <= maxSize) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError(t.invalid_file_message);
    }
  };

  // Handle file upload submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError(t.must_upload_file);
      return;
    }
    setError('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('file_name', file.name);
      formData.append('file_type', file.type);
      await makeMultipartApiRequest(proof_of_residence_URL, 'POST', formData);
      setSuccess(t.success_submit_message);
      navigate_to(PagePaths.app_dashboard);
    } catch (error) {
      setError(t.failed_submit_message);
      console.error('Upload error:', error);
    }
    setFile(null);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Proof of Residence | Urbis</title>
        <meta name="description" content="Proof of Residence Upload" />
      </Helmet>

      <PageWrapper>
        <StepContainer>
          <Stepper activeStep={6} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </StepContainer>
        <StepPercentContainer>
          <LinearProgressWithLabel value={100} />
        </StepPercentContainer>
        <ContentContainer>
          {existingFile ? (
            <Box>
              <Typography variant="body1" sx={{color: colorMap.deepblack}}>{t.file_already_uploaded}</Typography>
              <hr />
              <Typography variant="body2" sx={{color: colorMap.deepblack}}>{t.file_name}: <strong>{existingFile?.file_name}</strong></Typography>
              <Typography variant="body2" sx={{color: colorMap.deepblack}}>{t.upload_date}: <strong>{new Date(existingFile?.created_at).toLocaleString()}</strong></Typography>
              {existingFile.is_verified && <Alert severity="success">{t.file_verified}</Alert>}
              <Button
                onClick={() => navigate_to(PagePaths.app_dashboard)}
                variant="contained"
                sx={{ mt: 2, backgroundColor: colorMap.blue, ':hover': { backgroundColor: colorMap.black } }}
              >
                {t.Finish_Process_and_access_your_dashboard}
              </Button>
            </Box>
          ) : (
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" sx={{color: colorMap.deepblack}}>{t.proof_of_residence}</Typography>
              <Typography variant="body2"  sx={{color: colorMap.deepblack, fontSize: '0.8rem', textAlign: 'start', mb: 2 }}>
                {t.upload_proof_of_residence_instructions}
              </Typography>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                style={{ marginBottom: '10px', color: colorMap.deepblack }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, backgroundColor: colorMap.blue, ':hover': { backgroundColor: colorMap.black } }}
              >
                {t.Finish_Process_and_access_your_dashboard}
              </Button>
            </form>
          )}
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ mt: 2 }}>{success}</Alert>}
        </ContentContainer>
      </PageWrapper>
    </HelmetProvider>
  );
};

// Progress bar with label for percentage
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: 'darkgreen', fontWeight: 900 }}>
          100%
        </Typography>
      </Box>
    </Box>
  );
}

export default ProofOfResidence;
