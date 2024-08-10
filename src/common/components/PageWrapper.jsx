import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PageWrapper = ({ children, title, description }) => {
  const location = useLocation();

  // Reset scroll position on component mount and navigation changes
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [location]);

  return (
    <div className='mx-auto px-2 bg-background animate-fade-in-slow rounded-t-3xl'>
      <Helmet>
        <title>{title || 'Ototurkuaz'}</title>
        <meta 
          name="description" 
          content={description || 'Ototurkuaz, Premium marka araç bakım, onarım ve detaylandırma hizmetlerinde uzmanlaşmış bir servistir. Güvenilir ve kaliteli hizmetlerimizle aracınızın performansını ve görünümünü en üst düzeye çıkarıyoruz.'} 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="
  Ototurkuaz, araç bakım, araba servisi, araç onarımı, motor bakımı, lastik değişimi, araba yıkama, oto detaylandırma, oto kuaför, BMW servis, özel servis, Ankara bmw servisi, Ankara araç bakımı, bmw yedek parça, bmw yağ değişimi, bmw balata, bmw disk, bmw rutin bakım, bmw yağ bakımı, araç detaylandırma, araba temizliği, otomotiv bakım, oto bakım, araç detay, servis, oto bakım, araç onarım, oto servis, otomobil servisi, araç bakım uzmanı, bmw servis uzmanı, bmw onarım, bmw bakım, otomobil detay, araç temizliği, premium araç bakımı
"/>
        <meta name="author" content="Ototurkuaz" />
        <meta name="robots" content="index, follow" />
        <meta name="og:title" content={title || 'Ototurkuaz'} />
        <meta name="og:description" content={description || 'Ototurkuaz, araç bakım, onarım ve detaylandırma hizmetlerinde uzmanlaşmış bir servistir. Güvenilir ve kaliteli hizmetlerimizle aracınızın performansını ve görünümünü en üst düzeye çıkarıyoruz.'} />
        <meta name="og:url" content={window.location.href} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={`${process.env.PUBLIC_URL}/assets/logos/logoEmpty.png`} />
        {/* Add any other SEO tags or meta tags here */}
      </Helmet>
      <div
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          minHeight: '100vh',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
