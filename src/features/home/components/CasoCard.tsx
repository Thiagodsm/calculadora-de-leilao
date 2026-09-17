import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Separator } from "../../../components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { MapPin, Home } from "lucide-react";
import { formatCurrency } from "../../simulator/utils/formatters";
import type { CasoSucesso } from "../types";

type Props = {
  caso: CasoSucesso;
};

// Custos que pertencem à fase de financiamento/venda (agrupados visualmente abaixo)
const CUSTOS_FINANCIAMENTO = ["Entrada", "Parcelas SAC", "Parcelas PRICE", "Saldo devedor", "Comissão imobiliária"];

function isCustoFinanciamento(descricao: string) {
  return CUSTOS_FINANCIAMENTO.some((k) => descricao.startsWith(k));
}

export default function CasoCard({ caso }: Props) {
  const custosAquisicao = caso.custos.filter((c) => !isCustoFinanciamento(c.descricao));
  const custosFinanciamento = caso.custos.filter((c) => isCustoFinanciamento(c.descricao));

  return (
    <Card className="flex flex-col h-full">
      {/* Investidor */}
      <CardHeader className="pb-3">
        <div className="flex flex-col items-center gap-2 text-center">
          <Avatar className="size-20 ring-2 ring-primary/30 shadow-md">
            <AvatarImage src={caso.avatarSrc} alt={caso.investidor.nome} className="object-cover object-top" />
            <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
              {caso.avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{caso.investidor.nome}</p>
            <p className="text-xs text-muted-foreground">{caso.investidor.perfil}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 flex-1">
        {/* Imóvel */}
        <div className="rounded-lg bg-muted/50 p-3 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Home className="size-3.5" aria-hidden="true" />
            <span>{caso.imovel.tipo}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden="true" />
            <span>{caso.imovel.localidade}</span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-muted-foreground">Arrematação</span>
            <span className="font-semibold text-sm">{formatCurrency(caso.imovel.valorArrematacao)}</span>
          </div>
          <Badge variant="secondary" className="w-fit text-[10px]">
            {caso.imovel.modalidadeFinanciamento}
          </Badge>
        </div>

        {/* Custos de aquisição */}
        {custosAquisicao.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Custos de aquisição
            </p>
            <ul className="flex flex-col gap-1">
              {custosAquisicao.map((custo) => (
                <li key={custo.descricao} className="flex justify-between text-xs">
                  <span className={custo.valor === 0 ? "text-muted-foreground/50" : "text-muted-foreground"}>
                    {custo.descricao}
                  </span>
                  <span className={custo.valor === 0 ? "text-muted-foreground/50" : "font-medium"}>
                    {custo.valor === 0 ? "—" : formatCurrency(custo.valor)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Custos de financiamento e venda */}
        {custosFinanciamento.length > 0 && (
          <>
            <Separator />
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Financiamento e venda
              </p>
              <ul className="flex flex-col gap-1">
                {custosFinanciamento.map((custo) => (
                  <li key={custo.descricao} className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{custo.descricao}</span>
                    <span className="font-medium">{formatCurrency(custo.valor)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Resultado */}
        <div className="rounded-lg border bg-primary/5 border-primary/20 p-3 flex flex-col gap-1.5 mt-auto">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Preço de Venda</span>
            <span className="font-medium">{formatCurrency(caso.resultado.precoVenda)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-semibold">Lucro Líquido</span>
            <span className="text-primary font-bold text-base">
              {formatCurrency(caso.resultado.lucroLiquido)}
            </span>
          </div>
        </div>

        {/* Depoimento */}
        <blockquote className="border-l-2 border-primary pl-3 italic text-xs text-muted-foreground leading-relaxed">
          "{caso.depoimento}"
        </blockquote>
      </CardContent>
    </Card>
  );
}
