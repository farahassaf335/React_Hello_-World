import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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
  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.url}
              alt={img.alt}
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
