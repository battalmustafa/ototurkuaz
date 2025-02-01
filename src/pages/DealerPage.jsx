import React from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Banner from "../common/components/Banner"
import Contact from "../common/components/Contact"
import RoomList from "../common/components/RoomList"
import Steps from "../common/components/Steps"
import Teams from "../common/components/Teams"
import Testimonial from "../common/components/Testimonial"
import GalleryPage from "../common/components/GalleryPage"

const stepsData = [
  {
    icon: "traffic-jam.png",
    headerText: "Konusunda uzman satış ekibimizle otomobil tercihlerinize yön veriyoruz.",
    subText: "",
  },
  {
    icon: "car-loan.png",
    headerText: "Taleplerinize göre size en uygun aracı tedarik ediyoruz.",
    subText: "",
  },
  {
    icon: "car.png",
    headerText: "Araç alım ve satım süreçlerinizde yatırım danışmanlığı sağlıyoruz.",
    subText: "",
  },
]

const bannerSlides = [
  {
    image: "/assets/gallery/banner/6.jpeg",
    title: "Ototurkuaz Galeri",
    description: "Premium araç seçenekleri için galerimizi ziyaret edin.",
  },
  {
    image: "/assets/header1.jpg",
    title: "Geniş Araç Yelpazesi",
    description: "Uzman ekibimizle size en uygun aracı bulmanıza yardımcı oluyoruz.",
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

const DealerPage = () => {
  const { t } = useTranslation()

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants}>
        <Banner slides={bannerSlides} buttonText="Bize Ulaşın" phoneNumber="+903122785271" />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Steps steps={stepsData} headerText="Galeri'de" />
      </motion.div>

    

      <motion.div variants={itemVariants}>
        <Teams />
      </motion.div>



      <motion.div variants={itemVariants}>
        <Testimonial />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Contact />
      </motion.div>
    </motion.div>
  )
}

export default DealerPage

