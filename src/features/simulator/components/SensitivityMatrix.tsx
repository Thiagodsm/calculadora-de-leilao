import { ScrollArea } from "../../../components/ui/scroll-area";
import { SensitivityMatrix as SensitivityMatrixType } from "../types/analytics";
import { formatCurrency, formatPercent } from "../utils/formatters";
import { cn } from "../../../lib/utils";

interface SensitivityMatrixProps {
  matrix: SensitivityMatrixType;
}

export const SensitivityMatrix = ({ matrix }: SensitivityMatrixProps) =>
{
  const { rows, discountCols } = matrix;

  return (
    <ScrollArea className="w-full overflow-x-auto">
      <table className="w-full text-xs border-collapse min-w-[400px]">
        <thead>
          <tr className="bg-muted">
            <th className="text-left py-2 px-3 font-medium text-muted-foreground whitespace-nowrap">
              Prazo de Venda
            </th>
            {discountCols.map((d) => (
              <th key={d} className="text-right py-2 px-3 font-medium text-muted-foreground whitespace-nowrap">
                {d === 0 ? "0%" : `-${d}%`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.prazoVenda} className="border-b border-border/40">
              <td className="py-2 px-3 font-medium whitespace-nowrap">
                {row.prazoVenda} meses{row.isUserScenario ? " (seu cenário)" : ""}
              </td>
              {row.cells.map((cell, ci) => {
                const isLoss = cell.lucroLiquido < 0;
                return (
                  <td
                    key={ci}
                    className={cn(
                      "text-right py-2 px-3 whitespace-nowrap",
                      cell.isBaseCase && "bg-muted ring-2 ring-inset ring-primary rounded",
                      isLoss && "bg-destructive/10 text-destructive font-semibold"
                    )}
                  >
                    <div>{formatCurrency(cell.lucroLiquido)}</div>
                    <div className="text-xs text-muted-foreground">{formatPercent(cell.roi)}</div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollArea>
  );
};
