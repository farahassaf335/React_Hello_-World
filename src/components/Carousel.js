import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Carousel.css';

const images = [
  '/image/pic3.jpg',
  '/image/pic1.jpg',
  '/image/pic2.jpg',
];

function Carousel() {
  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-image-wrapper">
              <img src={src} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;