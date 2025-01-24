import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const serviceItems = [
  { title: 'Araç Bakım & Onarım', image: `${process.env.PUBLIC_URL}/assets/bmw-1.webp`, link: '/' },
  { title: '', image: `${process.env.PUBLIC_URL}/assets/bmw-2.webp`, link: '/'},

  { title: 'Arıza Tespiti', image: `${process.env.PUBLIC_URL}/assets/bmw22.webp`, link: '/' },
  { title: 'Periyodik Bakım', image: `${process.env.PUBLIC_URL}/assets/mini-1.jpg`, link: '/' },
  { title: '', image: `${process.env.PUBLIC_URL}/assets/mini-2.webp`, link: '/' },
  { title: 'Yedek Parça', image: `${process.env.PUBLIC_URL}/assets/mini-3.jpg`, link: '/' }
];

const ServiceGrid = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Ototurkuaz Servis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((item, index) => (
            <Link to={item.link} key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="bg-white rounded-full p-2 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowForwardIcon className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
