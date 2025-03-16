import React from "react";

const CustomerSlider = ({ 
  items, 
  title = "Kurumsal Müşterilerimiz", 
  logoSize = 100,
  backgroundColor = "#f5f5f5",
  grayscale = false
}) => {
 

  const itemsToShow = items || [];

  return (
    <div className="w-full py-10" style={{ backgroundColor }}>
      {title && <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">{title}</h2>}
      
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {itemsToShow.map((item, index) => (
            <div 
              className="flex flex-col items-center"
              key={index}
            >
              <img 
                src={item.logo} 
                alt={`${item.name} logo`} 
                className={`mb-3 transition-all duration-300 filter-none hover:scale-105 ${grayscale ? 'grayscale' : ''}`}
                style={{ 
                  width: `${logoSize}px`, 
                  height: `${logoSize}px`,
                  objectFit: 'contain'
                }}
              />
              <p className="text-sm text-gray-600 font-semibold text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSlider; 