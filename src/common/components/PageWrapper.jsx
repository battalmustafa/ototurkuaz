import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  DEFAULT_SEO,
  getCanonicalUrl,
  getRouteSeo,
  getStructuredDataList,
  SEO_KEYWORDS,
  SITE_URL,
} from '../../config/seo';

const PageWrapper = ({ children, title, description }) => {
  const location = useLocation();
  const routeSeo = getRouteSeo(location.pathname);

  const pageTitle = title || routeSeo.title || DEFAULT_SEO.title;
  const pageDescription =
    description || routeSeo.description || DEFAULT_SEO.description;
  const canonicalUrl = getCanonicalUrl(location.pathname);
  const structuredDataList = getStructuredDataList();
  const ogImage = `${SITE_URL}/assets/gallery/logos/logoEmpty.png`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='mx-auto px-2 bg-background animate-fade-in-slow rounded-t-3xl'>
      <Helmet>
        <html lang="tr" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" type="image/png" href={`${SITE_URL}/assets/gallery/logos/logoService.png`} />
        <link rel="shortcut icon" type="image/png" href={`${SITE_URL}/assets/gallery/logos/logoService.png`} />
        <link rel="apple-touch-icon" href={`${SITE_URL}/assets/gallery/logos/logoService.png`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={SEO_KEYWORDS} />
        <meta name="author" content="Ototurkuaz Premium" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="TR-06" />
        <meta name="geo.placename" content="Ankara, Yenimahalle" />
        <meta name="geo.position" content="39.9667;32.7833" />
        <meta name="ICBM" content="39.9667, 32.7833" />
        <meta property="og:site_name" content="Ototurkuaz Premium" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Ototurkuaz Premium - Ankara BMW Özel Servis" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        {structuredDataList.map((data, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(data)}
          </script>
        ))}
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
