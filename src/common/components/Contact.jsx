import React from 'react';
import EmailForm from './EmailForm';
import { Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  // Function to open Google Maps with navigation to the destination 
  const openGoogleMaps = () => {
    const mapsUrl = `https://maps.app.goo.gl/8zmtT3NsuUJoPFFL6`;
    window.open(mapsUrl, '_blank');
  };

  // Function to handle phone link click
  const handlePhoneClick = () => {
    window.location.href = 'tel:+905417103605';
  };

  // Function to handle email link click
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@ototurkuaz.com.tr';
  };

  return (
    <div
      className={
        isContactPage
          ? 'px-4 pb-8 pt-24 min-h-[calc(100vh-6rem)] flex flex-col justify-center max-w-6xl mx-auto'
          : 'p-4'
      }
    >
      <div className="flex flex-col md:flex-row md:space-x-4 md:items-center">
        {/* Left: Email Form */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <EmailForm />
        </div>

        {/* Right: Contact Information and Map */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:pt-0 pt-8 space-y-4">
          <div className="w-full">
            <img
              src="assets/map.png"
              alt="Ototurkuaz BMW özel servis Ankara konum haritası"
              onClick={openGoogleMaps}
              className="cursor-pointer max-w-full rounded-md"
            />
          </div>
        </div>
      </div>
      <div className=" p-4 rounded-md bg-white space-x-4 mt-4">
            <Typography variant="body1" align="center" gutterBottom>
              <strong>{t("contact.address")}</strong> Ototurkuaz Service - Ottoman Center 1804 Ergazi Mah. Sk.No:6-3 Yenimahalle Ankara
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              <strong>{t("contact.phone")}</strong>{' '}
              <br />
              <Link component="span" underline="hover" onClick={handlePhoneClick} color="primary">
              0 541 710 36 05
              </Link>
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              <strong>{t("contact.email")}</strong>{' '}
              <Link component="span" underline="hover" onClick={handleEmailClick} color="primary">
                info@ototurkuaz.com.tr
              </Link>
            </Typography>
          </div>
    </div>
  );
};

export default Contact;
