import React from 'react';
import { useTranslation } from 'react-i18next';

const ServiceContent = () => {
  const { t } = useTranslation();

  const images = [
    'assets/banner1.jpg',
    'assets/banner2.jpg',
    'assets/banner3.jpg',
  ];

  return (
    <section className="text-gray-900 body-font bg-custom-gradient">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Serviste neler var?
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Araçlarınızın bakımı ve onarımı için sunduğumuz geniş hizmet yelpazemize göz atın.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-900 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg--100 text--500 mb-4">
                <img
                  className="object-contain max-h-12"
                  src={process.env.PUBLIC_URL + '/assets/diagnosis.png'}
                  alt=''
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Muayene ve Bakım
              </h2>
              <p className="leading-relaxed text-base">
                Araçlarınızın düzenli muayene ve bakımı, motor yağı ve filtre değişimleri, fren kontrolleri ve tüm diğer bakım işlemleri.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-900 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg--100 text--500 mb-4">
                <img
                  className="object-contain max-h-12"
                  src={process.env.PUBLIC_URL + '/assets/electric-vehicle.png'}
                  alt=''
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Elektrik Sistemleri
              </h2>
              <p className="leading-relaxed text-base">
                Araçların elektrik sistemlerinde oluşabilecek arızaların tespiti ve onarımı, akü değişimi, far ve aydınlatma sistemlerinin kontrolü.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-900 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg--100 text--500 mb-4">
                <img
                  className="object-contain max-h-12"
                  src={process.env.PUBLIC_URL + '/assets/disc-brake.png'}
                  alt=''
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Fren Sistemleri
              </h2>
              <p className="leading-relaxed text-base">
                Fren diskleri ve balatalarının kontrolü, değişimi ve fren hidroliği bakımı. Güvenli sürüş için fren sistemlerinizin tam ve eksiksiz çalışmasını sağlıyoruz.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-900 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg--100 text--500 mb-4">
                <img
                  className="object-contain max-h-12"
                  src={process.env.PUBLIC_URL + '/assets/car-lights.png'}
                  alt=''
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Aydınlatma Sistemleri
              </h2>
              <p className="leading-relaxed text-base">
                Aydınlatma sistemlerinin kontrolü ve değiştirilmesi. Daha güvenli sürüş için tüm aydınlatma sistemlerinizin tam çalışır durumda olmasını sağlıyoruz.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-900 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg--100 text--500 mb-4">
                <img
                  className="object-contain max-h-12"
                  src={process.env.PUBLIC_URL + '/assets/car-engine.png'}
                  alt=''
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Motor
              </h2>
              <p className="leading-relaxed text-base">
                Motor arızalarının tespiti ve onarımı, performans artırıcı işlemler ve motor bakımı. Motorunuzun en iyi şekilde çalışmasını sağlıyoruz.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-900 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg--100 text--500 mb-4">
                <img
                  className="object-contain max-h-12"
                  src={process.env.PUBLIC_URL + '/assets/maintenance.png'}
                  alt=''
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Araç Bakım & Onarım
              </h2>
              <p className="leading-relaxed text-base">
                Araçlarınızın genel bakımı ve onarımı, küçük ve büyük ölçekli tüm tamirat işlemleri. Her türlü araç bakım ve onarım ihtiyacınıza profesyonel çözümler sunuyoruz.
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default ServiceContent;
