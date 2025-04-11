import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom'; 

function PreverBolsa() {
  document.title = 'PreveBolsa | Prever Bolsa';

  return (
    <>
      <Header />

      <main>
        Prever Bolsa
      </main>

      <Footer />
    </>
  );
}

export default PreverBolsa;
