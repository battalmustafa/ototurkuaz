import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SeoContentSection = () => {
  return (
    <section
      className="bg-white py-16 px-6"
      aria-labelledby="ankara-bmw-servis-icerik"
    >
      <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="ankara-bmw-servis-icerik"
            className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 text-center"
          >
            Ankara&apos;nın Güvenilir BMW Özel Servisi: Ototurkuaz Premium
          </h2>

          <p className="mb-4">
            <strong>Ankara BMW servis</strong> arayan sürücüler için{' '}
            <strong>Ototurkuaz Premium</strong>, Yenimahalle merkezli modern
            servis tesisinde BMW ve MINI araçlara özel bakım, onarım ve yedek
            parça hizmeti sunmaktadır. <strong>Ankara BMW özel servis</strong>{' '}
            kategorisinde uzun yıllara dayanan tecrübemizle, aracınızın
            performansını ve güvenliğini en üst düzeyde koruyoruz.
          </p>

          <p className="mb-4">
            <strong>En iyi BMW servisi Ankara</strong> arayışında olan
            müşterilerimiz, Ototurkuaz&apos;ı tercih ederek yetkili servis
            kalitesinde işçilik, orijinal yedek parça garantisi ve şeffaf
            fiyatlandırma avantajından yararlanır. <strong>Ankara özel BMW
            servisi</strong> olarak motor bakımı, fren sistemi, elektrik
            arızaları, şanzıman kontrolü ve periyodik bakım işlemlerinin
            tamamını profesyonel ekipmanlarla gerçekleştiriyoruz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ototurkuaz Ankara BMW Servis Hizmetleri
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>BMW periyodik bakım Ankara</strong> — motor yağı, filtre
              değişimi, fren ve genel sistem kontrolleri
            </li>
            <li>
              <strong>BMW arıza tespiti</strong> — diagnostik cihazlarla
              elektronik ve mekanik arıza analizi
            </li>
            <li>
              <strong>BMW motor ve şanzıman onarımı</strong> — uzman
              teknisyenlerle kapsamlı tamirat
            </li>
            <li>
              <strong>BMW yedek parça Ankara</strong> — orijinal parça tedariki
              ve montajı
            </li>
            <li>
              <strong>MINI Cooper özel servis</strong> — BMW grubu MINI
              araçlar için bakım ve onarım
            </li>
            <li>
              Fren balata ve disk değişimi, klima servisi, aydınlatma ve akü
              bakımı
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Neden Ankara BMW Özel Servis Olarak Ototurkuaz?
          </h3>
          <p className="mb-4">
            <strong>Ankara bmw özel servis</strong> seçenekleri arasında
            Ototurkuaz Premium; deneyimli BMW uzmanı kadrosu, son teknoloji
            diagnostik altyapısı ve müşteri odaklı hizmet anlayışıyla öne
            çıkar. <strong>Ankaradaki BMW servisleri</strong> arasında
            kurumsal müşteri portföyümüz ve TSE belgeli iş süreçlerimizle
            güvenilir bir adres olmayı sürdürüyoruz.
          </p>
          <p className="mb-4">
            BMW 1 Serisi, 3 Serisi, 5 Serisi, X serisi ve tüm MINI modellerinde
            <strong> Ankara BMW servisi</strong> ihtiyaçlarınız için randevu
            alabilir, aracınızı güvenle servisimize bırakabilirsiniz.{' '}
            <strong>Premium BMW servis Ankara</strong> deneyimini uygun maliyetle
            yaşamak isteyenler için{' '}
            <Link to="/contact" className="text-blue-700 hover:underline font-medium">
              iletişim
            </Link>{' '}
            sayfamızdan bize ulaşın veya hemen arayın.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-50 rounded-xl p-6 border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Ankara BMW Servis — Hızlı Erişim
          </h3>
          <p className="text-sm text-gray-600">
            Ototurkuaz Service · Yenimahalle, Ankara · BMW özel servis · MINI
            özel servis · Periyodik bakım · Arıza tespiti · Orijinal yedek
            parça · En iyi bmw servisi ankara · ankara bmw servis · ankara özel
            bmw servisi
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SeoContentSection;
