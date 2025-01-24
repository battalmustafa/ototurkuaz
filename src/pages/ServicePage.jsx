import React from 'react';
import { useTranslation } from 'react-i18next';
import Banner from '../common/components/Banner';
import Contact from '../common/components/Contact';
import ServiceContent from '../common/components/ServiceContent';
import Steps from '../common/components/Steps';
import GalleryPage from '../common/components/GalleryPage';
import ServiceGrid from '../common/components/ServiceGrid';
import Testimonial from '../common/components/Testimonial';

const stepsData = [
  {
    icon: 'maintenance.png',
    headerText: 'Periyodik Bakım',
    subText: ''
  },
  {
    icon: 'diagnosis.png',
    headerText: 'Arıza Tespiti',
    subText: ''
  },
  {
    icon: 'car-check.png',
    headerText: 'Gizli Özellik Aktivasyonu',
    subText: ''
  },
  {
    icon: 'maintenance (2).png',
    headerText: 'Yedek Parça',
    subText: ''
  },
  // Add more objects as needed
];




const ServicePage = () => {
    const { t } = useTranslation();

  return (
        <>
        <Banner image={"/assets/gallery/service/4.jpg"} headerText={"Ototurkuaz Servis"} 
        subText={"BMW ve MINI araçlarınız için özel servis hizmeti sağlamaktayız."}
         buttonText={"Bize Ulaşın"}
         phoneNumber={"+903122785271"}/>
                 <ServiceGrid/>

        <ServiceContent/>

        <Steps steps={stepsData} headerText={"Servis'de"}/>
        <GalleryPage imageName={""} path={"/assets/gallery/service"} galleryHeaderText={"Servisimizden Fotoğraflar"} imageCount={10}/>
        <Testimonial/>

        <Contact/>
        </>
  );
};

export default ServicePage;
