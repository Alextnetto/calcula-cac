import React from 'react';

import aylaLogo from '../../assets/images/ayla_logo.png'

import './styles.css'

function Header() {
  return (
    <header id='page-header'>
      <img src={aylaLogo} alt="Ayla"/>
    </header>
  )
}

export default Header;