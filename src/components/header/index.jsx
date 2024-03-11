import { useState } from "react";
import data from "../../config/navigation.json";
import Desktop from "./desktop";
import Mobile from "./mobile";
import "./desktop.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { links } = data;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("menu-open");
      return;
    }
    document.body.classList.remove("menu-open");
  };
  return (
    <header className="w-screen vidro top-0 fixed z-10 bg-white bg-opacity-20 border-b-2 shadow-sm">
      <div className="container lg:py-2 items-center flex justify-between xl:gap-x-6 gap-x-2 lg:p-0 p-4">
        <Desktop isOpened={isMenuOpen} action={toggleMenu} links={links} />
        <Mobile isOpened={isMenuOpen} links={links} />
      </div>
    </header>
  );
};

export default Header;
