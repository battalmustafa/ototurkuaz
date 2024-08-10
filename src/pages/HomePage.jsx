import React from 'react';
import { useTranslation } from 'react-i18next';
import Banner from '../common/components/Banner';
import Contact from '../common/components/Contact';
import RoomList from '../common/components/RoomList';
import Steps from '../common/components/Steps';
import Teams from '../common/components/Teams';
import Testimonial from '../common/components/Testimonial';

const stepsData = [
  {
    icon: 'traffic-jam.png',
    headerText: 'Ototurkuazı Ziyaret Et, Hayalindeki Aracı Keşfet',
    subText: 'Konusunda uzman satış ekibimizle otomobil tercihlerinize yön veriyoruz.'
  },
  {
    icon: 'diagnosis.png',
    headerText: 'Özel BMW ve MINI Servisi',
    subText: 'Alanında yetkin servis ekibimizle BMW ve MINI aracınıza servis hizmeti veriyoruz.'
  },
 
  {
    icon: 'car-wash (3).png',
    headerText: 'Detaylı Temizlik ve Bakım',
    subText: 'Aracınızın detaylı temizlik ve bakım işlemlerini hassasiyetle yapıyoruz. Yapılan işlemlerle iç ve dış aksamların korunmasını sağlıyoruz.'
  },
  {
    icon: 'video.png',
    headerText: 'Stüdyo Hizmeti',
    subText: 'Detaylı, profesyonel ilan fotograflaması, video çekimi hizmeti sağlıyoruz.'
  },
];


const HomePage = () => {
    const { t } = useTranslation();

  return (
        <>
        <Banner image={ "/assets/gallery/banner/6.jpeg"} headerText={" ototurkuaz "} 
        subText={"Galeri, Servis, Detailing, Studio"}
         buttonText={"Bize Ulaşın"}
         phoneNumber={"+903122785271"}/>
       
        <RoomList/>
        <Steps steps={stepsData} headerText={'da'} itemSpacing={"pb-4"}/>
        <Teams/>
        <Testimonial/>
        <Contact/>
        </>
  );
};

export default HomePage;
