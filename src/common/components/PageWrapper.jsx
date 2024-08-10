import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageWrapper = ({ children }) => {
  const location = useLocation();

  // Reset scroll position on component mount and navigation changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className=' mx-auto px-2 bg-background animate-fade-in-slow rounded-t-3xl'>
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
