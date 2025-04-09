import React from 'react';

import LogoPrevebolsaWhite from '../assets/logos/LogoPrevebolsaWhite.webp';
import GithubIcon from '../assets/icons/githubIcon.webp';

const footer = () => {
    const currentYear = new Date().getFullYear();

    return (     
      <footer>
        <div id='footer-container'>
            <div>
                <img src={LogoPrevebolsaWhite} alt="" />

                <ul>
                    <li>
                        <a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem" target='blank'>ENEM</a>
                    </li>
                    <li>
                        <a href="https://acessounico.mec.gov.br/prouni" target='blank'>PROUNI</a>
                    </li>
                    <li>
                        <a href="https://www.gov.br/fnde/pt-br/acesso-a-informacao/acoes-e-programas/financiamento/fies" target='blank'>FIES</a>
                    </li>
                </ul> 
            </div>
  
            <div id='social-media'>
                <a href="">
                    <img src={GithubIcon} alt="" />
                </a>

                <a href="">
                    <img src={GithubIcon} alt="" />
                </a>

                <a href="">
                    <img src={GithubIcon} alt="" />
                </a>
            </div>
        </div>

        <p>&copy; PreveBolsa {currentYear} - Todos os direitos reservados.</p>            
      </footer>
  );
};

export default footer;
