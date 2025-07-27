import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  '/image/pic3.jpg',
  '/image/pic1.jpg',
  '/image/pic2.jpg',
];

function Carousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="carousel-swiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="carousel-wrapper">
            <img src={src} alt={`Slide ${index}`} className="carousel-img" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
