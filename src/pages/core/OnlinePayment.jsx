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
import OnlinePayments_hero_image from '../../assets/OnlinePayments_hero_image.png'
import onlinepayment_info_1_img from '../../assets/onlinepayment-info-1.png'
import onlinepayment_info_2_img from '../../assets/onlinepayment-info-2.png'
import onlinepayment_info_3_img from '../../assets/onlinepayment-info-3.png'





const OnlinePayment = () => {
 
  const {translations: t} = useLang();
  const data = {
    title: t.onlinepayment_title,
    tagline: t.onlinepayment_tag,
    imageUrl:  OnlinePayments_hero_image,
    backgroundGradient: backgroupChoice
  };

  const after_hero_data =  [
    {
      icon: "🏆",
      title: t.onlinepayment_after_hero_1_title,
      text: t.onlinepayment_after_hero_1_text
    },
    {
      icon: "🏆",
      title: t.onlinepayment_after_hero_2_title,
      text: t.onlinepayment_after_hero_2_text
    },
    {
      icon: "🏆",
      title: t.onlinepayment_after_hero_3_title,
      text: t.onlinepayment_after_hero_3_text
    }
  ];


  

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Online Payment | Urbis</title>
          <meta name="description" content="Welcome to the Online Payment page." />
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
              imageSrc={onlinepayment_info_1_img}
              imagePosition="right"
              title={t.onlinepayment_info_1_title}
              description={t.onlinepayment_info_1_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={onlinepayment_info_2_img}
              imagePosition="left"
              title={t.onlinepayment_info_2_title}
              description={t.onlinepayment_info_2_description}
              background={backgroupChoice}
            />
             <ImageTextSection
              imageSrc={onlinepayment_info_3_img}
              imagePosition="right"
              title={t.onlinepayment_info_3_title}
              description={t.onlinepayment_info_3_description}
              background={reversebackgroundChoice}
            />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default OnlinePayment;
