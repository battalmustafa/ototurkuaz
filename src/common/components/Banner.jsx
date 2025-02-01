import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { motion } from 'framer-motion';

const Banner = ({ slides, buttonText, phoneNumber }) => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Main Carousel */}
      <Carousel
        animation="slide"
        duration={800}
        interval={3000}
        indicators={false}
        navButtonsAlwaysVisible={true}
        className="h-full"
        fullHeightHover={false}
        sx={{
          '.MuiPaper-root': {
            margin: 0,
            padding: 0,
            borderRadius: 0,
          }
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[80vh] w-full">
            {/* Background image without grayscale */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay gradient - adjusted for better text visibility near bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            {/* Content - moved closer to bottom */}
            <div className="absolute inset-x-0 bottom-16 flex flex-col items-center">
              {/* Slide text */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center px-4"
              >
                <h2 className="text-white text-3xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="text-white/90 text-xl mb-5">
                  {slide.description}
                </p>
                
                {/* CTA Button */}
                {buttonText && (
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-block bg-button hover:bg-button/90 text-white px-8 py-3 rounded-full 
                             transition-all duration-300 transform hover:scale-105"
                  >
                    {buttonText}
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

