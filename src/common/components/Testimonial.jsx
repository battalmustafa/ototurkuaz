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
              Devran Bey ve ekibi bir hazine değerinde diyebilirim, iyi ki babamın kendileriyle yolu kesişmiş, ailecek Ototurkuaz dışında bir yere arabalarimizi emanet etmeyi düşünmeyiz bile, sizler de düşünmeyin derim :) İşçilik, özen, ustalık, müşteri memnuniyeti, iletişim ve hizmet konusunda övgüyü sonuna kadar hak ediyor
              </p>
              <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Çağla S.
              </h2>
              <p className="text-gray-500"></p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <PersonIcon className="w-20 h-20 mb-8 text-gray-500 rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
              <p className="leading-relaxed">
              Ankara'da özellikle BMW konusunda ,bu arada zannedersem farklı markalara da hizmet veriyorlar.  alanında tek diyebilirim. Açıkçası bundan sonra aracımızı rutin servis ve olası bir problem halinde sürekli götürmeyi düşünüyoruz. Teşhis tedavi çok hızlı, profesyonel, başarılı ve sonuç odaklı. Burayı bulana kadar farklı servislerde yaşadığımız olumsuz tecrübelerin hepsini tek kalemde sildiler. Aracı servise aldıktan sonra incelemelerin ardından yapılacak olan ve teslim ederken yapılan işlemleri detaylı şekilde anlatıp değişen parçalar varsa eski parçaları da bizzat teslim ediyorlar. Aracımızı tertemiz teslim aldık. Ayriyeten servis alanı bekleme ikramlar fiziksel ortam kalite odaklı ve memnuniyet verici. Kısadan hisse Ototurkuaz'a 1 kere gidin ve gerçek kaliteli hizmet ile tanışın zaten sonra vazgeçemeyeceksiniz. Emeği geçen arkadaşlara teşekkür ediyor hayırlı işler diliyoruz.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Murat A.
              </h2>
              <p className="text-gray-500"></p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <PersonIcon className="w-20 h-20 mb-8 text-gray-500 rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
              <p className="leading-relaxed">
              Ben bu kadar titiz, ilgili ve sabırlı bir usta görmedim. Aracımla yaşadığım bir sorunu imkansız gibi gözükse de gece gündüz demeden sürekli düşünerek ve test ederek tespitini yaptı ve çözdü. Devran usta iyi ki varsın. Gözüm arkada kalmadan hangi marka araç olursa olsun anahtarı teslim ederim.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Ertuğ E.
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
