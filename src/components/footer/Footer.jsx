import React from "react";
import logo from "../../../public/images/logo-2.png";
import data from "../../config/data.json";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="mt-10 bg-brownR2R px-5 lg:mt-20 lg:px-0">
      <div className="container">
        <div className="flex flex-col justify-between flex-wrap py-10 lg:flex-nowrap lg:flex-row">
          <div className="flex justify-center items-center">
            <a href="/">
              <img src={logo} alt="Logo" className="w-[90px] lg:w-[140px]" />
            </a>
          </div>
          <div className="flex mt-5 gap-5 lg:gap-20 lg:mt-0">
            <div className="flex flex-col">
              <h1 className="text-md uppercase font-bold text-white mb-2 lg:text-xl">
                Serviços
              </h1>
              <ul className="flex justify-center flex-col">
                {data["footerInfo"].map((info, index) => (
                  <li
                    className="text-sm text-white gap-2 lg:text-lg"
                    id={index}
                  >
                    {info.servicesText}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="text-md uppercase font-bold text-white mb-2 lg:text-xl">
                Parceiros
              </h1>
              <ul className="flex justify-center flex-col">
                {data["footerInfo"].map((info, index) => (
                  <li
                    className="text-sm text-white gap-2 lg:text-lg"
                    id={index}
                  >
                    {info.parceirosText}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* second footer */}
        <div className="flex flex-col justify-center text-sm items-center gap-5 border-t-2 border-white lg:justify-between lg:flex-row lg:gap-0">
          <ul className="flex gap-x-8 px-4 py-4">
            <li className="hover:scale-110 duration-300 ease-out">
              <a
                href="https://www.facebook.com/r2reventos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={32} color="#FFFFFF" />
              </a>
            </li>
            <li className="hover:scale-110 duration-300 ease-out">
              <a
                href="https://web.whatsapp.com/send?phone=5511940131299"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={32} color="#FFFFFF" />
              </a>
            </li>
            <li className="hover:scale-110 duration-300 ease-out">
              <a
                href="https://www.instagram.com/r2reventos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={32} color="#FFFFFF" />
              </a>
            </li>
            <li className="hover:scale-110 duration-300 ease-out">
              <a
                href="mailto:contato@r2reventos.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineEmail size={32} color="#FFFFFF" />
              </a>
            </li>
          </ul>
          <p className="text-white flex items-center">
            2024 © R2R Eventos. All Rights Reserved.
          </p>
          <p className="text-white flex items-center">
            Desenvolvido por
            <span className="text-white flex items-center ml-1">
              <a href=""> Lucas Zamora</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
