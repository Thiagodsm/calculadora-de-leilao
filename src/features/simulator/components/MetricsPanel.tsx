import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";
import { useSidebar } from "../../../components/ui/sidebar";
import { SimulatorResult } from "../types";
import { formatCurrency, formatPercent, formatProfitClass } from "../utils/formatters";
import { cn } from "../../../lib/utils";

interface MetricsPanelProps {
  result: SimulatorResult;
}

function MetricCard({
  label,
  value,
  description,
  valueClass,
}: {
  label: string;
  value: string;
  description: string;
  valueClass?: string;
}) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="pb-1 pt-3 px-3">
        <CardDescription className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </CardDescription>
        <CardTitle
          className={cn(
            "text-base sm:text-lg font-bold leading-tight break-all min-w-0",
            valueClass
          )}
        >
          {value}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3 px-3">
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export const MetricsPanel = ({ result }: MetricsPanelProps) =>
{
  const { lucroLiquido, roi, roe, valorIR, totalInvestido, totalPagoParcelas, totalCondominio, totalIptu } = result;
  const { state } = useSidebar();
  const sidebarOpen = state === "expanded";

  return (
    <div className={cn("grid gap-2", sidebarOpen ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-2 lg:grid-cols-3")}>
      <MetricCard
        label="Lucro Líquido"
        value={formatCurrency(lucroLiquido)}
        description="Resultado líquido estimado após todos os custos"
        valueClass={formatProfitClass(lucroLiquido)}
      />
      <MetricCard
        label="ROI"
        value={formatPercent(roi)}
        description="Retorno sobre o total investido"
        valueClass={formatProfitClass(roi)}
      />
      {roe !== null && (
        <MetricCard
          label="ROE"
          value={formatPercent(roe)}
          description="Retorno sobre capital próprio (alavancagem)"
          valueClass={formatProfitClass(roe)}
        />
      )}
      <MetricCard
        label="Imposto de Renda"
        value={formatCurrency(valorIR)}
        description="IR sobre ganho de capital pago na venda"
      />
      <MetricCard
        label="Total Investido"
        value={formatCurrency(totalInvestido)}
        description="Montante total desembolsado até a venda"
      />
      <MetricCard
        label="Custos de Manutenção"
        value={formatCurrency(totalPagoParcelas + totalCondominio + totalIptu)}
        description={`Parcelas ${formatCurrency(totalPagoParcelas)} · Cond. ${formatCurrency(totalCondominio)} · IPTU ${formatCurrency(totalIptu)}`}
      />
    </div>
  );
};
