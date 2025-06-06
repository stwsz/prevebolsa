import { Link } from 'react-router-dom'; 

import Header from './components/Header';
import Footer from './components/Footer';

import StudentImage from './../src/assets/images/student.webp'
import ProuniImage from './../src/assets/images/prouni.webp'
import FormularioIcon from './../src/assets/icons/formulario.webp'
import UniversidadeIcon from './../src/assets/icons/universidade.webp'
import LupaIcon from './../src/assets/icons/lupa.webp';

import { useLanguage } from './hooks/useLanguage';

function App() {
  document.title = 'PreveBolsa | Bem-vindo à Página Inicial';

  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main id='home-page'>
        <section id='intro'>
          <div id='div-intro'>
            <h1>{t('mainPageText1')}</h1>

            <p>{t('mainPageText2')}</p>

            <div id='div-intro-links'>
              <Link to='/prever-bolsa'>
                {t('mainPageText3')}
              </Link>

              <Link to='/como-funciona'>
                {t('mainPageText4')}
              </Link>
            </div>
          </div>

          <img src={StudentImage} alt={t('mainPageAltText1')} />
        </section>

        <section id='info'>
          <div id='div-info'>
            <img src={ProuniImage} alt={'mainPageAltText2'} />

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
