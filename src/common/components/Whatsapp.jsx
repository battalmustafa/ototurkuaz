import { WhatsApp } from '@mui/icons-material';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const Whatsapp = () => {
  const location = useLocation();
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint according to your design
  const handleWhatsAppClick = () => {
    let phoneNumber = location.pathname.includes("service") ? '+905413813406' :'+905311007171' ; // Replace with the phone number you want to open in WhatsApp

    // Extract phone number from the URL if available
    // const urlParams = new URLSearchParams(location.search);
    // const urlPhoneNumber = urlParams.get('phone');
    // if (urlPhoneNumber) {
    //   phoneNumber = urlPhoneNumber;
    // }

    // Construct the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 text-white mb-4 p-2 bg-green-500 rounded-full cursor-pointer"
    >
      {/* You can replace the content with your WhatsApp logo or icon */}
      <WhatsApp />
    </div>
  );
};
