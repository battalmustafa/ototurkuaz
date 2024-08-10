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
    icon: 'traffic-jam.png',
    headerText: 'Konusunda uzman satış ekibimizle otomobil tercihlerinize yön veriyoruz.',
    subText: ''
  },
  {
    icon: 'car-loan.png',
    headerText: 'Taleplerinize göre size en uygun aracı tedarik ediyoruz.',
    subText: ''
  },
 
  {
    icon: 'car.png',
    headerText: 'Araç alım ve satım süreçlerinizde yatırım danışmanlığı sağlıyoruz.',
    subText: ''
  },
  
];

const DealerPage = () => {
    const { t } = useTranslation();

  return (
        <> <Banner headerText={"Ototurkuaz Galeri"} image={"/assets/gallery/banner/6.jpeg"}
        subText={""}
         buttonText={"Bize Ulaşın"}
         phoneNumber={"+903122785271"}/>
        <Steps steps={stepsData} headerText={"Galeri' de"}/>
        <Contact/>
        </>
  );
};

export default DealerPage;
