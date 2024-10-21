import React, { useState, useRef, useEffect } from 'react';
import {
  Container, Button, Box, Typography, Checkbox, Alert, Stepper, Step, StepLabel, LinearProgress
} from '@mui/material';
import SignatureCanvas from 'react-signature-canvas';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { styled } from '@mui/system';
import { electronic_consent_URL } from '../../services/configs';
import { useLang } from '../../contexts/langContext';
import { useNavigate } from 'react-router-dom';
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
 

// Styled component for page layout
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

const SignatureCanvasWrapper = styled(Box)(() => ({
  border: '1px solid #000',
  width: '100%',
  height: '200px',
  margin: '0 auto',
  overflow: 'hidden',
}));

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


const ElectronicConsent = () => {
  // Define state and constants
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [existingSignature, setExistingSignature] = useState(null);
  const sigCanvas = useRef({});
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

  // Fetch existing signature
  useEffect(() => {
    const fetchExistingSignature = async () => {
      try {
        const response = await makeApiRequest(electronic_consent_URL, 'GET');
        if (response.data && response.data.length > 0) {
          setChecked(response.data[0].agree);
          setExistingSignature(response.data[0].signature);
        }
      } catch (error) {
        setError('Error fetching signature data');
      }
    };
    fetchExistingSignature();
  }, []);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleClear = () => {
    sigCanvas.current.clear();
  };

  // Submit data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checked) {
      setError(t.agree_term_and_condition);
      return;
    }
    if (existingSignature) {
      navigate_to(PagePaths.proof_of_residence);
      return;
    }
    if (sigCanvas.current.isEmpty()) {
      setError(t.must_signature);
      return;
    }

    const signatureDataUrl = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    setError('');
    try {
      await makeApiRequest(electronic_consent_URL, 'POST', {
        agree: checked,
        signature: signatureDataUrl,
      });
      setSuccess(t.success_submit_message);
      navigate_to(PagePaths.proof_of_residence);
    } catch (err) {
      setError(t.failed_submit_message);
      console.log(err)
    }
    setChecked(false);
    sigCanvas.current.clear();
  };

  // Handle loading state
  if (error && !success) {
    return <div>Loading...</div>;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Electronic Consent | Urbis</title>
        <meta name="description" content="Parcel Waiver Form" />
      </Helmet>

      <PageWrapper>
        <StepContainer>
          <Stepper activeStep={4} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </StepContainer>
        <StepPercentContainer>
          <LinearProgressWithLabel value={83.33} />
        </StepPercentContainer>

        <Typography sx={{ color: colorMap.deepblack, mb: 2, [theme.breakpoints.up('md')]: {display: 'none'} }}><strong>{t.electronic_consent_title}</strong></Typography>
        <ContentContainer>
          {existingSignature ? (
            <Box>
              <Typography variant="h6" sx={{color: colorMap.deepblack}}>{t.electronic_signature}</Typography>
              <Typography sx={{color: colorMap.deepblack, fontSize: '0.8rem'}}>{t.sign_aldready_message_text}</Typography>
              <hr></hr>
              <img src={existingSignature} alt="Signature" style={{ width: 'auto', height: 'auto' }} />
              <hr></hr>
              <Button
                onClick={() => navigate_to(PagePaths.proof_of_residence)}
                variant="contained"
                sx={{ mt: 2, backgroundColor: colorMap.blue, ':hover': { backgroundColor: colorMap.black } }}
              >
                {t.save_and_continue}
              </Button>
            </Box>
          ) : (
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" sx={{color: colorMap.deepblack}}>Terms and Conditions</Typography>
              <Typography variant="body2" sx={{color: colorMap.deepblack, fontSize: '0.8rem',  textAlign: 'start', mb: 2}}>
                By using our property management software, you agree to the terms and conditions. These apply to all users, including property owners, managers, staff, and residents. Please read these terms carefully before using the software.
              </Typography>

              <Checkbox
                checked={checked}
                onChange={handleCheckboxChange}
                color="primary"
              />
              <Typography sx={{color: colorMap.deepblack}}>{t.agree_term_and_condition}</Typography>

              <Typography variant="h6" sx={{ mt: 2, color: colorMap.deepblack }}>{t.electronic_signature}</Typography>
              <Typography variant="body2" sx={{color: colorMap.deepblack, fontSize: '0.8rem',  textAlign: 'start', mb: 2}}>{t.sign_message_text}</Typography>

              <SignatureCanvasWrapper>
                <SignatureCanvas
                  ref={sigCanvas}
                  penColor="blue"
                  canvasProps={{ width: 600, height: 200, className: 'sigCanvas' }}
                />
              </SignatureCanvasWrapper>
              <Button variant="outlined" onClick={handleClear} sx={{ mt: 2 }}>{t.clear_btn}</Button>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 4, backgroundColor: colorMap.blue, ':hover': { backgroundColor: colorMap.black } }}
              >
                {t.save_and_continue}
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

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: 'darkgreen', fontWeight: 900 }}>
        83.33%
        </Typography>
      </Box>
    </Box>
  );
}

export default ElectronicConsent;
