import type React from "react";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import * as Icons from "lucide-react";
import type { RecursoAvancado } from "../types";

type Props = {
  recursos: RecursoAvancado[];
};

type LucideIconName = keyof typeof Icons;

export default function RecursosAvancadosSection({ recursos }: Props) {
  return (
    <section id="recursos" className="py-20 px-4 md:px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Recursos Avançados</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Muito além do cálculo básico — ferramentas para investidores que exigem precisão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recursos.map((recurso) => {
            const Icon = Icons[recurso.iconName as LucideIconName] as React.ElementType;
            return (
              <Card key={recurso.titulo} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    {Icon && <Icon className="size-5 text-primary" aria-hidden="true" />}
                  </div>
                  <h3 className="font-semibold text-sm leading-tight">{recurso.titulo}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground leading-relaxed">{recurso.descricao}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
