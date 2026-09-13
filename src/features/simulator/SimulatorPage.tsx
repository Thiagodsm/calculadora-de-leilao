import { useRef, useState } from "react";

import { TipoSimulacao, SimulatorResult } from "./types";
import { SensitivityMatrix as SensitivityMatrixType, ExportPayload } from "./types/analytics";
import { SimuladorForm, SimuladorFormRef } from "./components/SimulatorForm";
import { TabsSelector } from "./components/TabsSelector";
import { SimulatorCard } from "./components/SimulatorCard";
import { MetricsPanel } from "./components/MetricsPanel";
import { CostBreakdownChart } from "./components/CostBreakdownChart";
import { InstallmentTable } from "./components/InstallmentTable";
import { SensitivityMatrix } from "./components/SensitivityMatrix";
import { MaxBidCalculator } from "./components/MaxBidCalculator";
import { ExportButton } from "./components/ExportButton";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { Badge } from "../../components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

import { initialSimulatorResult } from "./constants/initialSimulatorResults";
import { formatCurrency, formatPercent, formatProfitClass } from "./utils/formatters";
import { calculateSensitivity } from "./domain/calculateSensitivity";
import { ProfitCalculationInput } from "./domain/calculateProfit";
import { cn } from "../../lib/utils";

const EMPTY_STATE_MSG = "Execute uma simulação para ver os resultados";

const HOW_IT_WORKS = [
  {
    title: "Lance de arrematação",
    text: "Valor pago para arrematar o imóvel no leilão. É a base de cálculo para ITBI, comissão do leiloeiro e (se financiado) o valor financiado.",
  },
  {
    title: "Custos de aquisição",
    text: "ITBI (imposto obrigatório na transferência), registro em cartório, comissão do leiloeiro, custos de desocupação, reformas e outras despesas pontuais.",
  },
  {
    title: "Custos de manutenção",
    text: "Despesas recorrentes enquanto o imóvel não é vendido: IPTU mensal, condomínio e parcelas do financiamento (SAC ou PRICE), multiplicados pelo prazo de venda estimado.",
  },
  {
    title: "Custos de venda",
    text: "Comissão da imobiliária sobre o valor de venda e Imposto de Renda (15%) sobre o ganho de capital líquido.",
  },
  {
    title: "Lucro líquido e ROI",
    text: "Lucro = Valor de venda − Total investido − Custos de venda − Saldo devedor (se financiado). ROI = Lucro ÷ Total investido. ROE (só financiado) = Lucro ÷ Capital próprio aportado.",
  },
];

