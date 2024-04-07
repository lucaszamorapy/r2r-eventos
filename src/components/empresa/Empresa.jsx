import React from "react";
import mapa from "../../../public/images/localizacao.png";

const Empresa = () => {
  return (
    <section id="empresa" className="mt-10 px-5 lg:mt-20 lg:px-0">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2  lg:gap-20">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl uppercase font-semibold text-redR2R200">
              Quem somos
            </h1>
            <p className="mt-10 text-justify lg:text-start">
              R2R Eventos é uma empresa especializada em iluminação profissional
              para eventos. Nosso objetivo é proporcionar soluções de excelência
              para eventos corporativos, shows, feiras e tendas, buscando não
              apenas atender, mas superar as expectativas dos nossos clientes.
              <br />
              <br />
              Nosso compromisso é fornecer suporte material, técnico e logístico
              capaz de transformar as ideias mais brilhantes e futuristas em
              realidade visual para o seu evento.
            </p>
          </div>
          <img
            src={mapa}
            alt="Mapa"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Empresa;
