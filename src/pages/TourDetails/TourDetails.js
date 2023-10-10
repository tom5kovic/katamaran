import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TourDetails.css';
import { toursData } from '../../data/ToursData';
import { GalleryModal } from '../../layout/GalleryModal/GalleryModal';

export const TourDetails = () => {
  const { tourId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selectedTour = toursData.find((tour) => tour.id === parseInt(tourId));

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevImg = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedTour.gallery.length - 1
    );
  };

  const handleNextImg = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < selectedTour.gallery.length - 1 ? prevIndex + 1 : 0
    );
  };

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
        {selectedTour.gallery.map((item, index) => {
          return (
            <img
              key={index}
              onClick={() => openModal(index)}
              src={item}
              className='gallery-img'
            />
          );
        })}
      </div>
      {isModalOpen && (
        <GalleryModal
          imageUrl={selectedTour.gallery[currentImageIndex]}
          onClose={closeModal}
          onNext={handleNextImg}
          onPrev={handlePrevImg}
        />
      )}
    </div>
  );
};
