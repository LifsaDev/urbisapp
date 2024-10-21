import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../../components/AppLayout';
import { Box } from '@mui/material';
import { backgroupChoice, reversebackgroundChoice } from '../../services/colorMap';
import { useLang } from '../../contexts/langContext';
import AfterHero from '../../components/solutions/After_hero';
import ImageTextSection from '../../components/solutions/Infos';
import IncidentReport_hero_image from '../../assets/IncidentReport_hero_image.png'
import incidentreport_info_1_img from '../../assets/incidentreport-info-1.png'
import incidentreport_info_2_img from '../../assets/incidentreport-info-2.png'
import incidentreport_info_3_img from '../../assets/incidentreport-info-3.png'
import incidentreport_info_4_img from '../../assets/incidentreport-info-4.png'






const IncidentReport = () => {
 
  const {translations: t} = useLang();
  const data = {
    title: t.incidentrepport_title,
    tagline: t.incidentrepport_tag,
    imageUrl:  IncidentReport_hero_image,
    backgroundGradient: backgroupChoice
  };

  const after_hero_data =  [
    {
      icon: "🏆",
      title: t.incidentrepport_after_hero_1_title,
      text: t.incidentrepport_after_hero_1_text
    },
    {
      icon: "🏆",
      title: t.incidentrepport_after_hero_2_title,
      text: t.incidentrepport_after_hero_2_text
    },
    {
      icon: "🏆",
      title: t.incidentrepport_after_hero_3_title,
      text: t.incidentrepport_after_hero_3_text
    }
  ];


  

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Incident Report | Urbis</title>
          <meta name="description" content="Welcome to the Incident Report page." />
        </Helmet>
 
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F7', width: '100vw'}}>
            <SolutionHero 
                title={data.title} 
                tagline={data.tagline} 
                imageUrl={data.imageUrl} 
                backgroundGradient= {data.backgroundGradient}
             />
             <AfterHero data={after_hero_data}/>
             <ImageTextSection
              imageSrc={incidentreport_info_1_img}
              imagePosition="right"
              title={t.incidentrepport_info_1_title}
              description={t.incidentrepport_info_1_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={incidentreport_info_2_img}
              imagePosition="left"
              title={t.incidentrepport_info_2_title}
              description={t.incidentrepport_info_2_description}
              background={backgroupChoice}
            />
             <ImageTextSection
              imageSrc={incidentreport_info_3_img}
              imagePosition="right"
              title={t.incidentrepport_info_3_title}
              description={t.incidentrepport_info_3_description}
              background={reversebackgroundChoice}
            />
            <ImageTextSection
              imageSrc={incidentreport_info_4_img}
              imagePosition="left"
              title={t.incidentrepport_info_4_title}
              description={t.incidentrepport_info_4_description}
              background={reversebackgroundChoice}
            />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default IncidentReport;
