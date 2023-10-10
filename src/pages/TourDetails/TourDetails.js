import React from 'react';
import { useParams } from 'react-router-dom';
import './TourDetails.css';
import { toursData } from '../../data/ToursData';

export const TourDetails = () => {
  const { tourId } = useParams();

  const selectedTour = toursData.find((tour) => tour.id === parseInt(tourId));

  if (!selectedTour) {
    return <div>Tour not found</div>;
  }

  return (
    <div>
      <h1 className='title'>{selectedTour.name}</h1>
      <div className='image-and-text'>
        <img src={selectedTour.image} alt='' />
        <p>{selectedTour.description}</p>
      </div>
      <h2 className='more-desc'>{selectedTour.descAboveGallery}</h2>
      <div className='gallery-container'>
        {selectedTour.gallery.map((item) => {
          return <img src={item} className='gallery-img' />;
        })}
      </div>
    </div>
  );
};
