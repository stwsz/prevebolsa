import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom'; 

function ComoFunciona() {
  document.title = 'PreveBolsa | Como Funciona';

  return (
    <>
      <Header />

      <main>
        Como Funciona
      </main>

      <Footer />
    </>
  );
}

export default ComoFunciona;
