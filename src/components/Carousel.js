

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// const Carousel = () => {

//   const slides = [
//     '/image/pic33.jpg',
//     '/image/pic11.jpg',
//     '/image/pic22.jpg',
//   ];

//   return (
//     <div className="carousel-container" style={{ position: 'relative', width: '100%', height: '360px' }}>
      
//       {/* Text on Carousel */}
//       <div
//         className="carousel-text"
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '5%',
//           transform: 'translateY(-50%)',
//           zIndex: 10,
//           color: 'white',
//           textShadow: '1px 1px 5px black',
//         }}
//       >
//         <h1 className="hero-title" style={{ fontSize: '30px', margin: '0 0 10px 0', fontWeight: 'bold' }}>
//           Trending Accessories<br />
//           <span style={{ fontSize: '20px', fontWeight: 'bold' }}>MODERN SUNGLASSES</span>
//         </h1>
//         <p className="hero-sub" style={{ fontSize: '18px', margin: 0 }}>
//           Starting at $15.00
//         </p>
//         <button className="btn btn-primary">Shop Now</button>
//       </div>

      
//       <Swiper className="carousel-swiper">
//         {slides.map((src, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={src}
//               alt={`slide-${index}`}
//               style={{ width: '100%', height: '360px', objectFit: 'cover' }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;

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
          <span className="custom-carousel-subtitle">MODERN SUNGLASSES</span>
        </h1>
        <p className="custom-carousel-text">Starting at $15.00</p>
        <button className="custom-carousel-btn">Shop Now</button>
      </div>

      <Swiper 
        className="custom-carousel-swiper"
        modules={[Autoplay]}
        allowTouchMove={false} // تعطيل السحب باللمس
        noSwiping={true} // تعطيل السحب بالكامل
        simulateTouch={false} // تعطيل محاكاة اللمس
        autoplay={{
          delay: 3000, // تغيير الشريحة كل 3 ثواني (اختياري)
          disableOnInteraction: false // الاستمرار حتى مع التفاعل
        }}
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="custom-carousel-image"
              draggable="false" // لمنع السحب في بعض المتصفحات
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;