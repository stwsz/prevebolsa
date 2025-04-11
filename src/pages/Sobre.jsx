import React from 'react';

import NotaIcon from './../assets/icons/nota.webp';
import SinalIcon from './../assets/icons/sinal.webp';
import CandidatoIcon from './../assets/icons/candidato.webp'

import Header from '../components/Header';
import Footer from '../components/Footer';

function Sobre() {
  document.title = 'PreveBolsa | Sobre';

  return (
    <>
      <Header />

      <main id='sobre'>
        <section id='sobre-intro'>
          <h1>O que é o PreveBolsa?</h1>

          <div id='sobre-intro-text'>
            <p>O <span>PreveBolsa</span> é uma ferramenta que ajuda estudantes a prever suas chances de conseguir uma bolsa de estudos pelo ProUni, com base em dados da edição de 2017 do programa.</p>
          
            <p>
            Nosso objetivo é fornecer uma estimativa que auxilie os candidatos a tomar decisões mais embasadas ao escolher suas opções de curso e instituição.
            </p>
          </div>
        </section>

        <hr />

        <section id='como-funciona'>
          <h2>Como funciona a previsão?</h2>

          <div>
            <p>A previsão de notas de corte é feita com base em dados públicos do ProUni 2017. Utilizamos esses dados para analisar:</p>

            <ul>
              <li>
                <img src={NotaIcon} alt="Ícone de nota" />

                <p>Notas mínimas necessárias por curso e instituição</p>
              </li>

              <li>
                <img src={SinalIcon} alt="Ícone de variação" />

                <p>Tendências de variação ao longo dos anos</p>
              </li>

              <li>
                <img src={CandidatoIcon} alt="Ícone de candidatos" />

                <p>Perfil dos candidatos</p>
              </li>
            </ul>
          </div>
        </section>

        <hr />

        <section id='confiar'>
          <h2>Por que confiar no PreveBolsa?</h2>
          
          <p>Porque acreditamos em transparência, dados e orientação inteligente. Criamos essa ferramenta para facilitar a sua jornada rumo ao ensino superior, com informação e apoio.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Sobre;
