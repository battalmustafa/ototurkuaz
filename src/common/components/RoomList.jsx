import React from 'react';
import { Link } from 'react-router-dom';

const RoomList = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 sm:grid-flow-row">
          <div className="col-span-1 grid grid-rows-2 gap-8">
            <Link to="/dealer">
              <div className="relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block rounded hover:animate-magnify-slow"
                  src={process.env.PUBLIC_URL + "/assets/gallery/DSC03563.jpg"}
                />
                <div className="absolute bottom-2  bg-gray-600 bg-opacity-50  text-white font-semibold text-2xl p-2 px-8 rounded backdrop-filter backdrop-blur-sm">
                  Oto Satış
                </div>
              </div>
            </Link>
            <Link to="/service">
              <div className="relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block rounded hover:animate-magnify-slow"
                  src={process.env.PUBLIC_URL + "/assets/gallery/servis1.jpg"}
                />
                <div className="absolute bottom-2  bg-gray-600 bg-opacity-50 text-white font-semibold text-2xl p-2 px-8 rounded backdrop-filter backdrop-blur-sm">
                  Servis
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-1 row-span-1 relative hover:animate-magnify-slow">
            <Link to="/">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded"
                src={process.env.PUBLIC_URL + "/assets/gallery/turkuazmiddle.jpg"}
              />
              <div className="absolute bottom-0 min-w-full space-x-44 bg-gray-600 bg-opacity-50 text-white font-semibold lg:text-2xl sm:text-sm p-2 rounded backdrop-filter backdrop-blur-sm">
                <p><span className="text-red-500">Premium</span> Kalite</p> 
                <p><span className="text-red-500">Premium</span> Güvence </p>
              </div>
            </Link>
          </div>
          <div className="col-span-1 grid grid-row-2 gap-8">
            <Link to="/detailing">
              <div className="relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block rounded hover:animate-magnify-slow"
                  src={process.env.PUBLIC_URL + "/assets/gallery/studio.jpg"}
                />
                <div className="absolute bottom-2  bg-gray-600 bg-opacity-50 text-white font-semibold text-2xl p-2 px-8 rounded backdrop-filter backdrop-blur-sm">
                  Stüdyo
                </div>
              </div>
            </Link>
            <Link to="/studio">
              <div className="relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block rounded hover:animate-magnify-slow"
                  src={process.env.PUBLIC_URL + "/assets/gallery/detailing.jpg"}
                />
                <div className="absolute bottom-2  bg-gray-600 bg-opacity-50 text-white font-semibold text-2xl p-2 px-8 rounded backdrop-filter backdrop-blur-sm">
                  Detailing
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomList;
