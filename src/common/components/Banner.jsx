import { height } from '@mui/system';
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
      
      {/* Fixed Height Hero Image */}
      <div className="w-full relative h-128">
        <img
          src={`${process.env.PUBLIC_URL + image}`}
          alt="Hero"
          className="w-full h-full object-cover rounded"
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Button Area with Blur Background at Bottom Left with Fixed Width */}
        <div className={`absolute left-0 bottom-0 m-4 p-4 ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-600`}>
          <div className="backdrop-blur-sm bg-gray-600 bg-opacity-50 p-6 rounded-lg w-80">
            <h1 className="title-font sm:text-4xl text-mb-4 font-bold text-white">
              {headerText ==="Ototurkuaz Galeri" ? 
              <>
              <span className='text-white'>Ototurkuaz </span>
              <span className='text-red-500'>Premium</span>

              </>
              : headerText
              }
            </h1>

            <p className="mb-4 leading-relaxed text-white">
              {subText}
            </p>

            <div className="flex">
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
