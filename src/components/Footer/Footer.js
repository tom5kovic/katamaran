import React from 'react';
import './Footer.css';
import instaLogo from '../../assets/images/instagram.png';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <a href='https://kayakhouse.rs/'>office@kayakhouse.rs</a>
      </div>
      <div>
        <img src={instaLogo} alt='Instagram Logo' className='insta-logo' />
        <a href='https://www.instagram.com/pedaleros_kts/'>pedaleros_kts</a>
      </div>
      <div>
        <img src={instaLogo} alt='Instagram Logo' className='insta-logo' />
        <a href='https://www.instagram.com/katamaran_ns/'>katamaran_ns</a>
      </div>
    </footer>
  );
};
