import { Link, Link as ScrollLink } from "react-scroll";
import logo from "../../../public/images/logo-2.png";
import { FaWhatsapp } from "react-icons/fa";
// import logoBlack from "../../../public/images/logo-preto.png";

import "./desktop.css";

const Desktop = ({ isOpened, action, links }) => {
  return (
    <>
      <div className="flex justify-between w-full lg:w-auto">
        <a
          className={`relative z-20 flex gap-4 items-center font-bold ${
            isOpened ? "text-white" : "text-black"
          }`}
          href="/"
        >
          <img
            className="xl:w-[90px] md:w-[95px] lg:flex hidden"
            src={logo}
            alt="Logo Header"
          />
          <img
            className={`w-[65px] lg:hidden flex-initial lg:absolute ${
              isOpened ? "rotate-360" : "rotate-0"
            }`}
            src={logo}
            alt="Logo Header"
          />
        </a>

        <button
          className={`menu-toggle bg-white focus:outline-none flex lg:hidden ${
            isOpened && "menu-toggle-active"
          }`}
          onClick={action}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className="hidden lg:flex items-center justify-center">
        <ul className="flex gap-3 items-center lg:gap-6">
          {links.map((link, index) => (
            <li className="text-md" key={index}>
              {/* Link de rolagem suave */}
              <ScrollLink
                className="cursor-pointer uppercase border px-5 py-2 rounded-lg text-white hover:bg-white hover:text-redR2R duration-300 ease-out"
                to={link.url.substring(1)}
                spy={true}
                smooth={true}
                duration={300}
                offset={-98}
              >
                {link.text}
              </ScrollLink>
            </li>
          ))}
          <div className="text-md">
            <a
              href="https://api.whatsapp.com/send/?phone=5511940131299&text=Tenho+interesse+em+fazer+um+or%C3%A7amento&type=phone_number&app_absent=0"
              target="_blank"
              className="cursor-pointer uppercase border px-5 py-2 rounded-lg text-white hover:bg-white hover:text-redR2R duration-300 ease-out"
            >
              Orçamento
            </a>
          </div>
          <a
            href="https://wa.me/5511940131299?text=Tenho%20interesse%20em%20fazer%20um%20orçamento"
            target="_blank"
          >
            <FaWhatsapp
              size={32}
              className="text-white hover:scale-110 duration-300 ease-out cursor-pointer"
            />
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Desktop;
