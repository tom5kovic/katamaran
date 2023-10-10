import React from 'react';
import './ToursScreen.css';
import { toursData } from '../../data/ToursData';
import { LocationPin } from '../../components/icons/LocationPin';
import { Clock } from '../../components/icons/Clock';
import { DolarSign } from '../../components/icons/DolarSign';
import { People } from '../../components/icons/People';

export const ToursScreen = () => {
  return (
    <div className='content'>
      {toursData.map((item, index) => {
        return (
          <div className='image-wrapper' key={item.id} onClick={() => null}>
            <img src={item.image} className='image' alt={index} />
            <div className='info-container'>
              <div className='icon-text'>
                <LocationPin />
                <p>{item.location}</p>
              </div>
              <div className='icon-text'>
                <Clock />
                <p>{item.duration}</p>
              </div>
              <div className='icon-text'>
                <DolarSign />
                <p>{item.price}</p>
              </div>
              <div className='icon-text'>
                <People />
                <p>{item.numberOfPeopple}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
