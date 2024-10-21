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
import VendorPortal_hero_image from '../../assets/VendorPortal_hero_image.png'
import vendormanagement_info_1_img from '../../assets/vendormanagement-info-1.png'
import vendormanagement_info_2_img from '../../assets/vendormanagement-info-2.png'
import vendormanagement_info_3_img from '../../assets/vendormanagement-info-3.png'
import vendormanagement_info_4_img from '../../assets/vendormanagement-info-4.png'





const VendorManagement = () => {
 
  const {translations: t} = useLang();
  const data = {
    title: t.vendormanagement_title,
    tagline: t.vendormanagement_tag,
    imageUrl:  VendorPortal_hero_image,
    backgroundGradient: backgroupChoice
  };

  const after_hero_data =  [
    {
      icon: "🏆",
      title: t.vendormanagement_after_hero_1_title,
      text: t.vendormanagement_after_hero_1_text
    },
    {
      icon: "🏆",
      title: t.vendormanagement_after_hero_2_title,
      text: t.vendormanagement_after_hero_2_text
    },
    {
      icon: "🏆",
      title: t.vendormanagement_after_hero_3_title,
      text: t.vendormanagement_after_hero_3_text
    }
  ];


  

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Vendor Management | Urbis</title>
          <meta name="description" content="Welcome to the Vendor Management page." />
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
              imageSrc={vendormanagement_info_1_img}
              imagePosition="right"
              title={t.vendormanagement_info_1_title}
              description={t.vendormanagement_info_1_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={vendormanagement_info_2_img}
              imagePosition="left"
              title={t.vendormanagement_info_2_title}
              description={t.vendormanagement_info_2_description}
              background={backgroupChoice}
            />
             <ImageTextSection
              imageSrc={vendormanagement_info_3_img}
              imagePosition="right"
              title={t.vendormanagement_info_3_title}
              description={t.vendormanagement_info_3_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={vendormanagement_info_4_img}
              imagePosition="left"
              title={t.vendormanagement_info_4_title}
              description={t.vendormanagement_info_4_description}
              background={backgroupChoice}
            />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default VendorManagement;
