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
import Website_heroImg from '../../assets/Website_image_hero.png'
import website_info_1_img from '../../assets/website-info-1.png'
import website_info_2_img from '../../assets/website-info-2.png'
import website_info_3_img from '../../assets/website-info-3.png'
import website_info_4_img from '../../assets/website-info-4.png'





const Websites = () => {
 
  const {translations: t} = useLang();
  const data = {
    title: t.website_title,
    tagline: t.website_tag,
    imageUrl:  Website_heroImg,
    backgroundGradient: backgroupChoice
  };

  const after_hero_data =  [
    {
      icon: "🏆",
      title: t.websiter_after_hero_1_title,
      text: t.website_after_hero_1_text
    },
    {
      icon: "🏆",
      title: t.website_after_hero_2_title,
      text: t.website_after_hero_2_text
    },
    {
      icon: "🏆",
      title: t.website_after_hero_3_title,
      text: t.website_after_hero_3_text
    }
  ];


  

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Build Website | Urbis</title>
          <meta name="description" content="Welcome to the Build Website page." />
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
              imageSrc={website_info_1_img}
              imagePosition="right"
              title={t.website_info_1_title}
              description={t.website_info_1_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={website_info_2_img}
              imagePosition="left"
              title={t.website_info_2_title}
              description={t.website_info_2_description}
              background={backgroupChoice}
            />
             <ImageTextSection
              imageSrc={website_info_3_img}
              imagePosition="right"
              title={t.website_info_3_title}
              description={t.website_info_3_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={website_info_4_img}
              imagePosition="left"
              title={t.website_info_4_title}
              description={t.website_info_4_description}
              background={backgroupChoice}
            />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default Websites;
