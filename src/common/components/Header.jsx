import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import BuildIcon from '@mui/icons-material/Build';
import PhotoIcon from '@mui/icons-material/Photo';
import StarIcon from '@mui/icons-material/Star';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Logo from '../ui/Logo';
import { LangSwitcher } from './LangSwitcher';

export const Header = () => {
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const location = useLocation();

  const isButtonSelected = (path) => {
    return location.pathname === path;
  };

  const list = (
    <List onClick={() => setDrawerOpen(false)}>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={t('navigation.home')} />
      </ListItem>
      <ListItem button component={Link} to="/dealer">
        <ListItemIcon>
          <StoreIcon />
        </ListItemIcon>
        <ListItemText primary={t('navigation.roomspage')} />
      </ListItem>
      <ListItem button component={Link} to="/service">
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary={t('navigation.about')} />
      </ListItem>
      <ListItem button component={Link} to="/studio">
        <ListItemIcon>
          <PhotoIcon />
        </ListItemIcon>
        <ListItemText primary={t('navigation.gallery')} />
      </ListItem>
      <ListItem button component={Link} to="/detailing">
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary={t('navigation.privileges')} />
      </ListItem>
      <ListItem button component={Link} to="/contact">
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary={t('navigation.contact')} />
      </ListItem>
    </List>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {!isMobile && (
        <div className="bg-headerBackground sticky top-0 z-20 max-w-8xl mx-auto rounded-b-lg py-4 px-32 text-white flex justify-between items-center">
          <Link to='/'>
            <Logo src={'/logonew.png'} width={120} height={800} />
          </Link>

          <div className="grid grid-flow-col gap-2">
            <Link to="/">
              <button
                className={`${
                  isButtonSelected('/') ? 'border border-white text-white rounded' : ''
                } text-white font-bold px-4 py-2 hover:bg-button hover:text-white rounded focus:outline-none`}
              >
                {t('navigation.home')}
              </button>
            </Link>
            <Link to="/dealer">
              <button
                className={`${
                  isButtonSelected('/dealer') ? 'border border-white text-white rounded' : ''
                } text-white font-bold px-4 py-2 hover:bg-button hover:text-white rounded focus:outline-none`}
              >
                {t('navigation.roomspage')}
              </button>
            </Link>
            <Link to="/service">
              <button
                className={`${
                  isButtonSelected('/service') ? 'border border-white text-white rounded' : ''
                } text-white font-bold px-4 py-2 hover:bg-button hover:text-white rounded focus:outline-none`}
              >
                {t('navigation.about')}
              </button>
            </Link>
            <Link to="/detailing">
              <button
                className={`${
                  isButtonSelected('/detailing') ? 'border border-white text-white rounded' : ''
                } text-white font-bold px-4 py-2 hover:bg-button hover:text-white rounded focus:outline-none`}
              >
                {t('navigation.privileges')}
              </button>
            </Link>
            <Link to="/studio">
              <button
                className={`${
                  isButtonSelected('/studio') ? 'border border-white text-white rounded' : ''
                } text-white font-bold px-4 py-2 hover:bg-button hover:text-white rounded focus:outline-none`}
              >
                {t('navigation.gallery')}
              </button>
            </Link>
            <Link to="/contact">
              <button
                className={`${
                  isButtonSelected('/contact') ? 'border border-white text-white rounded' : ''
                } text-white font-bold px-4 py-2 hover:bg-button hover:text-white rounded focus:outline-none`}
              >
                {t('navigation.contact')}
              </button>
            </Link>
          </div>
          <LangSwitcher />
        </div>
      )}

      {isMobile && (
        <AppBar position="static" style={{ backgroundColor: '#ffffff', color: '#ffffff' }}>
          <Toolbar className="flex justify-between border-b p-2 bg-headerBackground text-white">
            <Link to='/'>
              <Logo src={'/logo.png'} width={66} height={66} />
            </Link>
            <IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon style={{ color: '#ffffff' }} />
            </IconButton>
            <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
              <div className="flex flex-col items-center p-4">
                {list}
                <LangSwitcher />
              </div>
            </Drawer>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};
