import Contato from "../components/contato/Contato";
import Empresa from "../components/empresa/Empresa";
import Header from "../components/header";
import Servicos from "../components/servicos/Servicos";
import SlideBanner from "../components/slidebanner/SlideBanner";

const Home = () => {
  return (
    <div>
      <Header />
      <SlideBanner />
      <Empresa />
      <Contato />
      <Servicos />
    </div>
  );
};

export default Home;
