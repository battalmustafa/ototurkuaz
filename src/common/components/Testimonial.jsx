import React from 'react';
import { useTranslation } from 'react-i18next';
import PersonIcon from '@mui/icons-material/Person';

const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font mb-6 text-gray-900">
          {t('Müşterilerimiz')}
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <PersonIcon className="w-20 h-20 mb-8 text-gray-500 rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
              <p className="leading-relaxed">
                "Otomobil Günlüklerim" youtube kanalı sayesinde tanımış olduğum, başta Erdem abi, Ömer kardeşim ve çalışan diğer tüm herkese,
                yaşattıkları eşsiz takas deneyimi için çok teşekkür ederim. Ben bu zamana kadar işini bu denli özveriyle yapan, yeri geldiğinde sizi sizden daha fazla düşünen,
                şeffaf, güvenli ve hızlı bir araç alım süreci yaşamadım. Allah nasip ederse bundan sonra hem dostlarım olarak, hem de araç alım satım işlemlerim için
                tercih edeceğim tek yer "Oto Turkuaz Premium" olur.
                Herkese gönül rahatlığıyla tavsiye ederim. Bir uğrayın çaylarını için, sıradan bir oto galeri olmadıklarını kendi gözlerinizle görün.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Gökhan S.
              </h2>
              <p className="text-gray-500"></p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <PersonIcon className="w-20 h-20 mb-8 text-gray-500 rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
              <p className="leading-relaxed">
                Kardeşim aracılığıyla Erdem beyle tanıştım. Dürüst, misafirperver, bir kardeş gibi candan birisi.
                Sabah geldik kahvaltı jesti unutulmadı. Güvenerek alışveriş yapılır. Allah bereketli kazançlar versin.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Kadir K.
              </h2>
              <p className="text-gray-500"></p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <PersonIcon className="w-20 h-20 mb-8 text-gray-500 rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
              <p className="leading-relaxed">
                Aracımızı alırken de, satarken de her aşamasında titizlikle yanımızda olmanız, kafamızda hiçbir soru işareti oluşmasına mahal vermeyen yetkinliğiniz ve işlemleri en hızlı şekilde çözümleyen profesyonel tavrınız son derece güven verici.
                Araç alım satım işini külfet olmaktan çıkarıp, sorunsuz hale getirmek için müthiş organize ve sistemli çalışan Ototurkuaz Ekibi ve özellikle Erdem Bey'e içtenlikle teşekkür ederiz.  Memnuniyetle birlikte çalışmaya devam edeceğiz..
              </p>
              <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Gülden Ç.
              </h2>
              <p className="text-gray-500"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
