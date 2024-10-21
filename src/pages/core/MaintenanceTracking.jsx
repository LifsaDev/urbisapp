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
import MaintenanceTracking_hero_image from '../../assets/MaintenanceTracking_hero_image.png'
import maintenancetracking_info_1_img from '../../assets/maintenancetracking-info-1.png'
import maintenancetracking_info_2_img from '../../assets/maintenancetracking-info-2.png'
import maintenancetracking_info_3_img from '../../assets/maintenancetracking-info-3.png'
import maintenancetracking_info_4_img from '../../assets/maintenancetracking-info-4.png'





const MaintenanceTracking = () => {
 
  const {translations: t} = useLang();
  const data = {
    title: t.maintenancetracking_title,
    tagline: t.maintenancetracking_tag,
    imageUrl:  MaintenanceTracking_hero_image,
    backgroundGradient: backgroupChoice
  };

  const after_hero_data =  [
    {
      icon: "🏆",
      title: t.maintenancetracking_after_hero_1_title,
      text: t.maintenancetracking_after_hero_1_text
    },
    {
      icon: "🏆",
      title: t.maintenancetracking_after_hero_2_title,
      text: t.maintenancetracking_after_hero_2_text
    },
    {
      icon: "🏆",
      title: t.maintenancetracking_after_hero_3_title,
      text: t.maintenancetracking_after_hero_3_text
    }
  ];


  

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Maintenance Tracking | Urbis</title>
          <meta name="description" content="Welcome to the Maintenance Tracking page." />
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
              imageSrc={maintenancetracking_info_1_img}
              imagePosition="right"
              title={t.maintenancetracking_info_1_title}
              description={t.maintenancetracking_info_1_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={maintenancetracking_info_2_img}
              imagePosition="left"
              title={t.maintenancetracking_info_2_title}
              description={t.maintenancetracking_info_2_description}
              background={backgroupChoice}
            />
             <ImageTextSection
              imageSrc={maintenancetracking_info_3_img}
              imagePosition="right"
              title={t.maintenancetracking_info_3_title}
              description={t.maintenancetracking_info_3_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={maintenancetracking_info_4_img}
              imagePosition="right"
              title={t.maintenancetracking_info_4_title}
              description={t.maintenancetracking_info_4_description}
              background={backgroupChoice}
            />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default MaintenanceTracking;
