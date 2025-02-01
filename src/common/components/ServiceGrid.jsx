import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const serviceItems = [
  { 
    title: "Araç Bakım & Onarım", 
    image: `${process.env.PUBLIC_URL}/assets/bmw-1.webp`, 
    link: "/service/bakim-onarim",
    slug: "bakim-onarim" 
  },
  { 
    title: "Arıza Tespiti", 
    image: `${process.env.PUBLIC_URL}/assets/bmw22.webp`, 
    link: "/service/ariza-tespiti",
    slug: "ariza-tespiti"
  },
  { 
    title: "Periyodik Bakım", 
    image: `${process.env.PUBLIC_URL}/assets/mini-1.jpg`, 
    link: "/service/periyodik-bakim",
    slug: "periyodik-bakim"
  },
  { 
    title: "Yedek Parça", 
    image: `${process.env.PUBLIC_URL}/assets/mini-3.jpg`, 
    link: "/service/yedek-parca",
    slug: "yedek-parca"
  },
]

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

const ServiceGrid = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Ototurkuaz Servis
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {serviceItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link to={item.link} className="group block">
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={item.image || `${process.env.PUBLIC_URL}/placeholder.svg`}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <motion.span
                      className="bg-white rounded-full p-2 text-gray-800"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceGrid

