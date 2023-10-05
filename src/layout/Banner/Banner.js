import React, { useState } from 'react';
import './Banner.css';
import bannerImg from '../../assets/images/banner.jpg';
import { HamburgerMenu } from '../../components/HamburgerMenu/HamburgerMenu';

export const Banner = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className='banner'>
      <img src={bannerImg} alt='Banner' className='logo' />
      <div className='banner-links'>
        <div className='links-wrapper'>
          <a href='#' onClick={scrollToBottom}>
            Kontakt
          </a>
          <a href='/tours'>Ture</a>
          <a href=''>Galerija</a>
        </div>
        <div className='hamburger-menu-wrapper'>
          <HamburgerMenu onClick={toggleMobileMenu} />
        </div>
        {isMobileMenuOpen && (
          <div className='links-wrapper-mobile'>
            <a href='#' onClick={scrollToBottom}>
              Kontakt
            </a>
            <a href='/tours'>Ture</a>
            <a href=''>Galerija</a>
          </div>
        )}
      </div>
    </header>
  );
};
