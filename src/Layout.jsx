import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-4">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
