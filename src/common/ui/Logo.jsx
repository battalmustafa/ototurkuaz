import React from 'react';

const Logo = ({ alt, src, width, height , className}) => {
  return (
    <img src={process.env.PUBLIC_URL + '/assets/premiumnew.png' } alt={alt} width={300} height={37} className={className} /> 
  );
};

export default Logo;  