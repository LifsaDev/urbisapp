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
import AuthorizedEntry_hero_image from '../../assets/AuthorizedEntry_hero_image.png'
import authorityentry_info_1_img from '../../assets/authorityentry-info-1.png'
import authorityentry_info_2_img from '../../assets/authorityentry-info-2.png'
import authorityentry_info_3_img from '../../assets/authorityentry-info-3.png'
import authorityentry_info_4_img from '../../assets/authorityentry-info-4.png'






const AuthorityEntry = () => {
 
  const {translations: t} = useLang();
  const data = {
    title: t.authorityEntry_title,
    tagline: t.authorityEntry_tag,
    imageUrl:  AuthorizedEntry_hero_image,
    backgroundGradient: backgroupChoice
  };

  const after_hero_data =  [
    {
      icon: "🏆",
      title: t.authorityEntry_after_hero_1_title,
      text: t.authorityEntry_after_hero_1_text
    },
    {
      icon: "🏆",
      title: t.authorityEntry_after_hero_2_title,
      text: t.authorityEntry_after_hero_2_text
    },
    {
      icon: "🏆",
      title: t.authorityEntry_after_hero_3_title,
      text: t.authorityEntry_after_hero_3_text
    }
  ];


  

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Authority Entry | Urbis</title>
          <meta name="description" content="Welcome to the Authority Entry page." />
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
              imageSrc={authorityentry_info_1_img}
              imagePosition="right"
              title={t.authorityEntry_info_1_title}
              description={t.authorityEntry_info_1_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={authorityentry_info_2_img}
              imagePosition="left"
              title={t.authorityEntry_info_2_title}
              description={t.authorityEntry_info_2_description}
              background={backgroupChoice}
            />
             <ImageTextSection
              imageSrc={authorityentry_info_3_img}
              imagePosition="right"
              title={t.authorityEntry_info_3_title}
              description={t.authorityEntry_info_3_description}
              background={reversebackgroundChoice}
            />
            <ImageTextSection
              imageSrc={authorityentry_info_4_img}
              imagePosition="left"
              title={t.authorityEntryt_info_4_title}
              description={t.authorityEntry_info_4_description}
              background={reversebackgroundChoice}
            />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default AuthorityEntry;
