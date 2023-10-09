import React from 'react';
import './ToursScreen.css';
import { toursData } from '../../data/ToursData';

export const ToursScreen = () => {
  return (
    <div className='content'>
      {toursData.map((item, index) => {
        return (
          <div className='image-wrapper' key={index}>
            <img src={item.image} className='image' alt={index} />
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};
