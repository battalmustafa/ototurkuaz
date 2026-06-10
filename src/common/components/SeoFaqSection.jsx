import React from 'react';
import { motion } from 'framer-motion';
import { FAQ_ITEMS } from '../../config/seo';

const SeoFaqSection = () => {
  return (
    <section
      className="bg-gray-50 py-16 px-6"
      aria-labelledby="bmw-servis-sss-baslik"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="bmw-servis-sss-baslik"
            className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4"
          >
            Ankara BMW Servis Hakkında Sık Sorulan Sorular
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Ototurkuaz Premium</strong> olarak Ankara BMW özel servis
            hizmetlerimiz, fiyatlandırma ve randevu süreçleri hakkında en çok
            merak edilen soruları yanıtladık.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <summary className="cursor-pointer px-6 py-4 font-medium text-gray-900 hover:bg-gray-50 list-none flex justify-between items-center">
                <h3 className="text-base sm:text-lg pr-4">{item.question}</h3>
                <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                <p>{item.answer}</p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoFaqSection;
