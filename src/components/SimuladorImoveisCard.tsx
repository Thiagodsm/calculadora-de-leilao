import {
    Copy,
    TrendingDown,
    Wallet
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";

type ResultadosSimulacaoType = {
    valorArrematacao: number;
    valorVenda: number;
    comissaoLeiloeiro: number;
    valorComissaoLeiloeiro: number;
    itbi: number;
    valorITBI: number;
    registroImovel: number;
    valorDesocupacao: number;
    totalCustosParciais: number;
    prazoVenda: number;
    iptuMensal: number;
    condominioMensal: number;
    totalVenda: number;
    comissaoCorretor: number;
    valorComissaoCorretor: number;
    valorIR: number;
    totalCustosVenda: number;
    totalInvestido: number;
}

interface SimuladorImoveisCardProps {
    resultados: ResultadosSimulacaoType | null;
}

export function SimuladorImoveisCard({ resultados }: SimuladorImoveisCardProps) {
    // Defina valores padrão se resultados for null
    const {
        valorArrematacao = 0,
        valorVenda = 0,
        comissaoLeiloeiro = 0,
        valorComissaoLeiloeiro = 0,
        itbi = 0,
        valorITBI = 0,
        registroImovel = 0,
        valorDesocupacao = 0,
        totalCustosParciais = 0,
        prazoVenda = 0,
        iptuMensal = 0,
        condominioMensal = 0,
        totalVenda = 0,
        comissaoCorretor = 0,
        valorComissaoCorretor = 0,
        valorIR = 0,
        totalCustosVenda = 0,
        totalInvestido = 0,
    } = resultados || {}; // Fallback para um objeto vazio se resultados for null

    return (
        <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                        Custos totais
                        <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                        >
                            <Copy className="h-3 w-3" />
                            <span className="sr-only">Copy Order ID</span>
                        </Button>
                    </CardTitle>
                    <CardDescription>Custos totais com a compra do imóvel</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <Button size="sm" variant="outline" className="h-8 gap-1">
                        <TrendingDown className="h-3.5 w-3.5" />
                        <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                            Custos
                        </span>
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                    <div className="font-semibold">Demonstrativo dos custos</div>
                    <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Valor de arrematação 
                            </span>
                            <span>R$ {valorArrematacao.toFixed(2)}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Valor de venda 
                            </span>
                            <span>R$ {valorVenda.toFixed(2)}</span>
                        </li>
                    </ul>
                    <Separator className="my-2" />
                    <div className="font-semibold">Custos para arrematar</div>
                    <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Comissão do leiloeiro</span>
                            <span>{comissaoLeiloeiro} %</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Valor da comissão</span>
                            <span>R$ {valorComissaoLeiloeiro.toFixed(2)}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">ITBI</span>
                            <span>{itbi} %</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Valor do ITBI</span>
                            <span>R$ {valorITBI.toFixed(2)}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Registro do imóvel</span>
                            <span>R$ {registroImovel.toFixed(2)}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Valor da desocupação</span>
                            <span>R$ {valorDesocupacao.toFixed(2)}</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                            <span className="text-muted-foreground">Total</span>
                            <span>R$ {totalCustosParciais.toFixed(2)}</span>
                        </li>
                    </ul>
                    <Separator className="my-2" />
                    <div className="font-semibold">Custos até a venda</div>
                    <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Prazo de venda</span>
                            <span>{prazoVenda} mese(s)</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">IPTU mensal</span>
                            <span>R$ {iptuMensal.toFixed(2)}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Condominio mensal</span>
                            <span>R$ {condominioMensal.toFixed(2)}</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                            <span className="text-muted-foreground">Total</span>
                            <span>R$ {totalVenda.toFixed(2)}</span>
                        </li>
                    </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                    <div className="font-semibold">Custos de venda</div>
                    <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Comissão do corretor
                            </span>
                            <span>{comissaoCorretor} %</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Valor da comissão
                            </span>
                            <span>R$ {valorComissaoCorretor.toFixed(2)}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">IR sobre o ganho de capital</span>
                            <span>{valorIR} %</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Valor do IR sobre o ganho de capital</span>
                            <span>R$ {valorIR.toFixed(2)}</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                            <span className="text-muted-foreground">Total</span>
                            <span>R$ {totalCustosVenda.toFixed(2)}</span>
                        </li>
                    </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                    <div className="font-semibold">Custos totais</div>
                    <dl className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-1">
                                <Wallet className="h-4 w-4" />
                                <span>Total investido</span>
                            </dt>
                            <dd className="font-semibold">
                                R$ {totalInvestido.toFixed(2)}
                            </dd>
                        </div>
                    </dl>
                </div>
            </CardContent>
            <CardFooter className="space-x-2">
            </CardFooter>
        </Card>
    );
}
