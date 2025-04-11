import React from 'react';

import { Link } from 'react-router-dom'; 

import LogoPrevebolsa from './../assets/logos/LogoPrevebolsa.webp';

const Header = () => {
  return (
    <header>
        <Link to='/'>
          <img src={LogoPrevebolsa} alt="Logo PreveBolsa" />
        </Link>
        
        <ul>
            <li>
              <Link to='/sobre'>
                Sobre
              </Link>
            </li>

            <li>
              <Link to='/como-funciona'>
                Como Funciona
              </Link>
            </li>

            <li>
              <Link to='/prever-bolsa'>
                Prever Bolsa
              </Link>
            </li>

            <li>
              <Link to='/estatisticas'>
                Estatísticas
              </Link> 
            </li>
        </ul>
    </header>
  );
};

export default Header;
