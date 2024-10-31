import React from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Button, Typography,Link, Divider} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { Urbis_App_URL } from '../../../services/configs';
import PagePaths from '../../../PagePaths';
import { useLang } from '../../../contexts/langContext';



 

export default function MobileMenu() {
  const navigate = useNavigate();
  const { translations: t } = useLang();

  const move_to_demo = () => {
    navigate(PagePaths.demo_request);
  };

  const handleLogin = () => {
    window.location.href = `${Urbis_App_URL}account/login`;
  };


  const features = {
    Communication: [
      { name: "virtual_meetings", link_to: PagePaths.virtual_meetings },
      { name: "architectural_request", link_to: PagePaths.architectural_request },
      { name: "discussion_forum", link_to: PagePaths.discussion_forum },
      { name: "events_calendar", link_to: PagePaths.events_calendar },
      { name: "website", link_to: PagePaths.website },
      { name: "file_library", link_to: PagePaths.file_library },
      { name: "announcements_bulletin", link_to: PagePaths.announcements_bulletin },
      { name: "work_service_request", link_to: PagePaths.work_service_request },
      { name: "portfolio_management", link_to: PagePaths.portfolio_management }
    ],
    RecordKeeping: [
      { name: "electronic_consent", link_to: PagePaths.electronic_consent },
      { name: "violation_tracking", link_to: PagePaths.violation_tracking },
      { name: "e_voting", link_to: PagePaths.e_voting },
      { name: "unit_file_database", link_to: PagePaths.unit_file_database },
      { name: "reports", link_to: PagePaths.reports },
      { name: "maintenance_tracking", link_to: PagePaths.maintenance_tracking },
      { name: "vendor_management", link_to: PagePaths.vendor_management },
      { name: "amenity_booking", link_to: PagePaths.amenity_booking },
      { name: "online_payments", link_to: PagePaths.online_payments }
    ],
    Security: [
      { name: "package_scanning", link_to: PagePaths.package_scanning },
      { name: "asset_management", link_to: PagePaths.asset_management },
      { name: "visitor_parking", link_to: PagePaths.visitor_parking },
      { name: "security_logs", link_to: PagePaths.security_logs },
      { name: "authorized_entry", link_to: PagePaths.authorized_entry },
      { name: "package_tracking", link_to: PagePaths.package_tracking },
      { name: "key_tracking", link_to: PagePaths.key_tracking },
      { name: "incident_reports", link_to: PagePaths.incident_reports },
      { name: "security_patrol", link_to: PagePaths.security_patrol }
    ]
  };

  const use_by_challenges = [
    { name: "improving_communication", link_to: PagePaths.by_challenge_improve_communicaton },
    { name: "documents_and_resident_info", link_to: PagePaths.by_challenge_accessing_document },
    { name: "streamlining_security", link_to: PagePaths.by_challenge_streaming_security },
    { name: "enforcing_rules", link_to: PagePaths.by_challenge_enforcing_rules },
    { name: "increasing_community", link_to: PagePaths.by_challenge_increase_community },
    { name: "tracking_managing", link_to: PagePaths.by_challenge_tracking_and_maintenance },
    { name: "managing_rentals", link_to: PagePaths.by_challenge_visitor_mangement },
    { name: "managing_visitors", link_to: PagePaths.by_challenge_visitor_mangement },
    { name: "making_tracking", link_to: PagePaths.by_challenge_payment_management }
  ];
  
  const services_data = [
    { name: "service_apartment", link_to: PagePaths.service_apartment },
    { name: "service_communities", link_to: PagePaths.service_hoa },
    { name: "service_management", link_to: PagePaths.company_management },
  ];

  const learn_data = [
    { name: "articles", link_to: "" },
    { name: "case_studies", link_to: "" },
    { name: "templates", link_to: "" },
    { name: "webinars", link_to: "" },
    { name: "savings_calculator", link_to: "" },
    { name: "technology_score", link_to: "" }
  ];

  const product_help_data = [
    { name: "help_center", link_to: "" },
    { name: "community_forum", link_to: "" },
    { name: "feature_suggestion", link_to: "" },
  ];

  const why_us_data = [
    { name: "why_dorsia_management", link_to: PagePaths.why_dorsia_management },
    { name: "testimonials", link_to: PagePaths.testimonial_page },
    { name: "about_us_title", link_to: PagePaths.about_us },
    { name: "our_values", link_to: PagePaths.our_value},
  ];

  return (
    <div className='mobileMenu'>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '16px' }}>
        <Button
          onClick={move_to_demo}
          disableElevation
          sx={{mt: 2, textTransform: 'capitalize', backgroundColor: 'darkcyan', color: '#fff'}}
          variant="outlined"
          size="small"
        >
          {t.free_demo_btn}
        </Button>
        <Button onClick={handleLogin}  disableElevation sx={{mt: 2, color: '#fff', textTransform: 'capitalize'}} variant="contained" size="small">
          {t.log_in}
        </Button>
      </div>
      <Divider />
      <Accordion sx={{padding: 0}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" fontWeight="bold">{t.solutions}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{fontWeight: 500, fontSize: '0.9rem'}}>{t.by_features}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Object.entries(features).map(([category, items]) => (
                <Accordion key={category}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{fontWeight: 900, fontSize: '0.8rem', mb: 0}}>{t[category.toLowerCase()]}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{p: 1}}>
                  <ul style={{ listStyleType: 'none', paddingLeft: '5px' , textAlign: 'start'}}>
                    {items.map((item, index) => (
                      <li key={index} style={{marginBottom: '4px', }}>
                        <Link href={item.link_to} sx={{mb: 2, fontSize: '0.8rem', extDecoration: 'none' ,fontWeight: 400,  textDecoration: 'none', color: 'black', display: 'block', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                          {t[item.name]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  </AccordionDetails>
                </Accordion>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{fontWeight: 500, fontSize: '0.9rem', mb: 0}}>{t.by_user_type}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ listStyleType: 'none', paddingLeft: '5px' , textAlign: 'start'}}>
                <li style={{marginBottom: '4px', }}>
                  <Link href={PagePaths.by_user_propertymanager} sx={{mb: 2, fontSize: '0.8rem', extDecoration: 'none' ,fontWeight: 400,  textDecoration: 'none', color: 'black', display: 'block', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                    {t.property_managers}
                  </Link>
                </li>
                <li style={{marginBottom: '4px', }}>
                  <Link href={PagePaths.by_user_board} sx={{mb: 2, fontSize: '0.8rem', extDecoration: 'none' ,fontWeight: 400,  textDecoration: 'none', color: 'black', display: 'block', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                    {t.boards}
                  </Link>
                </li>
                <li style={{marginBottom: '4px', }}>
                  <Link href={PagePaths.by_user_developers} sx={{mb: 2, fontSize: '0.8rem', extDecoration: 'none' ,fontWeight: 400,  textDecoration: 'none', color: 'black', display: 'block', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                    {t.developers}
                  </Link>
                </li>
                <li style={{marginBottom: '4px', }}>
                  <Link href={PagePaths.by_user_resident} sx={{mb: 2, fontSize: '0.8rem', extDecoration: 'none' ,fontWeight: 400,  textDecoration: 'none', color: 'black', display: 'block', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                    {t.residents}
                  </Link>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{fontWeight: 500, fontSize: '0.9rem', mb: 0}}>{t.by_challenges}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ listStyleType: 'none', paddingLeft: '5px' , textAlign: 'start'}}>
                {use_by_challenges.map((item, index) => (
                  <li key={index} style={{marginBottom: '4px', }}>
                    <Link href={item.link_to} sx={{mb: 2, fontSize: '0.8rem', extDecoration: 'none' ,fontWeight: 400,  textDecoration: 'none', color: 'black', display: 'block', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                      {t[item.name]}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1"  sx={{fontWeight: 900, fontSize: '0.9rem', mb: 0}}>{t.services}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ listStyleType: 'none', paddingLeft: '5px' , textAlign: 'start'}}>
            {services_data.map((item, index) => (
              <li key={index} style={{marginBottom: '4px', }}>
                <Link href={item.link_to} sx={{mb: 2, fontSize: '0.8rem', extDecoration: 'none' ,fontWeight: 400,  textDecoration: 'none', color: 'black', display: 'block', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                  {t[item.name]}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1"  sx={{fontWeight: 900, fontSize: '0.9rem', mb: 0}}>{t.resources}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{fontWeight: 500, fontSize: '0.9rem', mb: 0}}>{t.learn}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ listStyleType: 'none', paddingLeft: '5px' , textAlign: 'start'}}>
                {learn_data.map((item, index) => (
                  <li key={index} style={{marginBottom: '4px', }}>
                    <Link href={item.link_to} sx={{mb: 2, fontSize: '0.8rem', extDecoration: 'none' ,fontWeight: 400,  textDecoration: 'none', color: 'black', display: 'block', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                      {t[item.name]}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{fontWeight: 500, fontSize: '0.9rem', mb: 0}}>{t.product_help}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ listStyleType: 'none', paddingLeft: '5px' , textAlign: 'start'}}>
                {product_help_data.map((item, index) => (
                  <li key={index} style={{marginBottom: '4px', }}>
                    <Link href={item.link_to} sx={{mb: 2, fontSize: '0.8rem', extDecoration: 'none' ,fontWeight: 400,  textDecoration: 'none', color: 'black', display: 'block', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                      {t[item.name]}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1"  sx={{fontWeight: 900, fontSize: '0.9rem', mb: 0}}>{t.why_us}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ listStyleType: 'none', paddingLeft: '5px' , textAlign: 'start'}}>
            {why_us_data.map((item, index) => (
              <li key={index} style={{marginBottom: '4px', }}>
                <Link href={item.link_to} sx={{mb: 2, fontSize: '0.8rem', extDecoration: 'none' ,fontWeight: 400,  textDecoration: 'none', color: 'black', display: 'block', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                  {t[item.name]}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1"   sx={{fontWeight: 900, fontSize: '0.9rem', mb: 0}}>{`${t.pricing} & ${t.contact}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ listStyleType: 'none', paddingLeft: '5px' , textAlign: 'start'}}>
            <li style={{marginBottom: '4px', }}>
              <Link href={PagePaths.contact} sx={{mb: 2, fontSize: '0.8rem', extDecoration: 'none' ,fontWeight: 400,  textDecoration: 'none', color: 'black', display: 'block', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                {t.contact}
              </Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}