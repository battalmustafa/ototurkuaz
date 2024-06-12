import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Banner = ({ headerText, subText, image, buttonText, phoneNumber }) => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Function to generate tel link
  const generateTelLink = () => {
    return `tel:${phoneNumber}`;
  };

  // UseEffect to handle image loading
  useEffect(() => {
    const img = new Image();
    img.src = `${process.env.PUBLIC_URL + image}`;
    img.onload = () => setImageLoaded(true);
  }, [image]);

  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 sm:py-2 md:flex-row md:min-h-100 flex-col items-center">
          <div
            className={`w-full grid lg:grid-cols-3 p-8  sm:grid-flow-row rounded animate-slide-in-right transition-opacity duration-600 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className='w-1/3 opacity-70'></div>
            <div className='w-1/3 opacity-70'></div>
            <div className='flex flex-col sm:flex-row'> 
  <div className='flex-1'></div>
  <div className='flex-1'></div>
  <div className="p-4 font-semibold sm:row-span-4 relative backdrop-blur-xl lg:bg-transparent  bg-gray-600 bg-opacity-80 sm:bg-opacity-0 lg:my-24">
    <h1 className="title-font sm:text-4xl text-mb-4 font-bold text-white grid grid-row-2 justify-center">
      {headerText}
    </h1>
    <div className='flex justify-center py-4'>
      <p>
        <span className='hover:animate-magnify-slow text-xl text-red-500 font-bold '>{t('Premium')}</span>
        <span className='hover:animate-magnify-slow text-xl text-white font-bold'> {t('Hizmet, ')}</span>
      </p>
      <p>
        <span className='hover:animate-magnify-slow text-xl text-red-500 font-bold '>{t('Premium')}</span>
        <span className='hover:animate-magnify-slow text-xl text-white font-bold '> {t('Güvence')}</span>
      </p>
    </div>
    <p className="mb-8 leading-relaxed text-white">
      {subText}
    </p>
    <div className="flex justify-center">
      <a href={generateTelLink()} className="inline-flex text-white bg-button border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-lg" target="_self">
        {buttonText}
      </a>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
