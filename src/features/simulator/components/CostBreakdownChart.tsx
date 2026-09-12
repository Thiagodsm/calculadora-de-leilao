import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { SimulatorResult } from "../types";
import { formatCurrency } from "../utils/formatters";

interface CostBreakdownChartProps {
  result: SimulatorResult;
}

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "hsl(var(--chart-6))",
  "hsl(var(--chart-7))",
  "hsl(var(--chart-8))",
  "hsl(var(--chart-9))",
  "hsl(var(--chart-10))",
  "hsl(var(--chart-11))",
];

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  if (percent < 0.04) return null;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={11}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const renderLegendText = (value: string, entry: { payload?: { value: number; percent?: number } }) => {
  const pct = entry.payload?.percent !== undefined
    ? ` (${(entry.payload.percent * 100).toFixed(1)}%)`
    : "";
  return (
    <span style={{ fontSize: 11, color: "inherit" }}>
      {value}{pct}
    </span>
  );
};

export const CostBreakdownChart = ({ result }: CostBreakdownChartProps) =>
{
  const {
    valorComissaoLeiloeiro,
    valorITBI,
    registroImovel,
    valorDesocupacao,
    valorReformas,
    valorOutrosGastos,
    totalIptu,
    totalCondominio,
    totalPagoParcelas,
    valorComissaoCorretor,
    valorIR,
  } = result;

  const allData = [
    { name: "Comissão Leiloeiro", value: valorComissaoLeiloeiro },
    { name: "ITBI", value: valorITBI },
    { name: "Registro", value: registroImovel },
    { name: "Desocupação", value: valorDesocupacao },
    { name: "Reformas", value: valorReformas },
    { name: "Outros Gastos", value: valorOutrosGastos },
    { name: "IPTU", value: totalIptu },
    { name: "Condomínio", value: totalCondominio },
    { name: "Financiamento", value: totalPagoParcelas },
    { name: "Comissão Corretor", value: valorComissaoCorretor },
    { name: "IR", value: valorIR },
  ];

  const total = allData.reduce((s, d) => s + d.value, 0);
  const data = allData
    .filter((d) => d.value > 0)
    .map((d) => ({ ...d, percent: d.value / total }));

  if (data.length === 0) return null;

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            outerRadius="70%"
            dataKey="value"
            labelLine={false}
            label={renderCustomLabel}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number, name: string) => [formatCurrency(value), name]}
          />
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            formatter={renderLegendText}
            wrapperStyle={{ paddingTop: "12px", fontSize: "11px", lineHeight: "1.6" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
