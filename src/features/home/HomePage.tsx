import PageMeta from "../seo/components/PageMeta";
import HomeHeader from "./components/HomeHeader";
import HeroSection from "./components/HeroSection";
import ModalidadesSection from "./components/ModalidadesSection";
import ComoFuncionaSection from "./components/ComoFuncionaSection";
import CasosDeSuccessoSection from "./components/CasosDeSuccessoSection";
import RecursosAvancadosSection from "./components/RecursosAvancadosSection";
import SharedFooter from "../../components/Layout/SharedFooter";
import { modalidades } from "./data/modalidades";
import { passos } from "./data/passos";
import { casosDeSuccesso } from "./data/casos";
import { recursosAvancados } from "./data/recursos";

export default function HomePage() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Leilão Imobiliário",
    "applicationCategory": "FinanceApplication",
    "description": "Ferramenta gratuita para simular o lucro líquido de imóveis em leilão extrajudicial",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
    "operatingSystem": "Web",
    "url": "https://calc-leilao.vercel.app",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Calculadora de Leilão Imobiliário – Simule o Lucro em Segundos"
        description="Simule gratuitamente o lucro de imóveis em leilão extrajudicial da Caixa. Calcule ITBI, SAC, PRICE, IR, comissões e muito mais."
        keywords={["calculadora leilão imobiliário", "leilão extrajudicial caixa", "simular leilão imóvel", "ITBI leilão", "lucro leilão"]}
        ogImage="/og-image.svg"
        jsonLd={homeJsonLd}
      />
      <HomeHeader />
      <main className="flex-1">
        <HeroSection />
        <ModalidadesSection modalidades={modalidades} />
        <ComoFuncionaSection passos={passos} />
        <CasosDeSuccessoSection casos={casosDeSuccesso} />
        <RecursosAvancadosSection recursos={recursosAvancados} />
      </main>
      <SharedFooter />
    </div>
  );
}
