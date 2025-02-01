import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogContent = {
  'bakim-onarim': {
    title: 'Araç Bakım & Onarım',
    image: '/assets/bmw-1.webp',
    content: `
      Profesyonel BMW ve MINI bakım onarım hizmetlerimiz, aracınızın performansını en üst düzeyde tutmak için tasarlanmıştır.
      
      Sunduğumuz hizmetler:
      • Periyodik bakım işlemleri
      • Motor bakım ve onarımı
      • Şanzıman bakım ve onarımı
      • Fren sistemi bakımı
      • Süspansiyon sistemi kontrolü
      • Diagnostik test ve arıza tespiti
      
      Deneyimli teknisyenlerimiz ve modern ekipmanlarımızla aracınızın ihtiyacı olan tüm bakım ve onarım işlemlerini titizlikle gerçekleştiriyoruz.
    `
  },
  'ariza-tespiti': {
    title: 'Arıza Tespiti',
    image: '/assets/bmw22.webp',
    content: `
      En son teknoloji diagnostik cihazlarımızla BMW ve MINI araçlarınızda profesyonel arıza tespiti yapıyoruz.
      
      Arıza tespit hizmetlerimiz:
      • Elektronik sistem kontrolü
      • Motor arıza tespiti
      • Şanzıman arıza tespiti
      • ABS sistem kontrolü
      • Airbag sistem kontrolü
      • Klima sistem kontrolü
      
      Uzman ekibimiz, tespit edilen arızaları en kısa sürede ve en uygun çözümlerle gidermektedir.
    `
  },
  'periyodik-bakim': {
    title: 'Periyodik Bakım',
    image: '/assets/mini-1.jpg',
    content: `
      BMW ve MINI araçlarınız için kapsamlı periyodik bakım hizmetleri sunuyoruz.
      
      Periyodik bakım kapsamında:
      • Motor yağı ve filtre değişimi
      • Hava filtresi kontrolü ve değişimi
      • Polen filtresi kontrolü ve değişimi
      • Fren hidroliği kontrolü
      • Lastik basınç ve durumu kontrolü
      • Akü kontrolü
      • Yağ kaçağı kontrolü
      • Genel sistem kontrolü
      
      Düzenli periyodik bakımlar, aracınızın ömrünü uzatır ve performansını korur. Orijinal yedek parça kullanımı ve uzman teknisyenlerimizle en iyi hizmeti garanti ediyoruz.
    `
  },
  'yedek-parca': {
    title: 'Yedek Parça',
    image: '/assets/mini-3.jpg',
    content: `
      BMW ve MINI araçlarınız için orijinal yedek parça tedariki ve montajı yapıyoruz.
      
      Yedek parça hizmetlerimiz:
      • Orijinal BMW ve MINI yedek parçaları
      • Garantili parça değişimi
      • Profesyonel montaj
      • Geniş stok seçeneği
      • Hızlı tedarik imkanı
      • Uygun fiyat politikası
      
      Aracınızın performansı ve güvenliği için orijinal yedek parça kullanımı çok önemlidir. Servisimizde sadece orijinal parçalar kullanılmaktadır.
      
      Yedek parça tedariği konusunda geniş tedarikçi ağımız sayesinde, ihtiyacınız olan parçaları hızlı bir şekilde temin edebiliyoruz.
    `
  }
};

const ServiceBlogPage = () => {
  const { slug } = useParams();
  const service = blogContent[slug];

  if (!service) {
    return <div>Hizmet bulunamadı</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-16">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-white max-w-4xl mx-auto"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              {service.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <motion.p
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className={`${
                      paragraph.startsWith('•') 
                        ? 'pl-4 text-gray-700 leading-relaxed mb-2'
                        : paragraph.includes(':') 
                          ? 'text-xl font-semibold text-gray-900 mb-4'
                          : 'text-gray-700 leading-relaxed mb-6 text-lg'
                    }`}
                  >
                    {paragraph}
                  </motion.p>
                )
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceBlogPage; 