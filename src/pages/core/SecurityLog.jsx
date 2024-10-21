import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import MainLayout from '../../components/AppLayout';
import { backgroupChoice, reversebackgroundChoice } from '../../services/colorMap';
import { useLang } from '../../contexts/langContext';
import AfterHero from '../../components/solutions/After_hero';
import ImageTextSection from '../../components/solutions/Infos';
import SecurityLog_hero_image from '../../assets/SecurityLog_hero_image.png'
import  securitylog_info_1_img from '../../assets/securitylog-info-1.png'
import securitylog_info_2_img from '../../assets/securitylog-info-2.png'
 

const SecurityLog = () => {
 
  const {translations: t} = useLang();
  const data = {
    title: t.securitylog_title,
    tagline: t.securitylog_tag,
    imageUrl: SecurityLog_hero_image,
    backgroundGradient: backgroupChoice
  };

  const after_hero_data =  [
    {
      icon: "🏆",
      title: t.securitylog_after_hero_1_title,
      text: t.securitylog_after_hero_1_text
    },
    {
      icon: "🏆",
      title: t.securitylog_after_hero_2_title,
      text: t.securitylog_after_hero_2_text
    },
    {
      icon: "🏆",
      title: t.securitylog_after_hero_3_title,
      text: t.securitylog_after_hero_3_text
    }
  ];


  

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Security Log | Urbis</title>
          <meta name="description" content="Welcome to the Security Log page." />
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
              imageSrc={securitylog_info_1_img}
              imagePosition="right"
              title={t.securitylog_info_1_title}
              description={t.securitylog_info_1_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={securitylog_info_2_img}
              imagePosition="left"
              title={t.securitylog_info_2_title}
              description={t.securitylog_info_2_description}
              background={backgroupChoice}
            />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default SecurityLog;
