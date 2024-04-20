import React from 'react';
import { ReactComponent as BestLogo } from '../../assets/best logo.svg';
import { ReactComponent as ITLogo } from '../../assets/logo.svg';
import './header.css';

function Header() {
  return (
    <div className={'header'}>
      <span className={'header__logo'}>
        <BestLogo />
      </span>

      <div className={'header__title'}>ТАБЛИЦЯ ПЕРЕМОЖЦІВ</div>

      <span className={'header__logo'}>
        <ITLogo />
      </span>
    </div>
  );
}

export default Header;
