import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='My Logo' className='logo' />
      <nav className='nav'>
        <a href=''>Tab 1</a>
        <a href=''>Tab 2</a>
        <a href=''>Tab 3</a>
      </nav>
    </header>
  );
};
