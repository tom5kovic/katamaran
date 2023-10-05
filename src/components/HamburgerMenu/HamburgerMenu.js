import React from 'react';
import './HamburgerMenu.css';

export const HamburgerMenu = ({ onClick }) => {
  return (
    <button className='hamburger-menu' onClick={onClick}>
      <div />
      <div />
      <div />
    </button>
  );
};
