import React from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';



const ButtonBack = ({ className = '' }) => {
  const navigate = useNavigate();
  const handleClick = () => {
   navigate(-1);
  };
  const { t } = useTranslation();

  return (
    <button
      className={` p-2 flex items-center justify-center rounded !leading-none disabled:bg-opacity-70 bg-button hover:bg-primary-700 text-neutral-50 ${className}`}
      onClick={handleClick}
    >
      
      
        <span>{t("common.back")}</span>
    </button>
  );
};

export default ButtonBack;
