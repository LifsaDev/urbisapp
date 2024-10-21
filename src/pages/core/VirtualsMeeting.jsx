import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import MainLayout from '../../components/AppLayout';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import { backgroupChoice, reversebackgroundChoice } from '../../services/colorMap';
import { useLang } from '../../contexts/langContext';
import AfterHero from '../../components/solutions/After_hero';
import ImageTextSection from '../../components/solutions/Infos';
import virtual_meeting_heroImg from '../../assets/virtual-meeting_hero.png'
import virtual_meeting_info_1 from '../../assets/virtual-meeting-info-1.png'
import virtual_meeting_info_2 from '../../assets/virtual-meeting-info-2.png'
import virtual_meeting_info_3 from '../../assets/virtual-meeting-info-3.png'
import virtual_meeting_info_4 from '../../assets/virtual-meeting-info-4.png'





const VirtualMeeting = () => {
  const {translations: t} = useLang();
  const data = {
    title: t.virtual_meeting_title,
    tagline: t.virtual_meeting_tag,
    imageUrl: virtual_meeting_heroImg,
    backgroundGradient: backgroupChoice
  };

  const after_hero_data =  [
    {
      icon: "🎤",
      title: t.virtual_meeting_live_moderator_title,
      text: t.virtual_meeting_live_moderator_text
    },
    {
      icon: "🗳️",
      title:t.virtual_meeting_live_polling_title,
      text: t.virtual_meeting_live_polling_text
    },
    {
      icon: "🏆",
      title: t.virtual_meeting_live_successrate_title,
      text: t.virtual_meeting_live_successrate_text
    }
  ];


  

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Virtual Meeting | Dorsia Management</title>
          <meta name="description" content="Welcome to the virtual meeting page." />
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
              imageSrc={virtual_meeting_info_1}
              imagePosition="right"
              title={t.virtual_meeting_info_1_title}
              description={t.virtual_meeting_info_1_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={virtual_meeting_info_2}
              imagePosition="left"
              title={t.virtual_meeting_info_2_title}
              description={t.virtual_meeting_info_2_description}
              background={backgroupChoice}
            />
             <ImageTextSection
              imageSrc={virtual_meeting_info_3}
              imagePosition="right"
              title={t.virtual_meeting_info_3_title}
              description={t.virtual_meeting_info_3_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={virtual_meeting_info_4}
              imagePosition="left"
              title={t.virtual_meeting_info_4_title}
              description={t.virtual_meeting_info_4_description}
              background={backgroupChoice}
            />
        </Box>
        </MainLayout>
    </HelmetProvider>
  );
};

export default VirtualMeeting;
