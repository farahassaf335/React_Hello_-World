import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Carousel = () => {
  const slides = [
    '/image/pic33.jpg',
    '/image/pic11.jpg',
    '/image/pic22.jpg',
  ];

  return (
    <div className="custom-carousel">
      <div className="custom-carousel-content">
        <h1 className="custom-carousel-title">
          Trending Accessories<br />
          <span className="custom-carousel-subtitle">MODERN<br></br> SUNGLASSES</span>
        </h1>
        <p className="custom-carousel-text">Starting at <strong>$15</strong>.00</p>
        <button className="custom-carousel-btn">Shop Now</button>
      </div>

      <Swiper 
        className="custom-carousel-swiper"
        modules={[Autoplay]}
        allowTouchMove={false}
        noSwiping={true} 
        simulateTouch={false} 
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false
        }}
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="custom-carousel-image"
              draggable="false" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;