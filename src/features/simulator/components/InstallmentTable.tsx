import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Badge } from "../../../components/ui/badge";
import { Parcela, TipoFinanciamento } from "../types";
import { formatCurrency } from "../utils/formatters";

interface InstallmentTableProps {
  parcelas: Parcela[];
  prazoVenda: number;
  tipoFinanciamento: TipoFinanciamento;
}

export const InstallmentTable = ({ parcelas, prazoVenda, tipoFinanciamento }: InstallmentTableProps) =>
{
  if (!parcelas || parcelas.length === 0) return null;

  return (
    <Accordion type="single" collapsible defaultValue="parcelas">
      <AccordionItem value="parcelas" className="border rounded-md px-4">
        <AccordionTrigger className="text-sm font-medium">
          Ver tabela de parcelas ({parcelas.length} parcelas — {tipoFinanciamento})
        </AccordionTrigger>
        <AccordionContent>
          <ScrollArea className="h-80 w-full">
            <table className="w-full text-xs">
              <thead className="sticky top-0 bg-muted">
                <tr>
                  <th className="text-left py-2 px-2 font-medium text-muted-foreground">#</th>
                  <th className="text-right py-2 px-2 font-medium text-muted-foreground">Parcela</th>
                  <th className="text-right py-2 px-2 font-medium text-muted-foreground">Juros</th>
                  <th className="text-right py-2 px-2 font-medium text-muted-foreground">Amortização</th>
                  <th className="text-right py-2 px-2 font-medium text-muted-foreground">Saldo Devedor</th>
                </tr>
              </thead>
              <tbody>
                {parcelas.map((p) => {
                  const isVenda = p.numero === prazoVenda;
                  return (
                    <tr
                      key={p.numero}
                      className={isVenda ? "bg-accent font-semibold" : "border-b border-border/40"}
                    >
                      <td className="py-1.5 px-2">
                        {p.numero}
                        {isVenda && (
                          <Badge variant="secondary" className="ml-1 text-xs">Venda</Badge>
                        )}
                      </td>
                      <td className="text-right py-1.5 px-2">{formatCurrency(p.valor)}</td>
                      <td className="text-right py-1.5 px-2">{formatCurrency(p.juros ?? 0)}</td>
                      <td className="text-right py-1.5 px-2">{formatCurrency(p.amortizacao ?? 0)}</td>
                      <td className="text-right py-1.5 px-2">{formatCurrency(p.saldoDevedor ?? 0)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ScrollArea>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
