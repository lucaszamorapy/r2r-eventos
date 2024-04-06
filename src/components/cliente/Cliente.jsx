import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const Cliente = () => {
  // Função para gerar o caminho da imagem com base no número
  const getImagePath = (number) => {
    return `/images/clientes/${number}.png`; // Caminho para a pasta public/images/clientes
  };

  // Array com números de 1 a 30
  const imageNumbers = Array.from({ length: 5 }, (_, i) => i + 1);

  const swiperSettings = {
    effect: "slide",
    grabCursor: true,
    centeredSlides: true,
    modules: [Pagination, Autoplay],
    className: "mySwiper w-full mt-6",
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 2000, // Defina uma velocidade alta para que pareça contínuo
    loop: true, // Ativa o looping infinito
  };

  return (
    <section
      id="parceiros"
      className="mt-10 px-5 lg:mt-20 lg:px-0"
      data-aos="fade-up"
    >
      <div className="container">
        <h1 className="text-4xl uppercase font-semibold text-center text-brownR2R ">
          Aprovado por <span className="text-redR2R">grandes empresas!</span>
        </h1>
        <Swiper {...swiperSettings} className="mt-20">
          {imageNumbers.map((number) => (
            <SwiperSlide
              key={number}
              className="flex justify-center items-center"
            >
              <img
                src={getImagePath(number)}
                alt={`Slide ${number}`}
                className="w-[200px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Cliente;
