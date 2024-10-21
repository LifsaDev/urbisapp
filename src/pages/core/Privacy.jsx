import React, { useState } from 'react';
import MainLayout from '../../components/AppLayout';
import { Box, Typography } from '@mui/material';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, keyframes } from '@mui/system';
import { useLang } from '../../contexts/langContext';

 
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;


const GeneralContainer = styled(Container)(({ theme }) => ({
  maxWidth: "900px",
  animation: `${fadeIn} 1s ease-out`,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  marginBottom: theme.spacing(4),
  color: '#2c3e50',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  textAlign: 'center',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: 2,
  [theme.breakpoints.down('md')]: {
    textAlign: 'start',
    fontSize: '1.5rem'
  }
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  marginBottom: theme.spacing(2),
  color: '#34495e',
  fontWeight: 600,
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  lineHeight: 1.8,
  color: '#444',
  marginBottom: theme.spacing(2),
}));

const List = styled(Box)(({ theme }) => ({
  listStyleType: 'disc',
  paddingLeft: theme.spacing(3),
  marginBottom: theme.spacing(2),
  color: '#444',
}));

const Privacy = () => {
  const [expanded, setExpanded] = useState('panel1');
  const { translations: t } = useLang();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Privacy & Security Policy | Urbis</title>
          <meta name="description" content="Privacy & Security Policy and Terms & Conditions for Urbis" />
        </Helmet>

        <Box sx={{pt: 5, display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw' }}>
          <GeneralContainer>
              <Title>{t.privacy_p1}</Title>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 900, fontSize: '1.3rem'}} >{t.privacy_p2}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Paragraph sx={{fontSize: '1.0rem'}} variant='h6'>
                  {t.privacy_p3}
                  </Paragraph>
                  <List component="ul">
                    <li>{t.privacy_p4}</li>
                    <li>{t.privacy_p5}</li>
                    <li>{t.privacy_p6}</li>
                    <li>{t.privacy_p7}</li>
                    <li>{t.privacy_p8}</li>
                  </List>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 900, fontSize: '1.3rem'}} >{t.privacy_p9}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Paragraph sx={{fontSize: '1.0rem'}} variant='h6'>{t.privacy_p10}</Paragraph>
                  <List component="ul">
                    <li>{t.privacy_p11}</li>
                    <li>{t.privacy_p12}</li>
                    <li>{t.privacy_p13}</li>
                    <li>{t.privacy_p4}</li>
                    <li>{t.privacy_p15}</li>
                  </List>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 900, fontSize: '1.3rem'}} >{t.privacy_p16}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Paragraph sx={{fontSize: '1.0rem'}} variant='h6'>{t.privacy_p17}</Paragraph>
                  <List component="ul">
                    <li>{t.privacy_p18}</li>
                    <li>{t.privacy_p19}</li>
                    <li>{t.privacy_p20}</li>
                    <li>{t.privacy_p21}</li>
                    <li>{t.privacy_p22}</li>
                  </List>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 900, fontSize: '1.3rem'}} >{t.privacy_p23}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Paragraph sx={{fontSize: '1.0rem'}} variant='h6'>{t.privacy_p24}</Paragraph>
                  <List component="ul">
                    <li>{t.privacy_p25}</li>
                    <li>{t.privacy_p26}</li>
                    <li>{t.privacy_p27}</li>
                    <li>{t.privacy_p28}</li>
                    <li>{t.privacy_p29}</li>
                    <li>{t.privacy_p30}</li>
                  </List>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 900, fontSize: '1.3rem'}} >{t.privacy_p31}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Paragraph sx={{fontSize: '1.0rem'}} variant='h6'>{t.privacy_p32}</Paragraph>
                  <List component="ul">
                    <li>{t.privacy_p33}</li>
                    <li>{t.privacy_p34}</li>
                    <li>P{t.privacy_p35}</li>
                    <li>{t.privacy_p36}</li>
                  </List>
                </AccordionDetails>
              </Accordion>
            
              <Title marginTop={10}>{t.privacy_p37}</Title>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <Subtitle sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 900, fontSize: '1.3rem'}}>{t.privacy_p38}</Subtitle>
                  <Paragraph sx={{fontSize: '1.0rem'}}>
                  {t.privacy_p39}
                  </Paragraph>
                </Grid>
                <Grid item md={6}>
                  <Subtitle sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 900, fontSize: '1.3rem'}}>{t.privacy_p40}</Subtitle>
                  <Paragraph sx={{fontSize: '1.0rem'}}>
                  {t.privacy_p41}
                  </Paragraph>
                </Grid>
                <Grid item md={6}>
                  <Subtitle sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 900, fontSize: '1.3rem'}}>{t.privacy_p42}</Subtitle>
                  <List component="ul">
                    <li>{t.privacy_p43}</li>
                    <li>{t.privacy_p44}</li>
                    <li>{t.privacy_p45}</li>
                  </List>
                </Grid>
                <Grid item md={6} marginBottom={20}>
                  <Subtitle sx={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontWeight: 900, fontSize: '1.3rem'}}>{t.privacy_p46}</Subtitle>
                  <Paragraph sx={{fontSize: '1.0rem'}}>
                  {t.privacy_p47}
                  </Paragraph>
                </Grid>
              </Grid>
          </GeneralContainer>
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default Privacy;
