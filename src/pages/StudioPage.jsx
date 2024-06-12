import React from 'react';
import { useTranslation } from 'react-i18next';
import Banner from '../common/components/Banner';
import Contact from '../common/components/Contact';
import RoomList from '../common/components/RoomList';
import Steps from '../common/components/Steps';
import Teams from '../common/components/Teams';
import Testimonial from '../common/components/Testimonial';
import GalleryPage from '../common/components/GalleryPage';
const stepsData = [
  {
    icon: 'video.png',
    headerText: 'Stüdyo Fotograf Çekimleri',
    subText: 'Detaylı ilan fotğrafı çekimi'
  },
  
  {
    icon: 'video.png',
    headerText: 'Stüdyo Video Çekimi',
    subText: ''
  },
  
];
const StudioPage = () => {
    const { t } = useTranslation();

  return (
        <>
         <Banner image={"/assets/gallery/studio.jpg"} headerText={"Stüdyo ototurkuaz "} 
        subText={"Stüdyomuzda aracınızı en iyi şekilde pazarlamanızı sağlayacak görüntüleme hizmeti veriyoruz."}
         buttonText={"Bize Ulaşın"}
         phoneNumber={"+903122785271"}/>
        <Steps steps={stepsData} headerText={"Stüdyo'da"}/>
        <GalleryPage imageName={"studio"} path={"/assets/gallery/studio"} galleryHeaderText={"Çekimlerimiz"}/>
        <Contact/>
        </>
  );
};

export default StudioPage;
