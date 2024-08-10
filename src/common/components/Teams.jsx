import React from 'react';
import { useTranslation } from 'react-i18next';
import PersonIcon from '@mui/icons-material/Person';

const Teams = () => {
  const { t } = useTranslation();

  return (
    <section className="text-gray-600 body-font bg-teams-gradient rounded-t-3xl ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            {t('Takımımız')}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
           Her biri alanında uzman ekibimizle hizmetinizdeyiz.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <PersonIcon className="w-16 h-16 text-gray-500 flex-shrink-0 rounded-full mr-4" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Erdem Yeşilyurt
                </h2>
                <p className="text-gray-500"></p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <PersonIcon className="w-16 h-16 text-gray-500 flex-shrink-0 rounded-full mr-4" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Devran Zeytünlü
                </h2>
                <p className="text-gray-500"></p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <PersonIcon className="w-16 h-16 text-gray-500 flex-shrink-0 rounded-full mr-4" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Ahmet Süntar
                </h2>
                <p className="text-gray-500"></p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <PersonIcon className="w-16 h-16 text-gray-500 flex-shrink-0 rounded-full mr-4" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Kerem İbrahimoğlu
                </h2>
                <p className="text-gray-500"></p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <PersonIcon className="w-16 h-16 text-gray-500 flex-shrink-0 rounded-full mr-4" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Oğuzhan Altuner
                </h2>
                <p className="text-gray-500"></p>
              </div>
            </div>
          </div>
          
          {/* Add more workers and job titles as needed */}
        </div>
      </div>
    </section>
  );
};

export default Teams;
