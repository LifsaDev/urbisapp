import { Box, Container, Grid2 as Grid, Typography, Divider, IconButton } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import { useLang } from '../contexts/langContext';
import PagePaths from '../PagePaths';
import { styled } from '@mui/system';
import colorMap from '../utils/ColorPalette';


const FooterContainer = styled('footer')({
  color: 'white',
  padding: '20px 0',
  '& a': {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: '#ed9d11',
    },
  },
  '.footer-section': {
    marginBottom: '20px',
  },
  '.social-icons a': {
    marginRight: '10px',
  },
  '.footer-section ul': {
    listStyleType: 'none',
    padding: 0,
  },
  '.footer-section ul li': {
    marginBottom: '6px',
  },
  '.footer-bottom': {
    borderTop: '1px solid #ccc',
    paddingTop: '10px',
  },
});

const FooterSectionTitle = styled(Typography)({
  marginBottom: '20px',
});

const SocialIcon = styled(Box)({
  display: 'flex',
  marginBottom: '20px',
  justifyContent: 'space-between',
});

const SectionData = styled('ul')({
  textAlign: 'start',
});

const HorizontalSeparator = styled(Divider)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const Footer = () => {
  const { translations: t } = useLang();

  return (
    <FooterContainer style={{backgroundColor: colorMap.black}}>
      <Container>
        <Grid container spacing={10}>
          <Grid xs={12} md={3} className="footer-section">
            <FooterSectionTitle style={{color: colorMap.turquoiseClair}} variant="h5">{t.members_of}</FooterSectionTitle>
            <Box>
              <img src="/images/cai.png" alt="Community Logo" style={{ width: '156px', height: '64px', marginBottom: '20px' }} /><br />
              <img src="/images/cacm.png" alt="CACM Logo" style={{ width: '100px', height: '120px' }} />
            </Box>
          </Grid>
          <HorizontalSeparator />
          <Grid xs={12} md={3} className="footer-section">
            <FooterSectionTitle style={{color: colorMap.turquoiseClair}}  variant="h5">{t.popular_links}</FooterSectionTitle>
            <SectionData>
              <li><a href={PagePaths.all_solution}>{t.features}</a></li>
              {/* <li><a href="*">{t.articles}</a></li>
              <li><a href="*">{t.templates}</a></li>
              <li><a href="*">{t.system_status}</a></li>
              <li><a href="*">{t.order_status_certificate}</a></li>
              <li><a href="*">{t.community_forum}</a></li>
              <li><a href="*">{t.sustainability}</a></li>
              <li><a href="*">{t.disaster_relief}</a></li> */}
            </SectionData>
          </Grid>
          <HorizontalSeparator />
          <Grid xs={12} md={3} className="footer-section">
            <FooterSectionTitle style={{color: colorMap.turquoiseClair}}  variant="h5">{t.about_us_title}</FooterSectionTitle>
            <SectionData>
              <li><a href={PagePaths.about_us}>{t.our_story}</a></li>
              <li><a href={PagePaths.why_dorsia_management}>{t.why_dorsia_management}</a></li>
              <li><a href="*">Site - Casablanca</a></li>
              <li><a href="*">FAQ</a></li>
            </SectionData>
          </Grid>
          <HorizontalSeparator />
          <Grid xs={12} md={3} className="footer-section">
            <FooterSectionTitle style={{color: colorMap.turquoiseClair}} variant="h5">{t.follow_us}</FooterSectionTitle>
            <SocialIcon className="social-icons">
              <IconButton href="https://www.facebook.com" color="inherit">
                <FaFacebook size={22} />
              </IconButton>
              <IconButton href="https://www.twitter.com" color="inherit">
                <FaTwitter size={22} />
              </IconButton>
              <IconButton href="https://www.instagram.com" color="inherit">
                <FaInstagram size={22} />
              </IconButton>
              <IconButton href="https://www.linkedin.com" color="inherit">
                <FaLinkedin size={22} />
              </IconButton>
            </SocialIcon>
            <Box>
              <img src="/images/trustpilot.png" alt="Trustpilot" style={{ width: '156px', height: '64px', marginRight: '10px' }} />
              <img src="/images/bbb_a_rating.jpg" alt="BBB" style={{ width: '156px', height: '56px', marginTop: '30px' }} />
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" className="footer-bottom" mt={3}>
          <Grid xs={12} className="text-center">
            <Typography variant="body2" align="center">&copy; URBIS 2024</Typography>
            <Box>
              <a href={PagePaths.privacy}>Privacy & Security Policy</a> | <a href={PagePaths.privacy}>Terms & Conditions</a>
            </Box>
          </Grid>
        </Grid>
        <ScrollToTop smooth style={{ borderRadius: '50%' }} />
      </Container>
    </FooterContainer>
  );
}

export default Footer;
