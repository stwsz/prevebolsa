import { Link } from 'react-router-dom'; 

import LogoPrevebolsa from './../assets/logos/LogoPrevebolsa.webp';

import { useLanguage } from '../hooks/useLanguage';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header>
        <Link to='/'>
          <img src={LogoPrevebolsa} alt={t('headerAltText1')} />
        </Link>
        
        <ul>
            <li>
              <Link to='/sobre'>
                {t('headerText1')}
              </Link>
            </li>

            <li>
              <Link to='/como-funciona'>
                {t('headerText2')}
              </Link>
            </li>

            <li>
              <Link to='/prever-bolsa'>
                {t('headerText3')}
              </Link>
            </li>

            <li>
              <Link to='/estatisticas'>
                {t('headerText4')}
              </Link> 
            </li>
        </ul>
    </header>
  );
};

export default Header;
