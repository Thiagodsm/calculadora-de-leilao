import CasoCard from "./CasoCard";
import type { CasoSucesso } from "../types";

type Props = {
  casos: CasoSucesso[];
};

export default function CasosDeSuccessoSection({ casos }: Props) {
  return (
    <section id="casos-sucesso" className="py-20 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Casos de Sucesso</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Investidores reais que usaram a calculadora para avaliar operações antes de dar o lance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {casos.map((caso) => (
            <CasoCard key={caso.investidor.nome} caso={caso} />
          ))}
        </div>
      </div>
    </section>
  );
}
