import React from 'react';
import { motion } from 'framer-motion';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import NoCrashIcon from '@mui/icons-material/NoCrash';

const Steps = ({ steps, headerText, itemSpacing = "pb-4" }) => {
  return (
    <section className="text-gray-600 body-font bg-teams-gradient rounded-t-3xl pt-8 pb-16">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:text-4xl text-3xl font-bold title-font text-center mb-12 text-gray-900"
      >
        ototurkuaz {headerText} sizi ne bekliyor ?
      </motion.h1>
      
      <div className="container px-5 mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex relative ${itemSpacing} sm:items-center md:w-2/3 mx-auto`}
          >
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gradient-to-b from-button to-transparent pointer-events-none"></div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-button text-white relative z-10 title-font font-medium text-sm shadow-lg"
            >
              {index + 1}
            </motion.div>
            
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-24 h-24 bg-white text-gray-900 rounded-full inline-flex items-center justify-center shadow-md transition-transform duration-300"
              >
                <img
                  className="object-contain max-h-12 transition-transform duration-300"
                  src={process.env.PUBLIC_URL + '/assets/' + step.icon}
                  alt={step.headerText}
                />
              </motion.div>
              
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-bold title-font text-gray-900 mb-2 text-xl">
                  {step.headerText}
                </h2>
                <p className="leading-relaxed text-gray-600">
                  {step.subText}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
