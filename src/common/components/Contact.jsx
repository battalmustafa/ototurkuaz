import React from 'react';
import EmailForm from './EmailForm';
import { Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  // Function to open Google Maps with navigation to the destination 
  const openGoogleMaps = () => {
    const mapsUrl = `https://maps.app.goo.gl/jiMsyfLcrgvFGwyJ8`;
    window.open(mapsUrl, '_blank');
  };

  // Function to handle phone link click
  const handlePhoneClick = () => {
    window.location.href = 'tel:+905413813406';
  };

  // Function to handle email link click
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@ototurkuaz.com.tr';
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Left: Email Form */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <EmailForm />
        </div>

        {/* Right: Contact Information and Map */}
        <div className="w-full md:w-1/2 flex flex-col items-center pt-8 space-y-4">
          <div className="w-full">
            <img
              src="assets/map.png"
              alt="Click to navigate on Google Maps"
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
              <Link component="span" underline="hover" onClick={handlePhoneClick} color="primary">
              0 541 381 34 06
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
