import React from 'react';
import stackLineLogo from 'resources/stackline_logo.png';
import './Header.css';

export const Header = () => {
  return (
    <header className='header-container'>
      <img src={stackLineLogo} alt='Stackline Logo' className='header-logo' />
    </header>
  );
};

export default Header;
