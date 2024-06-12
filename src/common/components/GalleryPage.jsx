import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SliderModal from './SliderModal';

const GalleryPage = ({ imageName, path, imageCount=4 ,galleryHeaderText="Araçlarımız"}) => {
  const { t } = useTranslation();
  const [sliderOpen, setSliderOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleSliderOpen = (clickedIndex) => {
    setActiveImageIndex(clickedIndex);
    setSliderOpen(true);
  };

  const handleSliderClose = () => {
    setSliderOpen(false);
  };

  const imagePaths = [];
  for (let i = 1; i <= imageCount; i++) {
    const imagePath = `${process.env.PUBLIC_URL}${path}/${imageName}${i}.jpg`;
    imagePaths.push(imagePath);
  }

  return (
    <>
      <h2 className='font-semibold text-gray-900 text-center text-3xl py-4'>
      {galleryHeaderText}
      </h2>
      <div className="px-4 gap-4 m-auto animate-fade-in-slow container">
        <div className='grid grid-cols-2 md:grid-cols-4 gap-1'>
          {imagePaths.map((imagePath, index) => (
            <img
              key={index}
              className="object-contain cursor-pointer"
              src={imagePath}
              alt={`Gallery ${index + 1}`}
              onClick={() => handleSliderOpen(index)}
            />
          ))}
        </div>
        <SliderModal
          images={imagePaths}
          isOpen={sliderOpen}
          onClose={handleSliderClose}
          activeImageIndex={activeImageIndex}
        />
      </div>
    </>
  );
};

export default GalleryPage;
