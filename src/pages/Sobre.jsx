import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom'; 

function Sobre() {
  document.title = 'PreveBolsa | Sobre';

  return (
    <>
      <Header />

      <main>
        Sobre
      </main>

      <Footer />
    </>
  );
}

export default Sobre;
