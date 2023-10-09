import React, { useState } from 'react';
import './Banner.css';
import bannerImg from '../../assets/images/banner.jpg';
import { HamburgerMenu } from '../../components/HamburgerMenu/HamburgerMenu';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeLanguageAction } from '../../store/language/actions';
import { useTranslation } from 'react-i18next';

export const Banner = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLanguageChange = (language) => {
    dispatch(changeLanguageAction(language));
  };

  const currentPage = location.pathname;

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

  const bannerHeight = currentPage === '/' ? '70vh' : '20vh';

  return (
    <header className='banner' style={{ height: bannerHeight }}>
      <img src={bannerImg} alt='Banner' className='logo' />
      <div className='banner-links'>
        <div className='links-wrapper'>
          <a href='#' onClick={scrollToBottom}>
            {t('contact')}
          </a>
          <a href='/tours'>{t('tours')}</a>
          <a href=''>{t('gallery')}</a>
        </div>
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('sr')}>Serbian</button>
        <div className='hamburger-menu-wrapper'>
          <HamburgerMenu onClick={toggleMobileMenu} />
        </div>
        {isMobileMenuOpen && (
          <div className='links-wrapper-mobile'>
            <a href='#' onClick={scrollToBottom}>
              {t('contact')}
            </a>
            <a href='/tours'>{t('tours')}</a>
            <a href=''>{t('gallery')}</a>
          </div>
        )}
      </div>
    </header>
  );
};
