import { useRef, useState } from "react";

import { TipoSimulacao, SimulatorResult } from "./types";
import { SimuladorForm, SimuladorFormRef } from "./components/SimulatorForm";
import { TabsSelector } from "./components/TabsSelector";
import { SimulatorCard } from "./components/SimulatorCard";

import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import { initialSimulatorResult } from "./constants/initialSimulatorResults";
import { formatCurrency } from "./utils/formatters";

export const SimulatorPage = () =>
{
    const [tipoSimulacao, setTipoSimulacao] = useState<TipoSimulacao>("financiado");
    const [resultados, setResultado] = useState<SimulatorResult>(initialSimulatorResult);

    const formRef = useRef<SimuladorFormRef>(null);

    const handleSubmit = (data: SimulatorResult) =>{
        setResultado(data);
    };

    const handleClear = () =>{
        formRef.current?.resetForm();
        setResultado(initialSimulatorResult);
    };
    
    return(
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="sm:col-span-2">
                    <CardHeader className="pb-3">
                        <CardTitle>Simulador de Leilão Extrajudicial</CardTitle>
                        <CardDescription className="leading-relaxed">
                            Preencha os dados do imóvel para calcular automaticamente os custos da arrematação, estimar o lucro líquido e avaliar a viabilidade do investimento em leilões extrajudiciais.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="md:mt-3">Faça sua simulação</Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Investimento Total</CardDescription>
                        <CardTitle className="text-4xl">{resultados ? formatCurrency(resultados.totalInvestido): "R$ 0,00"}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs text-muted-foreground">
                            Soma dos custos da arrematação até a venda. Lucro bruto estimado:{" "}
                            {resultados && resultados.valorVenda !== 0
                                ? (Math.min((1 - resultados.valorArrematacao / resultados.valorVenda), 1) * 100).toFixed(2)
                                : 0}
                            %
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Progress value={
                            resultados && resultados.valorVenda !== 0
                            ? (Math.min((1-(resultados.valorArrematacao / resultados.valorVenda)), 1) * 100) 
                            : 0
                            }
                            aria-label="custos totais" />
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Lucro líquido Estimado</CardDescription>
                        <CardTitle className="text-4xl">{resultados ? formatCurrency(resultados.lucroLiquido) : "R$ 0,00"}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs text-muted-foreground">
                            {resultados
                            ? resultados.totalInvestido !== 0
                            ? `${((resultados.lucroLiquido / resultados.totalInvestido) * 100).toFixed(2)}% de retorno líquido estimado com a venda do imóvel`
                            : "0% de retorno líquido estimado com a venda"
                            : "0% de retorno líquido estimado com a venda"}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Progress 
                            value={
                            resultados && resultados.totalInvestido !== 0 
                                ? Math.min((resultados.lucroLiquido / resultados.totalInvestido) * 100, 100) 
                                : 0
                            } 
                            aria-label="porcentagem do lucro líquido" 
                        />
                    </CardFooter>
                </Card>

            </div>
            <div className="grid md:grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="mt-6">
                    <TabsSelector tipoSimulacao={tipoSimulacao} onChange={setTipoSimulacao} onClear={handleClear} />
                    <SimuladorForm ref={formRef} isFinanced={tipoSimulacao === "financiado"} onSubmit={handleSubmit}/>
                </div>
                <div className="mt-10">
                    <SimulatorCard result={resultados as SimulatorResult} />
                </div>
            </div>
        </div>
    );
}