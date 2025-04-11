import React from 'react';

import { Link } from 'react-router-dom'; 

import Header from './components/Header';
import Footer from './components/Footer';

import StudentImage from './../src/assets/images/student.webp'
import ProuniImage from './../src/assets/images/prouni.webp'
import FormularioIcon from './../src/assets/icons/formulario.webp'
import UniversidadeIcon from './../src/assets/icons/universidade.webp'
import LupaIcon from './../src/assets/icons/lupa.webp';

function App() {
  document.title = 'PreveBolsa | Bem-vindo à Página Inicial';

  return (
    <>
      <Header />
      <main id='home-page'>
        <section id='intro'>
          <div id='div-intro'>
            <h1>Bem-vindo ao PreveBolsa!</h1>

            <p>Descubra suas chances reais de conquistar uma bolsa de estudos com base em dados históricos, análises inteligentes e informações que refletem a realidade do processo seletivo.</p>

            <div id='div-intro-links'>
              <Link to='/PreverBolsa'>
                Prever bolsa
              </Link>

              <Link to='/ComoFunciona'>
                Como funciona?
              </Link>
            </div>
          </div>

          <img src={StudentImage} alt="Ilustração de estudante" />
        </section>

        <section id='info'>
          <div id='div-info'>
            <img src={ProuniImage} alt="Logo do PROUNI" />

            <div>
              <p>O PreveBolsa é uma ferramenta gratuita que analisa informações do ProUni 2017 para te ajudar a prever suas chances de conseguir uma bolsa, seja integral ou parcial.
              Com base nos dados que você informa — como nota do Enem, curso desejado, tipo de bolsa e modalidade — o sistema estima suas possibilidades e te dá uma visão mais clara do cenário.</p>

              <span>Importante: a previsão é apenas uma estimativa baseada em dados anteriores. Ela serve como apoio para sua tomada de decisão, mas não garante o resultado final do processo seletivo.</span>
            </div>
          </div>
        </section>

        <section id='steps'>
          <div id='div-steps'>
            <div className='steps-item'>
              <img src={FormularioIcon} alt="" />

              <p>1. Preencha seus dados</p>
            </div>

            <div className='steps-item'>
              <img src={UniversidadeIcon} alt="" />

              <p>2. Escolha sua instituição e curso</p>
            </div>

            <div className='steps-item'>
              <img src={LupaIcon} alt="" />

              <p>3. Clique em "Prever Bolsa"</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
