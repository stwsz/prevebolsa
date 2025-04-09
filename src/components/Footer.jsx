import React from 'react';

import LogoPrevebolsaWhite from '../assets/logos/LogoPrevebolsaWhite.webp';
import GithubIcon from '../assets/icons/githubIcon.webp';
import InstagramIcon from '../assets/icons/instagramIcon.webp';
import LinkedinIcon from '../assets/icons/linkedinIcon.webp';

const footer = () => {
    const currentYear = new Date().getFullYear();

    return (     
      <footer>
        <div id='footer-container'>
            <div>
                <img src={LogoPrevebolsaWhite} alt="Logo PreveBolsa" />

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
                <a href="https://github.com/stwsz/prevebolsa" target='blank'>
                    <img src={GithubIcon} alt="Ir para GitHub do projeto" />
                </a>

                <a href="https://www.instagram.com/unit_pe/" target='blank'>
                    <img src={InstagramIcon} alt="Ir para o instragram da UNIT" />
                </a>

                <a href="https://www.linkedin.com/school/unit-br/posts/?feedView=all" target='blank'>
                    <img src={LinkedinIcon} alt="Ir para o Linkedin da UNIT" />
                </a>
            </div>
        </div>

        <p>&copy; PreveBolsa {currentYear} - Todos os direitos reservados.</p>            
      </footer>
  );
};

export default footer;
