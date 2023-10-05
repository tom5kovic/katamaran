import React from 'react';
import './Banner.css';
import bannerImg from '../../assets/images/banner.jpg';

export const Banner = () => {
  return (
    <header className='banner'>
      <img src={bannerImg} alt='Banner' className='logo' />
      <div className='banner-links'>
        <a href=''>Kontakt</a>
        <a href=''>Ture</a>
        <a href=''>Galerija</a>
      </div>
    </header>
  );
};
