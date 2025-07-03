import React, { useState } from 'react';
import './Carousel.css';

const images = [
  {
    url: '/image/photo1.jpg',
    alt: 'Hat',
  },
  {
    url: '/image/photo2.jpg',
    alt: 'Modern smartphone offers',
  },
  {
    url: '/image/photo3.jpg',
    alt: 'Accessories and deals',
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-button prev">&#8592;</button>
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="carousel-image"
      />
      <button onClick={nextSlide} className="carousel-button next">&#8594;</button>
    </div>
  );
}

export default Carousel;
