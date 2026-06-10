import React from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

const ServiceContent = () => {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const ServiceItem = ({ icon, title, description }) => (
    <motion.div variants={itemVariants} className="h-full">
      <div className="border border-gray-900 p-6 rounded-lg h-full flex flex-col">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg--100 text--500 mb-4">
          <img
            className="object-contain max-h-12"
            src={process.env.PUBLIC_URL + `/assets/${icon}` || "/placeholder.svg"}
            alt={title}
          />
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
        <p className="leading-relaxed text-base flex-grow">{description}</p>
      </div>
    </motion.div>
  )

  return (
    <section className="text-gray-900 body-font bg-custom-gradient">
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          className="flex flex-wrap w-full mb-20 flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Ototurkuaz Ankara BMW Özel Servis Hizmetleri
          </h2>
          <p className="lg:w-2/3 w-full leading-relaxed text-gray-500">
            <strong>Ankara BMW servisi</strong> olarak Ototurkuaz Premium&apos;da
            periyodik bakımdan motor onarımına, fren sistemlerinden elektrik
            arıza tespitine kadar tüm BMW ve MINI ihtiyaçlarınız için
            profesyonel çözümler sunuyoruz.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants}
        >
          {/* Service Items */}
          <ServiceItem
            icon="diagnosis.png"
            title="BMW Periyodik Bakım Ankara"
            description="Ankara BMW servis kapsamında düzenli muayene, motor yağı ve filtre değişimi, fren kontrolleri ve tüm periyodik bakım işlemleri Ototurkuaz güvencesiyle."
          />
          <ServiceItem
            icon="electric-vehicle.png"
            title="BMW Elektrik & Arıza Tespiti"
            description="Ankara BMW özel servis olarak elektrik arızalarının diagnostik cihazlarla tespiti ve onarımı, akü değişimi, far ve aydınlatma sistem kontrolleri."
          />
          <ServiceItem
            icon="disc-brake.png"
            title="BMW Fren Sistemi Bakımı"
            description="BMW fren disk ve balata değişimi, fren hidroliği bakımı. Ankara bmw servis deneyimimizle güvenli sürüş için eksiksiz fren bakımı."
          />
          <ServiceItem
            icon="car-lights.png"
            title="BMW Aydınlatma Sistemleri"
            description="BMW ve MINI aydınlatma sistemlerinin kontrolü ve değişimi. Ototurkuaz Ankara servisinde tüm aydınlatma bileşenleri orijinal parça ile yenilenir."
          />
          <ServiceItem
            icon="car-engine.png"
            title="BMW Motor Bakım & Onarım"
            description="Ankara BMW motor bakımı ve onarımı, performans kontrolleri ve şanzıman işlemleri. En iyi bmw servisi standartlarında uzman müdahale."
          />
          <ServiceItem
            icon="maintenance.png"
            title="BMW Yedek Parça & Genel Onarım"
            description="Orijinal BMW yedek parça tedariki ve montajı. Ankara özel bmw servisi olarak küçük ve büyük ölçekli tüm tamirat ihtiyaçlarınıza çözüm sunuyoruz."
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceContent

