import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom'; 

function Estatisticas() {
  document.title = 'PreveBolsa | Estatísticas';

  return (
    <>
      <Header />

      <main>
        Estatísticas
      </main>

      <Footer />
    </>
  );
}

export default Estatisticas;
