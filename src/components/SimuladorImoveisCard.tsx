import {
    ChartNoAxesCombinedIcon,
    Copy,
    PercentIcon,
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
    valorReformas: number;
    valorOutrosGastos: number;
    totalCustosParciais: number;
    prazoVenda: number;
    iptuMensal: number;
    totalIptu: number;
    condominioMensal: number;
    totalCondominio: number;
    totalVenda: number;
    comissaoCorretor: number;
    valorComissaoCorretor: number;
    ir: number;
    valorIR: number;
    totalCustosVenda: number;
    totalInvestido: number;
    lucroLiquido: number;
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
        valorReformas = 0,
        valorOutrosGastos = 0,
        totalCustosParciais = 0,
        prazoVenda = 0,
        iptuMensal = 0,
        totalIptu = 0,
        condominioMensal = 0,
        totalCondominio = 0,
        totalVenda = 0,
        comissaoCorretor = 0,
        valorComissaoCorretor = 0,
        ir = 0,
        valorIR = 0,
        totalCustosVenda = 0,
        totalInvestido = 0,
        lucroLiquido = 0,
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
                            <span>{valorArrematacao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Valor de venda 
                            </span>
                            <span>{valorVenda.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
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
                            <span>{valorComissaoLeiloeiro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">ITBI</span>
                            <span>{itbi} %</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Valor do ITBI</span>
                            <span>{valorITBI.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Registro do imóvel</span>
                            <span>{registroImovel.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Valor da Desocupação</span>
                            <span>{valorDesocupacao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Valor Reformas</span>
                            <span>{valorReformas.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Outros gastos</span>
                            <span>{valorOutrosGastos.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                            <span className="text-muted-foreground">Total</span>
                            <span>{totalCustosParciais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
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
                            <span>{iptuMensal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Total IPTU</span>
                            <span>{totalIptu.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Condominio mensal</span>
                            <span>{condominioMensal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Total condominio</span>
                            <span>{totalCondominio.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                            <span className="text-muted-foreground">Total</span>
                            <span>{totalVenda.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
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
                            <span>{valorComissaoCorretor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Imposto de Renda (%)</span>
                            <span>{ir}%</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Valor do IR</span>
                            <span>{valorIR.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                            <span className="text-muted-foreground">Total</span>
                            <span>{totalCustosVenda.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </li>
                    </ul>
                </div>
                <Separator className="my-4" />
                <div className="mb-4 font-semibold">Resultados</div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                    {/* Custos */}
                    <dl className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <Wallet className="h-5 w-5" />
                            <span>Custos</span>
                        </div>
                        <dd className="font-semibold">
                            {totalInvestido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                        </dd>
                    </dl>

                    {/* Lucro Líquido */}
                    <dl className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <ChartNoAxesCombinedIcon className="h-4 w-4" />
                            <span>Lucro Líquido</span>
                        </div>
                        <dd className="font-semibold">
                            {lucroLiquido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                        </dd>
                    </dl>

                    {/* % Lucro */}
                    <dl className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <PercentIcon className="h-4 w-4" />
                            <span>Lucro Líquido</span>
                        </div>
                        <dd className="font-semibold">
                            {((lucroLiquido / totalInvestido) * 100).toFixed(2)}%
                        </dd>
                    </dl>
                </div>
            </CardContent>
            <CardFooter className="space-x-2">
            </CardFooter>
        </Card>
    );
}
