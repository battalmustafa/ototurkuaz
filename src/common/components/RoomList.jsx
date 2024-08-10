import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
                  className="w-full object-cover h-60 object-center block rounded hover:animate-magnify-slow"
                  src={process.env.PUBLIC_URL + "https://www.borusanoto.com/content/assets/images/teaser/2.webp"}
                />
                <div className="absolute bottom-2  justify-between bg-gray-600 bg-opacity-50 text-white font-semibold text-2xl p-2 px-8 rounded backdrop-filter backdrop-blur-sm flex items-center">
                <span>Oto Satış</span>
                <span className="ml-2 flex justify-center items-center hover:bg-textNavy bg-button text-white p-2 rounded-full">
                  <ArrowForwardIcon />
                </span>
              </div>

              </div>
            </Link>
            <Link to="/service">
              <div className="relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-60 object-center block rounded hover:animate-magnify-slow"
                  src={process.env.PUBLIC_URL + "/assets/gallery/servis1.jpg"}
                />
                <div className="absolute bottom-2  justify-between bg-gray-600 bg-opacity-50 text-white font-semibold text-2xl p-2 px-8 rounded backdrop-filter backdrop-blur-sm flex items-center">
                <span>Servis</span>
                <span className="ml-2 flex justify-center items-center hover:bg-textNavy bg-button text-white p-2 rounded-full">
                  <ArrowForwardIcon />
                </span>
              </div>
              </div>
            </Link>
          </div>
          <div className="col-span-1 row-span-1 relative hover:animate-magnify-slow">
            <Link to="/">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded"
                src={process.env.PUBLIC_URL + "/assets/gallery/banner/8.jpeg"}
                />
             
            </Link>
          </div>
          <div className="col-span-1 grid grid-row-2 gap-8">
            <Link to="/studio">
              <div className="relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-60 object-center block rounded hover:animate-magnify-slow"
                  src={process.env.PUBLIC_URL + "/assets/gallery/banner/4.jpeg"}
                />
                <div className="absolute bottom-2  justify-between bg-gray-600 bg-opacity-50 text-white font-semibold text-2xl p-2 px-8 rounded backdrop-filter backdrop-blur-sm flex items-center">
                <span>Studio</span>
                <span className="ml-2 flex justify-center items-center  hover:bg-textNavy bg-button text-white p-2 rounded-full">
                  <ArrowForwardIcon />
                </span>
              </div>
              </div>
            </Link>
            <Link to="/detailing">
              <div className="relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-60 object-center block rounded hover:animate-magnify-slow"
                  src={process.env.PUBLIC_URL + "/assets/gallery/banner/11.jpeg"}
                />
                <div className="absolute bottom-2  justify-between bg-gray-600 bg-opacity-50 text-white font-semibold text-2xl p-2 px-8 rounded backdrop-filter backdrop-blur-sm flex items-center">
                <span>Detailing</span>
                <span className="ml-2 flex justify-center items-center  hover:bg-textNavy bg-button text-white p-2 rounded-full">
                  <ArrowForwardIcon />
                </span>
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
