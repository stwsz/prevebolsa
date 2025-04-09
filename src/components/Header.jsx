import React from 'react';

import LogoPrevebolsa from './../assets/logos/LogoPrevebolsa.webp';

const Header = () => {
  return (
    <header>
        <img src={LogoPrevebolsa} alt="Logo PreveBolsa" />

        <ul>
            <li>Sobre</li>
            <li>Como Funciona</li>
            <li>Prever Bolsa</li>
            <li>Estatísticas</li>
        </ul>
    </header>
  );
};

export default Header;
