import React from "react";

const Certifications = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Sertifikalarımız</h2>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <img 
              src="/assets/TSE_logo.svg.png" 
              alt="TSE Sertifikası" 
              className="mx-auto mb-4"
              style={{ width: '120px', height: 'auto' }}
            />
            <p className="font-semibold text-gray-700">TSE Sertifikalı Hizmet</p>
            <p className="text-sm text-gray-600 max-w-md mx-auto mt-2">
              Hizmetlerimiz Türk Standartları Enstitüsü tarafından onaylanmış ve sertifikalandırılmıştır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications; 