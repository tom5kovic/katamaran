import React from 'react';
import './ToursScreen.css';
import { toursData } from '../../data/ToursData';

export const ToursScreen = () => {
  return (
    <div className='content'>
      {toursData.map((item, index) => {
        return (
          <div className='image-wrapper' key={item.id} onClick={() => null}>
            <img src={item.image} className='image' alt={index} />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};
