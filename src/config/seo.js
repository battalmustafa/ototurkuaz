export const SITE_URL = 'https://www.ototurkuaz.com.tr';
export const SITE_NAME = 'Ototurkuaz Service';

export const SEO_KEYWORDS = [
  'Ototurkuaz',
  'Ototurkuaz BMW servis',
  'Ototurkuaz Ankara',
  'Ankara BMW servis',
  'Ankara BMW servisi',
  'ankara bmw servis',
  'Ankara BMW özel servis',
  'Ankara BMW özel servisi',
  'ankara özel bmw servisi',
  'ankara bmw özel servis',
  'en iyi BMW servisi Ankara',
  'en iyi bmw servisi',
  'Ankara en iyi BMW servisi',
  'BMW özel servis Ankara',
  'BMW özel servisi Ankara',
  'BMW servisi Ankara',
  'Ankaradaki BMW servisleri',
  'Ankara BMW bakım',
  'BMW periyodik bakım Ankara',
  'BMW onarım Ankara',
  'BMW yedek parça Ankara',
  'BMW motor bakımı Ankara',
  'BMW fren bakımı Ankara',
  'BMW arıza tespiti Ankara',
  'BMW yetkili servis alternatifi Ankara',
  'premium BMW servis Ankara',
  'Yenimahalle BMW servis',
  'MINI Cooper servis Ankara',
  'MINI özel servis Ankara',
  'BMW MINI özel servis Ankara',
].join(', ');

export const DEFAULT_SEO = {
  title: 'Ankara BMW Servis | Ototurkuaz - 0541 710 36 05',
  description:
    "Ankara BMW servis arayanlar için Ototurkuaz Service: Ankara'nın en iyi BMW özel servisi. BMW periyodik bakım, arıza tespiti, onarım ve orijinal yedek parça. Yenimahalle, Ankara.",
};

export const ROUTE_SEO = {
  '/': DEFAULT_SEO,
  '/service': DEFAULT_SEO,
  '/contact': {
    title: 'İletişim & Randevu | Ankara BMW Servis - Ototurkuaz',
    description:
      "Ototurkuaz Ankara BMW özel servis iletişim ve randevu. Yenimahalle, Ankara. BMW periyodik bakım ve onarım için hemen arayın: 0541 710 36 05.",
  },
  '/about': {
    title: 'Hakkımızda | Ototurkuaz - Ankara BMW Özel Servisi',
    description:
      'Ototurkuaz Premium, Ankara merkezli BMW ve MINI uzmanı özel servis. Deneyimli kadro, orijinal yedek parça ve yetkili servis kalitesinde hizmet.',
  },
  '/dealer': {
    title: 'Galeri | Ototurkuaz Premium Ankara',
    description: 'Ototurkuaz Premium araç galerisi — Ankara.',
  },
  '/detailing': {
    title: 'Detailing | Ototurkuaz Premium Ankara',
    description: "Ankara'da profesyonel oto detailing ve premium araç bakım hizmetleri — Ototurkuaz.",
  },
  '/studio': {
    title: 'Stüdyo | Ototurkuaz Premium',
    description: 'Profesyonel araç fotoğraf ve video çekim stüdyosu — Ototurkuaz Ankara.',
  },
};

