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
            alt=""
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
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Serviste neler var?</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Araçlarınızın bakımı ve onarımı için sunduğumuz geniş hizmet yelpazemize göz atın.
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
            title="Muayene ve Bakım"
            description="Araçlarınızın düzenli muayene ve bakımı, motor yağı ve filtre değişimleri, fren kontrolleri ve tüm diğer bakım işlemleri."
          />
          <ServiceItem
            icon="electric-vehicle.png"
            title="Elektrik Sistemleri"
            description="Araçların elektrik sistemlerinde oluşabilecek arızaların tespiti ve onarımı, akü değişimi, far ve aydınlatma sistemlerinin kontrolü."
          />
          <ServiceItem
            icon="disc-brake.png"
            title="Fren Sistemleri"
            description="Fren diskleri ve balatalarının kontrolü, değişimi ve fren hidroliği bakımı. Güvenli sürüş için fren sistemlerinizin tam ve eksiksiz çalışmasını sağlıyoruz."
          />
          <ServiceItem
            icon="car-lights.png"
            title="Aydınlatma Sistemleri"
            description="Aydınlatma sistemlerinin kontrolü ve değiştirilmesi. Daha güvenli sürüş için tüm aydınlatma sistemlerinizin tam çalışır durumda olmasını sağlıyoruz."
          />
          <ServiceItem
            icon="car-engine.png"
            title="Motor"
            description="Motor arızalarının tespiti ve onarımı, performans artırıcı işlemler ve motor bakımı. Motorunuzun en iyi şekilde çalışmasını sağlıyoruz."
          />
          <ServiceItem
            icon="maintenance.png"
            title="Araç Bakım & Onarım"
            description="Araçlarınızın genel bakımı ve onarımı, küçük ve büyük ölçekli tüm tamirat işlemleri. Her türlü araç bakım ve onarım ihtiyacınıza profesyonel çözümler sunuyoruz."
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceContent

