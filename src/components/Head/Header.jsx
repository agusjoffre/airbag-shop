import React from 'react';

import NavBar from './NavBar';
import HeaderCart from './HeaderCart';
import '../../styles/header.css';

const logoSrc = 'src/assets/icons/logo.png';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logoSrc} alt="Airbag Logo" />
      </div>
      <NavBar />
      <div className="header-signup-login-section">
        <button type="button" className="header-btn">Crear cuenta</button>
        <button type="button" className="header-btn">Iniciar Sesion</button>
      </div>
      <HeaderCart />
    </header>
  );
}

export default Header;
