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
import AIPackageTracking_hero_image from '../../assets/AIPackageTracking_hero_image.png'
import packagetracking_info_1_img from '../../assets/packagetracking-info-1.png'
import packagetracking_info_2_img from '../../assets/packagetracking-info-2.png'
import packagetracking_info_3_img from '../../assets/packagetracking-info-3.png'





const PackageScanning = () => {
 
  const {translations: t} = useLang();
  const data = {
    title: t.packageTracking_title,
    tagline: t.packageTracking_tag,
    imageUrl:  AIPackageTracking_hero_image,
    backgroundGradient: backgroupChoice
  };

  const after_hero_data =  [
    {
      icon: "🏆",
      title: t.packageTracking_after_hero_1_title,
      text: t.packageTracking_after_hero_1_text
    },
    {
      icon: "🏆",
      title: t.packageTracking_after_hero_2_title,
      text: t.packageTracking_after_hero_2_text
    },
    {
      icon: "🏆",
      title: t.packageTracking_after_hero_3_title,
      text: t.packageTracking_after_hero_3_text
    }
  ];


  

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Package Scanning | Urbis</title>
          <meta name="description" content="Welcome to the Package Scanning  page." />
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
              imageSrc={packagetracking_info_1_img}
              imagePosition="right"
              title={t.packageTracking_info_1_title}
              description={t.packageTracking_info_1_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={packagetracking_info_2_img}
              imagePosition="left"
              title={t.packageTracking_info_2_title}
              description={t.packageTracking_info_2_description}
              background={backgroupChoice}
            />
             <ImageTextSection
              imageSrc={packagetracking_info_3_img}
              imagePosition="right"
              title={t.packageTracking_info_3_title}
              description={t.packageTracking_info_3_description}
              background={reversebackgroundChoice}
            />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default PackageScanning;
