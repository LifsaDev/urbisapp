import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import MainLayout from '../../components/AppLayout';
import { Box } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { backgroupChoice, reversebackgroundChoice } from '../../services/colorMap';
import { useLang } from '../../contexts/langContext';
import AfterHero from '../../components/solutions/After_hero';
import ImageTextSection from '../../components/solutions/Infos';
import DiscussionForum_heroImg from '../../assets/DiscussionForum_hero_image.png'
import discussionforum_info_1_img from '../../assets/discussionforum-info-1.png'
import discussionforum_info_2_img from '../../assets/discussionforum-info-2.png'
import discussionforum_info_3_img from '../../assets/discussionforum-info-3.png'
import discussionforum_info_4_img from '../../assets/discussionforum-info-4.png'





const DiscussionForum = () => {
 
  const {translations: t} = useLang();
  const data = {
    title: t.discussionforum_title,
    tagline: t.discussionforum_tag,
    imageUrl:  DiscussionForum_heroImg,
    backgroundGradient: backgroupChoice
  };

  const after_hero_data =  [
    {
      icon: "🏆",
      title: t.discussionforum_after_hero_1_title,
      text: t.discussionforum_after_hero_1_text
    },
    {
      icon: "🏆",
      title: t.discussionforum_after_hero_2_title,
      text: t.discussionforum_after_hero_2_text
    },
    {
      icon: "🏆",
      title: t.discussionforum_after_hero_3_title,
      text: t.discussionforum_after_hero_3_text
    }
  ];


  

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Discussion Forum | Urbis</title>
          <meta name="description" content="Welcome to the Discussion Forum page." />
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
              imageSrc={discussionforum_info_1_img}
              imagePosition="right"
              title={t.discussionforum_info_1_title}
              description={t.discussionforum_info_1_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={discussionforum_info_2_img}
              imagePosition="left"
              title={t.discussionforum_info_2_title}
              description={t.discussionforum_info_2_description}
              background={backgroupChoice}
            />
             <ImageTextSection
              imageSrc={discussionforum_info_3_img}
              imagePosition="right"
              title={t.discussionforum_info_3_title}
              description={t.discussionforum_info_3_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={discussionforum_info_4_img}
              imagePosition="left"
              title={t.discussionforum_info_4_title}
              description={t.discussionforum_info_4_description}
              background={backgroupChoice}
            />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default DiscussionForum;
