import HomeHeader from "./components/HomeHeader";
import HeroSection from "./components/HeroSection";
import ModalidadesSection from "./components/ModalidadesSection";
import ComoFuncionaSection from "./components/ComoFuncionaSection";
import CasosDeSuccessoSection from "./components/CasosDeSuccessoSection";
import RecursosAvancadosSection from "./components/RecursosAvancadosSection";
import HomeFooter from "./components/HomeFooter";
import { modalidades } from "./data/modalidades";
import { passos } from "./data/passos";
import { casosDeSuccesso } from "./data/casos";
import { recursosAvancados } from "./data/recursos";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHeader />
      <main className="flex-1">
        <HeroSection />
        <ModalidadesSection modalidades={modalidades} />
        <ComoFuncionaSection passos={passos} />
        <CasosDeSuccessoSection casos={casosDeSuccesso} />
        <RecursosAvancadosSection recursos={recursosAvancados} />
      </main>
      <HomeFooter />
    </div>
  );
}
