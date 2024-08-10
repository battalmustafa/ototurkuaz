import React from 'react';
import { useLocation } from 'react-router-dom';

const Logo = ({ alt, width, height, className }) => {
  const location = useLocation();

  // Determine the logo source based on the current path
  let src;
  if (location.pathname.includes('service')) {
    src = "/assets/gallery/logos/logoService.png";
  } else if (location.pathname.includes('premium')) {
    src = "/assets/gallery/logos/logoPremium.png";
  } else if (location.pathname.includes('detailing')) {
    src = "/assets/gallery/logos/logoDetailing.png";
  } else if (location.pathname.includes('dealer')) {
    src = "/assets/gallery/logos/logoPremium.png";
  } else if (location.pathname.includes('studio')) {
    src = "/assets/gallery/logos/logoStudio.png";
  } else {
    src = "/assets/gallery/logos/logoEmpty.png"; 
  }

  return (
    <img
      src={`${process.env.PUBLIC_URL + src}`}
      alt={alt}
      width={width || 300} // Default width if not provided
      height={height || 37} // Default height if not provided
      className={className}
    />
  );
};

export default Logo;
