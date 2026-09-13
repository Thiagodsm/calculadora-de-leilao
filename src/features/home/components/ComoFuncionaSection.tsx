import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import type { PassoFuncionamento } from "../types";

type Props = {
  passos: PassoFuncionamento[];
};

export default function ComoFuncionaSection({ passos }: Props) {
  return (
    <section id="como-funciona" className="py-20 px-4 md:px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Como Funciona a Calculadora</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Quatro etapas para você ter uma visão completa da lucratividade antes de dar o lance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {passos.map((passo, idx) => (
            <div key={passo.numero} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  {passo.numero}
                </div>
                {idx < passos.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-border" />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-base">{passo.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{passo.descricao}</p>
              </div>

              {passo.cta && (
                <Button asChild className="mt-auto w-fit">
                  <Link to={passo.cta.href}>{passo.cta.label}</Link>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
