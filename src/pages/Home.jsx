import Cliente from "../components/cliente/Cliente";
import Contato from "../components/contato/Contato";
import Empresa from "../components/empresa/Empresa";
import Servicos from "../components/servicos/Servicos";
import SlideBanner from "../components/slidebanner/SlideBanner";

const Home = () => {
  return (
    <div>
      <SlideBanner />
      <Empresa />
      <Contato />
      <Servicos />
      <Cliente />
    </div>
  );
};

export default Home;
