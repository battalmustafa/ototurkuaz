import React from "react"
import { motion } from "framer-motion"
import Banner from "../common/components/Banner"
import ServiceGrid from "../common/components/ServiceGrid"
import ServiceContent from "../common/components/ServiceContent"
import Steps from "../common/components/Steps"
import GalleryPage from "../common/components/GalleryPage"
import Testimonial from "../common/components/Testimonial"
import Contact from "../common/components/Contact"
import CustomerSlider from "../common/components/CustomerSlider"
import Certifications from "../common/components/Certifications"

const bannerSlides = [
  {
    image: "assets/header1.jpg",
    title: "Ototurkuaz Service",
    description: "BMW ve MINI araçlarınız için özel servis hizmeti sağlamaktayız.",
    badge: "/images/TSE_logo.svg"
  },
  {
    image: "assets/gallery/service/4.jpg",
    title: "Profesyonel Ekip",
    description: "Deneyimli teknisyenlerimiz ve modern ekipmanlarımız ile en iyi hizmeti sunuyoruz.",
  },
  {
    image: "assets/headermini2.jpg",
    title: "MINI Özel Servis",
    description: "MINI araçlarınız için uzman kadro ve orijinal yedek parça ile servis sağlıyoruz.",
  },
]

const stepsData = [
  {
    icon: "maintenance.png",
    headerText: "Periyodik Bakım",
    subText: "",
  },
  {
    icon: "diagnosis.png",
    headerText: "Arıza Tespiti",
    subText: "",
  },
  {
    icon: "car-check.png",
    headerText: "Gizli Özellik Aktivasyonu",
    subText: "",
  },
  {
    icon: "maintenance (2).png",
    headerText: "Yedek Parça",
    subText: "",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

const ServicePage = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants}>
        <Banner slides={bannerSlides} buttonText="Bize Ulaşın" phoneNumber="+905413813406" />
      </motion.div>
      
      
      <motion.div variants={itemVariants}>
        <ServiceGrid />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <CustomerSlider 
          items={[
            {
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Anadolu_Agency_logo_2023_%282%29.svg/400px-Anadolu_Agency_logo_2023_%282%29.svg.png",
              name: "Anadolu Ajansı"
            },
            {
              logo: "https://thkd.tr/wp-content/uploads/2024/11/resim_2024-11-10_153423593.png#2516",
              name: "Türkiye Haber Kameramanları Derneği"
            },
            {
              logo: "https://raw.githubusercontent.com/battalmustafa/ototurkuaz/refs/heads/main/public/assets/parlemento.png",
              name: "Parlamento Muhabirleri Derneği"
            }
          ]} 
          title="Kurumsal Müşterilerimiz"
          logoSize={120}
          backgroundColor="#f5f5f5"
          grayscale={true}
        />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <ServiceContent />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Steps steps={stepsData} headerText={"Servis'de Neler Yapıyoruz?"} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <GalleryPage
          imageName={""}
          path={"/assets/gallery/service"}
          galleryHeaderText={"Servisimizden Fotoğraflar"}
          imageCount={10}
        />
      </motion.div>

      

      <motion.div variants={itemVariants}>
        <Testimonial />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Contact />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Certifications />
      </motion.div>
    </motion.div>
  )
}


export default ServicePage

