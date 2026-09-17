import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-muted/40 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-20 pb-10 flex flex-col items-start gap-8">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
          <TrendingUp className="size-4 text-primary" aria-hidden="true" />
          <span className="text-primary text-sm font-medium">Simulador de Leilão Imobiliário</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight max-w-4xl">
          Simule a lucratividade real do seu próximo{" "}
          <span className="text-primary">leilão de imóveis</span>{" "}
          em segundos.
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
          Elimine os pontos cegos do seu investimento. Calcule custos ocultos de compra, manutenção,
          regularização, financiamento e descubra o Lucro Líquido, ROI, ROE e a sensibilidade de venda
          antes de dar o primeiro lance.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" asChild className="font-semibold text-base px-8">
            <Link to="/simulador">
              Acessar Calculadora Completa
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#como-funciona">Como funciona?</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 pt-4 border-t w-full">
          {[
            { value: "5", label: "Modalidades da Caixa cobertas" },
            { value: "SAC + Price", label: "Tabelas de amortização" },
            { value: "PDF", label: "Exportação de relatório" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-primary font-bold text-xl">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
