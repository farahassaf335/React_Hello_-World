import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import photo1 from '/image/photo1.jpg';
import photo2 from '/image/photo2.jpg';
import photo3 from '/image/photo3.jpg';

const images = [
  {
    url: photo1,
    alt: 'Hat',
  },
  {
    url: photo2,
    alt: 'Modern smartphone offers',
  },
  {
    url: photo3,
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
