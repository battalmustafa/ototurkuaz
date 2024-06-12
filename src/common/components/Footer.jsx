import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { LangSwitcher } from './LangSwitcher';

export const Footer = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-footerBackground text-white font-semibold border-t p-4">
      <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-32'} flex flex-col md:flex-row justify-between items-center`}>
        <div className="flex items-center mb-4 md:mb-0">
          <Logo src={"./logo.png"} width={100} height={100} />
        </div>

        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
            <Link to='/' className="hover:underline">{t('navigation.home')}</Link>
            <Link to='/dealer' className="hover:underline">{t('navigation.roomspage')}</Link>
            <Link to='/service' className="hover:underline">{t('navigation.about')}</Link>
            <Link to='/detailing' className="hover:underline">{t('navigation.gallery')}</Link>
            <Link to='/studio' className="hover:underline">{t('navigation.privileges')}</Link>
            <Link to='/contact' className="hover:underline">{t('navigation.contact')}</Link>
          </div>
          <div className="flex justify-center space-x-4">
            <span>&copy; {currentYear} Ototurkuaz Premium</span>
            <a href={process.env.PUBLIC_URL + '/pdf/ototurkuaz.pdf'} download className='hover:underline'>
              {t('Broşür indir')}
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <LangSwitcher />
        </div>
      </div>
    </div>
  );
};
