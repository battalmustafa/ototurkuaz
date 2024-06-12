import React from 'react';

const Features = ({ features, headerText, itemSpacing = "pb-4" }) => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center mb-4 text-gray-900">
        ototurkuaz premium {headerText} sizi ne bekliyor ?
      </h1>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex relative ${itemSpacing} sm:items-center md:w-2/3 mx-auto`}
          >
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-button text-white relative z-10 title-font font-medium text-sm`}
            >
              {index + 1}
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div
                className={`flex-shrink-0 w-24 h-24 bg-white text-gray-900 rounded-full inline-flex items-center justify-center`}
              >
                {feature.icon}
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  {feature.headerText}
                </h2>
                <p className="leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
