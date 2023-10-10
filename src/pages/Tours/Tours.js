import React from 'react';
import './Tours.css';
import { ToursData } from '../../data/ToursData';
import { LocationPin } from '../../assets/icons/LocationPin';
import { Clock } from '../../assets/icons/Clock';
import { DolarSign } from '../../assets/icons/DolarSign';
import { People } from '../../assets/icons/People';
import { useNavigate } from 'react-router-dom';

export const Tours = () => {
  const navigate = useNavigate();
  const toursData = ToursData();

  const handleTourClick = (tourId) => {
    navigate(`/tour-details/${tourId}`);
  };

  return (
    <div className='content'>
      {toursData.map((item, index) => {
        return (
          <div
            className='image-wrapper'
            key={item.id}
            onClick={() => handleTourClick(item.id)}
          >
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
