import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SlideBanner = () => {
  const getImagePath = (number) => {
    return `/images/carousel/${number}.png`; // Caminho para a pasta public/images/clientes
  };
  // Array com números de 1 a 30
  const imageNumbers = Array.from({ length: 6 }, (_, i) => i + 1);

  const swiperSettings = {
    effect: "slide",
    grabCursor: true,
    centeredSlides: true,
    modules: [Autoplay],
    className: "mySwiper w-full",
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 10000, // Defina uma velocidade alta para que pareça contínuo
    loop: true, // Ativa o looping infinito
  };
  return (
    <section className="mt-[97px] lg:mt-[105px]">
      <Swiper {...swiperSettings} className="mySwiper">
        {imageNumbers.map((number) => (
          <SwiperSlide key={number}>
            <img
              src={getImagePath(number)}
              alt={`Slide ${number}`}
              className=" w-full h-[600px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SlideBanner;
