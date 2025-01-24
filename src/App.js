import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './common/components/Header';
import { Footer } from './common/components/Footer';
import { Whatsapp } from './common/components/Whatsapp';
import PageWrapper from './common/components/PageWrapper';
import Loading from './common/ui/Loading';
// Import components using lazy
const HomePage = lazy(() => import('./pages/HomePage'));
const About = lazy(() => import('./common/components/About'));
const Contact = lazy(() => import('./common/components/Contact'));
const RoomsPage = lazy(() => import('./common/components/RoomsPage'));
const RoomDetail = lazy(() => import('./common/components/RoomDetail'));
const Privileges = lazy(() => import('./common/components/Privileges'));
const GalleryPage = lazy(() => import('./common/components/GalleryPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const DetailingPage = lazy(() => import('./pages/DetailingPage'))
const DealerPage = lazy(() => import('./pages/DealerPage'))
const StudioPage = lazy(() => import('./pages/StudioPage'))


function App() {
  return (
    <Router>
      <Header />
      <PageWrapper>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route exact path="/" element={<ServicePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/roomspage" element={<RoomsPage />} />
            <Route path="/roomdetail" element={<RoomDetail />} />
            <Route path="/privileges" element={<Privileges />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/dealer" element={<DealerPage />} />
            <Route path="/detailing" element={<DetailingPage />} />

          </Routes>
        </Suspense>
      </PageWrapper>
      <Footer />
      <Whatsapp />
    </Router>
  );
}

export default App;
