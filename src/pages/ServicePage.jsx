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
import SeoContentSection from "../common/components/SeoContentSection"
import SeoFaqSection from "../common/components/SeoFaqSection"

const bannerSlides = [
  {
    image: "assets/header1.jpg",
    title: "Ankara BMW Servis | Ototurkuaz Service",
    description: "Ankara'nın en iyi BMW özel servisi Ototurkuaz. BMW ve MINI araçlarınız için periyodik bakım, arıza tespiti, onarım ve orijinal yedek parça hizmeti.",
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
        <Banner slides={bannerSlides} buttonText="Bize Ulaşın" phoneNumber="+905417103605" />
      </motion.div>

      <motion.section
        variants={itemVariants}
        aria-label="BMW özel servis hakkında"
        className="max-w-4xl mx-auto px-6 py-10 text-center text-gray-700"
      >
        <p className="text-lg leading-relaxed">
          <strong>Ankara BMW servis</strong> ve <strong>ankara bmw özel servis</strong>{' '}
          arayanlar için <strong>Ototurkuaz Premium</strong>, BMW ve MINI
          markalarında uzmanlaşmış kadrosuyla <strong>en iyi BMW servisi</strong>{' '}
          deneyimini sunar. <strong>BMW periyodik bakım</strong>, arıza tespiti,
          motor onarımı ve orijinal yedek parça hizmetlerimizle Yenimahalle,
          Ankara&apos;daki servisimizde aracınızı güvenle emanet edebilirsiniz.
        </p>
      </motion.section>
      
      <motion.div variants={itemVariants}>
        <ServiceGrid />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <CustomerSlider 
          items={[
            {
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Anadolu_Ajans%C4%B1_logo.svg/1280px-Anadolu_Ajans%C4%B1_logo.svg.png",
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
        <SeoContentSection />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SeoFaqSection />
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

