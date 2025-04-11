import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

function ComoFunciona() {
  document.title = 'PreveBolsa | Como Funciona';

  return (
    <>
      <Header />

      <main id='como-funciona'>
        <section>
          <h1>Base de Dados Utilizada</h1>

          <div>
            <p>A previsão é feita com base nos dados da edição de 2017 do ProUni. A análise considera:</p>

            <ul>
              <li style={{fontWeight: 'bold'}}>Cursos oferecidos</li>
              <li style={{fontWeight: 'bold'}}>Notas de corte por curso, turno, modalidade e instituição</li>
              <li style={{fontWeight: 'bold'}}>Critérios de cotas e tipo de bolsa</li>
              <li style={{fontWeight: 'bold'}}>Tendências e padrões observados nos dados</li>
            </ul>
          </div>
        </section>

        <hr />

        <section>
          <h2>Critérios Considerados pelo ProUni</h2>

          <div>
            <ul>
              Renda Familiar

              <li>Bolsa Integral: até 1,5 salário mínimo por pessoa</li>
              <li>Bolsa Parcial (50%): até 3 salários mínimos por pessoa</li>
            </ul>

            <ul>
              Cotas

              <li>Reserva de vagas para candidatos pretos, pardos, indígenas e pessoas com deficiência</li>
            </ul>

            <ul>
              Escola de Origem

              <li>Ensino médio completo em escola pública</li>
              <li>Ou em escola particular com bolsa integral</li>
            </ul>

            <ul>
              Tipo de bolsa

              <li>Integral (100%) ou Parcial (50%), dependendo da renda familiar</li>
            </ul>
          </div>
        </section>

        <hr />

        <section>
          <h2>As Notas de Corte Variam</h2>

          <div>
            <p>As notas de corte do ProUni mudam a cada edição. Isso acontece por causa de:</p>

            <ul>
              <li style={{fontWeight: 'bold'}}>Quantidade de bolsas disponíveis</li>
              <li style={{fontWeight: 'bold'}}>Número de candidatos inscritos</li>
              <li style={{fontWeight: 'bold'}}>Notas dos concorrentes</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ComoFunciona;
