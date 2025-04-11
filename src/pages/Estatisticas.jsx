import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/estatistica.css';

import { Link } from 'react-router-dom'; 

function Estatisticas() {
  document.title = 'PreveBolsa | Estatísticas';

  return (
    <>
      <Header />

      <main id="estatisticas-page">
        <h1>Estatísticas</h1>
        <p className="intro">
          Acompanhe análises e dados históricos usados para as previsões.
        </p>

        <section className="estatisticas-grid">
          <div className="card">
            <h2>Crescimento de Bolsas</h2>
            <p>
              Nos últimos 5 anos, o número de bolsas parciais cresceu 35% em todo o Brasil.
            </p>
          </div>

          <div className="card">
            <h2>Notas de Corte</h2>
            <p>
              A média das notas de corte em cursos de saúde subiu de 680 para 720 em 3 anos.
            </p>
          </div>

          <div className="card">
            <h2>Regiões com Mais Oportunidades</h2>
            <p>
              Sudeste e Nordeste concentram mais de 60% das bolsas disponíveis.
            </p>
          </div>

          <div className="card">
            <h2>Modalidades Mais Populares</h2>
            <p>
              A modalidade EAD representa hoje 48% das bolsas ativas no país.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Estatisticas;