export const SimulatorPage = () =>
{
    const [tipoSimulacao, setTipoSimulacao] = useState<TipoSimulacao>("financiado");
    const [resultados, setResultado] = useState<SimulatorResult>(initialSimulatorResult);
    const [hasResult, setHasResult] = useState(false);
    const [sensitivity, setSensitivity] = useState<SensitivityMatrixType | null>(null);
    const [exportPayload, setExportPayload] = useState<ExportPayload | null>(null);

    const formRef = useRef<SimuladorFormRef>(null);

    const handleSubmit = (data: SimulatorResult) => {
        setResultado(data);
        setHasResult(true);

        const formValues = formRef.current?.getValues();
        if (formValues) {
            const baseInputs: ProfitCalculationInput = {
                isFinanced: tipoSimulacao === "financiado",
                tipoFinanciamento: data.tipoFinanciamento,
                ...formValues,
            };
            setSensitivity(calculateSensitivity(baseInputs));
        }

        setExportPayload({
            result: data,
            parcelas: data.parcelas ?? [],
            exportedAt: new Date().toISOString().split("T")[0],
        });
    };

    const handleClear = () => {
        formRef.current?.resetForm();
        setResultado(initialSimulatorResult);
        setHasResult(false);
        setSensitivity(null);
        setExportPayload(null);
    };

    const handleApplyBid = (bid: number) => {
        formRef.current?.setValorArrematacao(bid);
        formRef.current?.submitForm();
    };

    const maxBidInputs = hasResult && formRef.current
        ? (() => {
            const vals = formRef.current.getValues();
            const { valorArrematacao: _, ...rest } = vals;
            return {
                isFinanced: tipoSimulacao === "financiado",
                tipoFinanciamento: resultados.tipoFinanciamento,
                ...rest,
            } as Omit<ProfitCalculationInput, "valorArrematacao">;
        })()
        : null;

    return (
        <div className="grid auto-rows-max items-start gap-4 md:gap-6 lg:col-span-2">

            {/* Header */}
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg sm:text-xl">Simulador de Leilão Imobiliário</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                        Calcule os custos da arrematação, estime o lucro líquido, ROI e ROE de forma completa e gratuita.
                    </CardDescription>

                    {/* Resultado em destaque */}
                    {hasResult && (
                        <div className="flex flex-wrap gap-2 pt-2">
                            <Badge
                                variant="secondary"
                                className={cn("text-sm font-bold px-3 py-1", formatProfitClass(resultados.lucroLiquido))}
                            >
                                Lucro: {formatCurrency(resultados.lucroLiquido)}
                            </Badge>
                            <Badge variant="secondary" className={cn("text-sm font-semibold px-3 py-1", formatProfitClass(resultados.roi))}>
                                ROI: {formatPercent(resultados.roi)}
                            </Badge>
                            <Badge variant="secondary" className="text-sm px-3 py-1 text-muted-foreground">
                                Investido: {formatCurrency(resultados.totalInvestido)}
                            </Badge>
                        </div>
                    )}

                    {/* Como funciona */}
                    <Accordion type="single" collapsible className="mt-2">
                        <AccordionItem value="como-funciona" className="border-none">
                            <AccordionTrigger className="text-sm text-primary font-medium py-1 hover:no-underline">
                                Como a calculadora funciona?
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                                    {HOW_IT_WORKS.map((item) => (
                                        <div key={item.title} className="rounded-md bg-muted/60 p-3">
                                            <p className="text-sm font-semibold mb-1">{item.title}</p>
                                            <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardHeader>
            </Card>

            {/* Main two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-4 lg:gap-6 items-start">

                {/* Left column — sticky form */}
                <div className="no-print lg:sticky lg:top-4 lg:self-start lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto lg:pr-1">
                    <TabsSelector tipoSimulacao={tipoSimulacao} onChange={setTipoSimulacao} onClear={handleClear} />
                    <SimuladorForm
                        ref={formRef}
                        isFinanced={tipoSimulacao === "financiado"}
                        onSubmit={handleSubmit}
                    />
                </div>

                {/* Right column — tabbed results */}
                <div className="min-w-0">
                    <Tabs defaultValue="resumo">
                        {/* TabsList alinhada visualmente com o TabsSelector do lado esquerdo */}
                        <div className="mt-4">
                            <TabsList className="w-full h-auto flex flex-wrap gap-0.5">
                                <TabsTrigger value="resumo" className="flex-1 text-xs sm:text-sm">Resumo</TabsTrigger>
                                <TabsTrigger value="detalhes" className="flex-1 text-xs sm:text-sm">Detalhes</TabsTrigger>
                                <TabsTrigger value="parcelas" className="flex-1 text-xs sm:text-sm">Parcelas</TabsTrigger>
                                <TabsTrigger value="sensibilidade" className="flex-1 text-xs sm:text-sm">Sensibilidade</TabsTrigger>
                                <TabsTrigger value="lance-maximo" className="flex-1 text-xs sm:text-sm">Lance Máx.</TabsTrigger>
                            </TabsList>
                        </div>

                        {/* TAB: Resumo */}
                        <TabsContent value="resumo" className="mt-4 space-y-4">
                            {!hasResult ? (
                                <EmptyState />
                            ) : (
                                <>
                                    <MetricsPanel result={resultados} />
                                    <Card>
                                        <CardHeader className="pb-1">
                                            <CardTitle className="text-sm font-semibold">Distribuição de Custos</CardTitle>
                                            <CardDescription className="text-xs">
                                                Proporção de cada custo sobre o total investido
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="pb-4">
                                            <CostBreakdownChart result={resultados} />
                                        </CardContent>
                                    </Card>
                                </>
                            )}
                        </TabsContent>

                        {/* TAB: Detalhes */}
                        <TabsContent value="detalhes" className="mt-4 space-y-4">
                            {!hasResult ? (
                                <EmptyState />
                            ) : (
                                <>
                                    <div className="flex justify-end">
                                        <ExportButton payload={exportPayload} />
                                    </div>
                                    <SimulatorCard result={resultados} />
                                </>
                            )}
                        </TabsContent>

                        {/* TAB: Parcelas */}
                        <TabsContent value="parcelas" className="mt-4">
                            {!hasResult || tipoSimulacao === "avista" ? (
                                <p className="text-muted-foreground text-sm text-center py-8">
                                    Tabela de parcelas disponível apenas para simulações financiadas.
                                </p>
                            ) : (
                                <InstallmentTable
                                    parcelas={resultados.parcelas ?? []}
                                    prazoVenda={resultados.prazoVenda}
                                    tipoFinanciamento={resultados.tipoFinanciamento}
                                />
                            )}
                        </TabsContent>

                        {/* TAB: Sensibilidade */}
                        <TabsContent value="sensibilidade" className="mt-4">
                            {!hasResult || !sensitivity ? (
                                <EmptyState />
                            ) : (
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-semibold">Análise de Sensibilidade</CardTitle>
                                        <CardDescription className="text-xs leading-relaxed">
                                            Simula como o lucro e o ROI variam conforme o <strong>prazo para vender</strong> o imóvel (linhas) e um possível <strong>desconto no preço de venda</strong> em relação ao valor informado (colunas). Use para entender o pior e o melhor cenário antes de dar o lance.
                                        </CardDescription>
                                        <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                                            <span><span className="inline-block w-2.5 h-2.5 rounded-sm bg-primary/20 ring-2 ring-primary mr-1 align-middle" />Cenário base (seus dados)</span>
                                            <span><span className="inline-block w-2.5 h-2.5 rounded-sm bg-destructive/10 mr-1 align-middle" />Prejuízo</span>
                                            <span className="text-muted-foreground/70">Linha marcada = seu cenário personalizado</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <SensitivityMatrix matrix={sensitivity} />
                                    </CardContent>
                                </Card>
                            )}
                        </TabsContent>

                        {/* TAB: Lance Máximo */}
                        <TabsContent value="lance-maximo" className="mt-4">
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-semibold">Calculadora de Lance Máximo</CardTitle>
                                    <CardDescription className="text-xs">
                                        Informe o ROI mínimo desejado e descubra o lance máximo que pode dar
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <MaxBidCalculator baseInputs={maxBidInputs} onApplyBid={handleApplyBid} />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-center gap-2">
            <p className="text-muted-foreground text-sm">{EMPTY_STATE_MSG}</p>
        </div>
    );
}
