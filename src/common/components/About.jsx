import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
    <h2 className='font-semibold text-textGold text-center text-3xl py-4'>{t("about.title")}</h2>

     <div className="grid grid-cols-1 md:grid-cols-2 px-4  gap-4 m-auto animate-fade-in-slow  container">
    

    <div >
        <img
          className="object-cover w-full h-full"
          src="/assets/aboutUs.jpeg" 
          alt="Top Right"
        />
   

</div>
<div className='text-textNavy space-y-2 p-4'>
  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
      <p key={key}>{t(`about.content${key}`)}</p>
    ))}
</div>
    </div></>
   
  );
};

export default About;
