import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className='space-x-4 px-2'>
  <Select
    label="Language"
    value={i18n.language}
    onChange={(e) => changeLanguage(e.target.value)}
    sx={{
      backgroundColor: '#ffffff', // Set background color to white
      color: '#000000', // Set text color to black
      height: '40px', // Set height
      fontWeight: 'bold' // Set font weight to bold
    }}
  >
    <MenuItem value="tr">Türkçe</MenuItem>
    <MenuItem value="en">English</MenuItem>
    {/* Add more MenuItems for additional languages as needed */}
  </Select>
</div>

  );
};

export default LangSwitcher;
