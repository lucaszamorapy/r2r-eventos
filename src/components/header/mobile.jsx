import { Link } from "react-scroll";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";

const Mobile = ({ isOpened, links, toggleMenu }) => {
  useEffect(() => {
    const updateURL = () => {
      // Check if the page is reloaded (not a navigation within the page)
      if (performance.navigation.type === 1) {
        // Set the default URL to "home" and reload the page
        window.location.replace("/");
      }
    };

    // Check and update URL on component mount
    updateURL();
  }, []);
  return (
    <nav className={`menu bg-redR2R z-10 ${isOpened && "menu-active"}`}>
      <div className="w-full">
        <ul className="mt-24 pt-2 flex flex-col gap-5 px-6 border-t-2 border-white lg:border-none">
          {links.map((link) => (
            <li key={link.url}>
              <Link
                to={link.url.substring(1)} // Remove o "#" do href
                spy={true}
                smooth={true}
                duration={500}
                className="link-list text-white uppercase text-sm font-medium cursor-pointer"
                onClick={(e) => {
                  if (link.url.startsWith("#")) {
                    e.preventDefault();

                    // Extract the section ID without the "#" symbol
                    const sectionId = link.url.substring(1);

                    // Update the URL without triggering a page reload
                    window.history.replaceState({}, "", `#${sectionId}`);
                  }

                  toggleMenu(); // Adiciona o seu onClick isOpened aqui
                }}
              >
                {link.text}
              </Link>
            </li>
          ))}
          <div className="text-md">
            <a
              href="https://api.whatsapp.com/send/?phone=5511940131299&text=Tenho+interesse+em+fazer+um+or%C3%A7amento&type=phone_number&app_absent=0"
              target="_blank"
              className="link-list text-white uppercase text-sm font-medium"
            >
              Orçamento
            </a>
          </div>
        </ul>

        <ul className="flex justify-center gap-x-10 px-4  py-4">
          <li>
            <a
              href="https://www.facebook.com/r2reventos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={32} color="#FFFFFF" />
            </a>
          </li>
          <li>
            <a
              href="https://web.whatsapp.com/send?phone=5511940131299"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={32} color="#FFFFFF" />
            </a>
          </li>
          <li>
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
      </div>
    </nav>
  );
};

export default Mobile;