export const FAQ_ITEMS = [
  {
    question: "Ankara'da en iyi BMW servisi hangisi?",
    answer:
      "Ototurkuaz Premium, Ankara'da BMW ve MINI markalarında uzmanlaşmış özel servis olarak periyodik bakım, arıza tespiti, onarım ve orijinal yedek parça hizmeti sunar. Yenimahalle'deki modern servisimizde deneyimli teknisyenler ve diagnostik ekipmanlarla yetkili servis kalitesinde hizmet veriyoruz.",
  },
  {
    question: 'Ankara BMW özel servis ile yetkili servis arasındaki fark nedir?',
    answer:
      "Ankara BMW özel servis olarak Ototurkuaz, yetkili servis kalitesinde işçilik sunarken daha esnek randevu ve uygun fiyat avantajı sağlar. Orijinal BMW yedek parça kullanımı, profesyonel diagnostik cihazlar ve uzman kadro ile aracınız güvende kalır.",
  },
  {
    question: 'Ototurkuaz BMW servisi Ankara\'da nerede?',
    answer:
      'Ototurkuaz Service, Ankara Yenimahalle Ottoman Center 1804, Ergazi Mah. Sk. No:6-3 adresinde hizmet vermektedir. Ankara BMW servis ihtiyaçlarınız için kolay ulaşım ve otopark imkânı sunuyoruz.',
  },
  {
    question: 'Ankara BMW periyodik bakım fiyatları nasıl belirlenir?',
    answer:
      'BMW periyodik bakım ücretleri aracınızın modeline, kilometresine ve yapılacak işlemlere göre değişir. Ototurkuaz Ankara BMW servis olarak şeffaf fiyatlandırma ile motor yağı, filtre, fren ve genel kontrol paketleri sunuyoruz. Detaylı bilgi için bizi arayabilirsiniz.',
  },
  {
    question: 'Ankara\'da BMW arıza tespiti ve onarım yapıyor musunuz?',
    answer:
      'Evet. Ototurkuaz, Ankara BMW servis alanında en son teknoloji diagnostik cihazlarla motor, şanzıman, elektrik, ABS, klima ve elektronik sistem arıza tespiti yapar. Tespit sonrası onarım ve orijinal yedek parça değişimi aynı gün içinde tamamlanabilir.',
  },
  {
    question: 'MINI Cooper için de Ankara özel servis hizmeti veriyor musunuz?',
    answer:
      'Evet. Ototurkuaz Premium, Ankara MINI Cooper özel servis olarak BMW grubu araçlarda olduğu gibi MINI markasında da periyodik bakım, onarım ve yedek parça hizmeti sunmaktadır.',
  },
];

export const getRouteSeo = (pathname) =>
  ROUTE_SEO[pathname] || DEFAULT_SEO;

/** /service ile / aynı içeriği sunar; duplicate content önlenir */
export const getCanonicalUrl = (pathname) => {
  if (pathname === '/' || pathname === '/service') {
    return SITE_URL;
  }
  const path = pathname.replace(/\/$/, '');
  return `${SITE_URL}${path}`;
};

const businessAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Ottoman Center 1804 Ergazi Mah. Sk.No:6-3',
  addressLocality: 'Yenimahalle',
  addressRegion: 'Ankara',
  postalCode: '06370',
  addressCountry: 'TR',
};

const geoCoordinates = {
  '@type': 'GeoCoordinates',
  latitude: 39.9667,
  longitude: 32.7833,
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': `${SITE_URL}/#autorepair`,
  name: 'Ototurkuaz Premium - Ankara BMW Özel Servis',
  alternateName: [
    'Ototurkuaz BMW Servis',
    'Ototurkuaz Ankara BMW Servisi',
    'Ankara BMW Özel Servis Ototurkuaz',
  ],
  description: DEFAULT_SEO.description,
  url: SITE_URL,
  image: `${SITE_URL}/assets/gallery/logos/logoEmpty.png`,
  logo: `${SITE_URL}/assets/gallery/logos/logoEmpty.png`,
  telephone: ['+905417103605', '+905417103605'],
  email: 'info@ototurkuaz.com.tr',
  address: businessAddress,
  geo: geoCoordinates,
  areaServed: [
    { '@type': 'City', name: 'Ankara' },
    { '@type': 'AdministrativeArea', name: 'Yenimahalle' },
  ],
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: ['https://maps.app.goo.gl/8zmtT3NsuUJoPFFL6'],
  knowsAbout: [
    'Ankara BMW servis',
    'Ankara BMW özel servis',
    'BMW periyodik bakım',
    'BMW arıza tespiti',
    'BMW onarım',
    'BMW yedek parça',
    'MINI Cooper servis',
    'MINI özel servis Ankara',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'BMW Servis Hizmetleri',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'BMW Periyodik Bakım' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'BMW Arıza Tespiti' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'BMW Motor Onarım' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'BMW Yedek Parça' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MINI Cooper Servis' } },
    ],
  },
};

export const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: 'Ototurkuaz BMW Servis Ankara',
  url: SITE_URL,
  description: DEFAULT_SEO.description,
  inLanguage: 'tr-TR',
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/assets/gallery/logos/logoEmpty.png`,
    },
  },
};

export const localBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'Ototurkuaz Premium - Ankara BMW Servis',
  image: `${SITE_URL}/assets/gallery/logos/logoEmpty.png`,
  url: SITE_URL,
  telephone: '+905417103605',
  email: 'info@ototurkuaz.com.tr',
  address: businessAddress,
  geo: geoCoordinates,
  areaServed: 'Ankara',
  priceRange: '$$',
};

export const getStructuredDataList = () => [
  structuredData,
  faqStructuredData,
  websiteStructuredData,
  localBusinessStructuredData,
];
