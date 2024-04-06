import { useEffect } from "react";
import Cliente from "../components/cliente/Cliente";
import Contato from "../components/contato/Contato";
import Empresa from "../components/empresa/Empresa";
import Forms from "../components/form/Forms";
import Servicos from "../components/servicos/Servicos";
import SlideBanner from "../components/slidebanner/SlideBanner";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <SlideBanner />
      <Empresa />
      <Contato />
      <Servicos />
      <Forms />
      <Cliente />
    </div>
  );
};

export default Home;
