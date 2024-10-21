import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import { Box } from '@mui/material';
import MainLayout from '../../components/AppLayout';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { backgroupChoice, reversebackgroundChoice } from '../../services/colorMap';
import { useLang } from '../../contexts/langContext';
import AfterHero from '../../components/solutions/After_hero';
import ImageTextSection from '../../components/solutions/Infos';
import EventCalendar_heroImg from '../../assets/EventsCalendar_hero_image.png'
import eventcalendar_info_1_img from '../../assets/eventcalendar-info-1.png'
import eventcalendar_info_2_img from '../../assets/eventcalendar-info-2.png'
import eventcalendar_info_3_img from '../../assets/eventcalendar-info-3.png'
import eventcalendar_info_4_img from '../../assets/eventcalendar-info-4.png'





const EventCalendar = () => {
 
  const {translations: t} = useLang();
  const data = {
    title: t.eventcalendar_title,
    tagline: t.eventcalendar_tag,
    imageUrl:  EventCalendar_heroImg,
    backgroundGradient: backgroupChoice
  };

  const after_hero_data =  [
    {
      icon: "🏆",
      title: t.eventcalendar_after_hero_1_title,
      text: t.eventcalendar_after_hero_1_text
    },
    {
      icon: "🏆",
      title: t.eventcalendar_after_hero_2_title,
      text: t.eventcalendar_after_hero_2_text
    },
    {
      icon: "🏆",
      title: t.eventcalendar_after_hero_3_title,
      text: t.eventcalendar_after_hero_3_text
    }
  ];


  

  return (
    <HelmetProvider>
      <MainLayout>
        <Helmet>
          <title>Events | Urbis</title>
          <meta name="description" content="Welcome to the Events Calendar page." />
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
              imageSrc={eventcalendar_info_1_img}
              imagePosition="right"
              title={t.eventcalendar_info_1_title}
              description={t.eventcalendar_info_1_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={eventcalendar_info_2_img}
              imagePosition="left"
              title={t.eventcalendar_info_2_title}
              description={t.eventcalendar_info_2_description}
              background={backgroupChoice}
            />
             <ImageTextSection
              imageSrc={eventcalendar_info_3_img}
              imagePosition="right"
              title={t.eventcalendar_info_3_title}
              description={t.eventcalendar_info_3_description}
              background={reversebackgroundChoice}
            />
             <ImageTextSection
              imageSrc={eventcalendar_info_4_img}
              imagePosition="left"
              title={t.eventcalendar_info_4_title}
              description={t.eventcalendar_info_4_description}
              background={backgroupChoice}
            />
        </Box>
      </MainLayout>
    </HelmetProvider>
  );
};

export default EventCalendar;
