import React from 'react';
import {Grid2, Box, Typography, Button, Link } from '@mui/material';
import { useLang } from '../../../contexts/langContext';
import PagePaths from '../../../PagePaths';
import colorMap from '../../../utils/ColorPalette';

const features = {
  Communication: [
    { name: 'virtual_meetings', link_to: PagePaths.virtual_meetings },
    { name: 'architectural_request', link_to: PagePaths.architectural_request },
    { name: 'discussion_forum', link_to: PagePaths.discussion_forum },
    { name: 'events_calendar', link_to: PagePaths.events_calendar },
    { name: 'website', link_to: PagePaths.website },
    { name: 'file_library', link_to: PagePaths.file_library },
    { name: 'announcements_bulletin', link_to: PagePaths.announcements_bulletin },
    { name: 'work_service_request', link_to: PagePaths.work_service_request },
    { name: 'portfolio_management', link_to: PagePaths.portfolio_management }
  ],
  RecordKeeping: [
    { name: 'electronic_consent', link_to: PagePaths.electronic_consent },
    { name: 'violation_tracking', link_to: PagePaths.violation_tracking },
    { name: 'e_voting', link_to: PagePaths.e_voting },
    { name: 'unit_file_database', link_to: PagePaths.unit_file_database },
    { name: 'reports', link_to: PagePaths.reports },
    { name: 'maintenance_tracking', link_to: PagePaths.maintenance_tracking },
    { name: 'vendor_management', link_to: PagePaths.vendor_management },
    { name: 'amenity_booking', link_to: PagePaths.amenity_booking },
    { name: 'online_payments', link_to: PagePaths.online_payments }
  ],
  Security: [
    { name: 'package_scanning', link_to: PagePaths.package_scanning },
    { name: 'asset_management', link_to: PagePaths.asset_management },
    { name: 'visitor_parking', link_to: PagePaths.visitor_parking },
    { name: 'security_logs', link_to: PagePaths.security_logs },
    { name: 'authorized_entry', link_to: PagePaths.authorized_entry },
    { name: 'package_tracking', link_to: PagePaths.package_tracking },
    { name: 'key_tracking', link_to: PagePaths.key_tracking },
    { name: 'incident_reports', link_to: PagePaths.incident_reports },
    { name: 'security_patrol', link_to: PagePaths.security_patrol }
  ],
  Challenge: [
    { name: 'improving_communication', link_to: PagePaths.by_challenge_improve_communicaton },
    { name: 'documents_and_resident_info', link_to: PagePaths.by_challenge_accessing_document },
    { name: 'streamlining_security', link_to: PagePaths.by_challenge_streaming_security },
    { name: 'enforcing_rules', link_to: PagePaths.by_challenge_enforcing_rules },
    { name: 'maximizing_amenity', link_to: PagePaths.by_challenge_maximize_amenity },
    { name: 'increasing_community', link_to: PagePaths.by_challenge_increase_community },
    { name: 'tracking_managing', link_to: PagePaths.by_challenge_tracking_and_maintenance },
    { name: 'managing_rentals', link_to: PagePaths.by_challenge_managing_rental },
    { name: 'managing_visitors', link_to: PagePaths.by_challenge_visitor_mangement },
  ],
  General: [
    { name: 'property_managers', link_to: PagePaths.by_user_propertymanager },
    { name: 'boards', link_to: PagePaths.by_user_board },
    { name: 'developers', link_to: PagePaths.by_user_developers },
    { name: 'residents', link_to: PagePaths.by_user_resident }
  ]
};

export default function SolutionMenuItems(){
  const { translations: t } = useLang();

  return (
    <Box sx={{backgroundColor: colorMap.black, p: 2, overflowY: 'auto', maxHeight: '400px', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
      <Grid2 container spacing={2}>
        {/* Communication Features */}
        <Grid2 xs={12} md={6} lg={4}>
          <Typography variant="h6" sx={{color: colorMap.turquoiseClair ,textAlign: 'start', fontWeight: 'bold', mb: 2, fontSize: '0.9rem'}}>
            {t.communication}
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 , textAlign: 'start'}}>
            {features.Communication.map((item, index) => (
              <li key={index}>
                <Link href={item.link_to} sx={{fontWeight: 400,  textDecoration: 'none', color: colorMap.white, display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                  {t[item.name]}
                </Link>
              </li>
            ))}
          </ul>
        </Grid2>

        {/* RecordKeeping Features */}
        <Grid2 xs={12} md={6} lg={4}>
          <Typography variant="h6" sx={{color: colorMap.turquoiseClair, textAlign: 'start',  fontWeight: 'bold', mb: 2, fontSize: '0.9rem' }}>
            {t.record_keeping}
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 , textAlign: 'start'}}>
            {features.RecordKeeping.map((item, index) => (
              <li key={index}>
                <Link href={item.link_to} sx={{fontWeight: 400,  textDecoration: 'none', color: colorMap.white, display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                  {t[item.name]}
                </Link>
              </li>
            ))}
          </ul>
        </Grid2>

        {/* Security Features */}
        <Grid2 xs={12} md={6} lg={4}>
          <Typography variant="h6" sx={{color: colorMap.turquoiseClair, textAlign: 'start', fontWeight: 'bold', mb: 2, fontSize: '0.9rem' }}>
            {t.security}
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 , textAlign: 'start'}}>
            {features.Security.map((item, index) => (
              <li key={index}>
                <Link href={item.link_to} sx={{fontWeight: 400,  textDecoration: 'none', color: colorMap.white, display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                  {t[item.name]}
                </Link>
              </li>
            ))}
          </ul>
        </Grid2>

        {/* Challenge Features */}
        <Grid2 xs={12} md={6} lg={4}>
          <Typography variant="h6" sx={{color: colorMap.turquoiseClair , textAlign: 'start', fontWeight: 'bold', mb: 2, fontSize: '0.9rem' }}>
            {t.challenge}
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 , textAlign: 'start'}}>
            {features.Challenge.map((item, index) => (
              <li key={index}>
                <Link href={item.link_to} sx={{fontWeight: 400, textDecoration: 'none', color: colorMap.white, display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                  {t[item.name]}
                </Link>
              </li>
            ))}
          </ul>
        </Grid2>

        {/* General Feature */}
        <Grid2 xs={12} md={6} lg={4}>
          <Typography variant="h6" sx={{color: colorMap.turquoiseClair , textAlign: 'start', fontWeight: 'bold', mb: 2,fontSize: '0.9rem' }}>
            {t.general}
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 , textAlign: 'start'}}>
            {features.General.map((item, index) => (
              <li key={index}>
                <Link href={item.link_to} sx={{fontWeight: 400,  textDecoration: 'none', color: colorMap.white, display: 'block', mb: 1, transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
                  {t[item.name]}
                </Link>
              </li>
            ))}
          </ul>
        </Grid2>
      </Grid2>
      <Box sx={{ mt: 2 }}>
        <Button size='small' sx={{backgroundColor: colorMap.black, color: colorMap.white ,textTransform: 'capitalize', fontSize: '0.8rem'}} variant="outlined"  href={PagePaths.all_solution}>
          {t.view_more_features}
        </Button>
      </Box>
    </Box>
  );
};

 