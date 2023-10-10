import React from 'react';
import './GalleryModal.css';
import { LeftArrow } from '../../assets/icons/LeftArrow';
import { RightArrow } from '../../assets/icons/RightArrow';

export const GalleryModal = ({ imageUrl, onClose, onPrev, onNext }) => {
  return (
    <div className='gallery-modal'>
      <button onClick={onPrev} className='arrow-button'>
        <LeftArrow />
      </button>
      <img src={imageUrl} alt='Large Image' className='image' />

      <button onClick={onNext} className='arrow-button'>
        <RightArrow />
      </button>
      <div className='overlay' onClick={onClose} />
    </div>
  );
};
