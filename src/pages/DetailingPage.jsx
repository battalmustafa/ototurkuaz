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
    icon: 'car-seat.png',
    headerText: 'Anti-bakteriyel detaylı iç temizlik',
    subText: ''
  },
  {
    icon: 'car-wash.png',
    headerText: 'Boya koruma',
    subText: ''
  },
 
  {
    icon: 'car-wash (3).png',
    headerText: 'Seramik Kaplama',
    subText: ''
  },
  {
    icon: 'car-service.png',
    headerText: 'Cam Filmi',
    subText: ''
  },
  {
    icon: 'car-engine.png',
    headerText: 'Motor Temizliği',
    subText: ''
  }, {
    icon: 'car-wash (4).png',
    headerText: 'Kaput Koruma Filmi',
    subText: ''
  }, {
    icon: 'car-wash (2).png',
    headerText: 'Folyo Kaplama',
    subText: ''
  },
];

const DetailingPage = () => {
    const { t } = useTranslation();

  return (
        <> <Banner image={"/assets/gallery/detailing.jpg"} headerText={"Detailing  ototurkuaz "} 
        subText={"Aracınızn detaylı temizlik ve bakım işlemleriniz hassasiyetle yapıyoruz. Yapılan işlemlerle iç ve dış aksamların korunmasını sağlıyoruz."}
         buttonText={"Bize Ulaşın"}
         phoneNumber={"+903122785271"}/>
       
     
        <Steps steps={stepsData} headerText={"Detailing'de"} itemSpacing={"pb-2"}/>
        <GalleryPage imageName={"detailing"} path={"/assets/gallery/detailing"} galleryHeaderText={"Uygulamalarımız"}/>
        <Contact/>
        </>
  );
};

export default DetailingPage;
