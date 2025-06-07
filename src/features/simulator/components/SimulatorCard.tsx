import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { Wallet, ChartNoAxesCombinedIcon, PercentIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import { Copy, ReceiptText } from "lucide-react";
import { SimulatorResult } from "../types"
import { ResultItem } from "./ResultItem";
import { formatCurrency, formatPrecision } from "../utils/formatters";

type SimulatorCardProps = {
  result: SimulatorResult
};

export const SimulatorCard = ({result}: SimulatorCardProps) =>
{
  const {
    tipoSimulacao,
    valorArrematacao,
    valorVenda,
    itbi,
    comissaoLeiloeiro,
    comissaoCorretor,
    valorIR,
    porcEntradaFinanciamento,
    valorEntradaFinanciamento,
    porcFinanciamento,
    valorFinanciamento,
    prazoFinanciamento,
    taxaJurosAnual,
    taxaJurosMensal,
    valorComissaoLeiloeiro,
    valorITBI,
    registroImovel,
    valorDesocupacao,
    valorReformas,
    valorOutrosGastos,
    totalCustosParciais,
    prazoVenda,
    iptuMensal,
    totalIptu,
    condominioMensal, 
    totalCondominio,
    totalCustosAteVenda,
    valorComissaoCorretor,
    ir,
    totalCustosVenda,
    totalInvestido,
    lucroLiquido,
    tipoFinanciamento,
    totalPagoParcelas,
    saldoDevedor

  } = result;

  const isFinanced = tipoSimulacao === "financiado";

  return(
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
                <ReceiptText className="h-3.5 w-3.5" />
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
                <ResultItem label="Valor de arrematação" value={valorArrematacao} isCurrency={true}/>
                <ResultItem label="Valor de venda" value={valorVenda} isCurrency={true}/>
            </ul>
            {isFinanced && (
                <>
                    <Separator className="my-2" />
                    <div className="font-semibold">Custos do financiamento</div>
                    <ul className="grid gap-3">
                    <ResultItem label="Porcentagem de entrada" value={porcEntradaFinanciamento} isCurrency={false} sufix="%"/>
                    <ResultItem label="Valor da entrada" value={valorEntradaFinanciamento} isCurrency={true}/>
                    <ResultItem label="Porcentagem financiada" value={porcFinanciamento} isCurrency={false} sufix="%"/>
                    <ResultItem label="Valor financiado" value={valorFinanciamento} isCurrency={true}/>
                    <ResultItem label="Prazo Financiamento" value={prazoFinanciamento} isCurrency={false} sufix="meses"/>
                    <ResultItem label="Taxa de Juros Anual" value={taxaJurosAnual} isCurrency={false} sufix="%"/>
                    <ResultItem label="Taxa de Juros Mensal" value={formatPrecision(taxaJurosMensal, 2)} isCurrency={false} sufix="%"/>
                    </ul>
                </>
                )
            }
            <Separator className="my-2" />
            <div className="font-semibold">Custos para arrematar</div>
            <ul className="grid gap-3">
                <ResultItem label="Comissão do leiloeiro" value={comissaoLeiloeiro} isCurrency={false} sufix="%"/>
                <ResultItem label="Valor da comissão" value={valorComissaoLeiloeiro} isCurrency={true}/>
                <ResultItem label="ITBI" value={itbi} isCurrency={false} sufix="%"/>
                <ResultItem label="Valor do ITBI" value={valorITBI} isCurrency={true}/>
                <ResultItem label="Registro do imóvel" value={registroImovel} isCurrency={true}/>
                <ResultItem label="Valor da Desocupação" value={valorDesocupacao} isCurrency={true}/>
                <ResultItem label="Valor Reformas" value={valorReformas} isCurrency={true}/>
                <ResultItem label="Outros gastos" value={valorOutrosGastos} isCurrency={true}/>
                <ResultItem label="Total" value={totalCustosParciais} isCurrency={true}/>
            </ul>
            <Separator className="my-2" />
            <div className="font-semibold">Custos até a venda</div>
            <ul className="grid gap-3">
                <ResultItem label="Prazo de venda" value={prazoVenda} isCurrency={false} sufix="meses"/>
                <ResultItem label="IPTU mensal" value={iptuMensal} isCurrency={true}/>
                <ResultItem label="Total IPTU" value={totalIptu} isCurrency={true}/>
                <ResultItem label="Condominio mensal" value={condominioMensal} isCurrency={true}/>
                <ResultItem label="Total condominio" value={totalCondominio} isCurrency={true}/>
                {   tipoFinanciamento === "SAC" && isFinanced ? <ResultItem label="Total Parcelas SAC" value={totalPagoParcelas} isCurrency={true}/> : 
                    tipoFinanciamento === "PRICE" && isFinanced ? <ResultItem label="Total Parcelas Price" value={totalPagoParcelas} isCurrency={true}/> :
                    ""                            
                } 
                <ResultItem label="Total até a venda" value={totalCustosAteVenda} isCurrency={true}/>
            </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                    <div className="font-semibold">Custos totais (montante investido)</div>
                    <ul className="grid gap-3">
                        <ResultItem label="Comissão do corretor" value={totalInvestido} isCurrency={true}/>
                    </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                    <div className="font-semibold">Custos de venda</div>
                    <ul className="grid gap-3">
                      <ResultItem label="Comissão do corretor" value={comissaoCorretor} isCurrency={false} sufix="%"/>
                      <ResultItem label="Valor da comissão" value={valorComissaoCorretor} isCurrency={true}/>
                      <ResultItem label="Imposto de Renda (%)" value={ir} isCurrency={false} sufix="%"/>
                      <ResultItem label="Valor do IR" value={valorIR} isCurrency={true}/>
                      <ResultItem label="Total" value={totalCustosVenda} isCurrency={true}/>
                    </ul>
                </div>
                {isFinanced &&
                    <>
                    <Separator className="my-4" />
                    <div className="grid gap-3">
                        <div className="font-semibold">Saldo Devedor do Financiamento</div>
                        <ul className="grid gap-3">
                            <ResultItem  label={`Total (${tipoFinanciamento === "PRICE" ? "Price" : "SAC"}) - pago com a venda`} value={saldoDevedor} isCurrency={true}/>
                        </ul>
                    </div>
                    </>
                }
                <Separator className="my-4" />
                <div className="mb-4 font-semibold">Resultados</div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex flex-col cursor-help">
                                <div className="flex items-center gap-1">
                                    <Wallet className="h-5 w-5" />
                                    <span>Custos</span>
                                </div>
                                <span className="font-semibold">
                                    {formatCurrency(totalInvestido)}
                                </span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            Custos totais considerando: valor de entrada, comissão do leiloeiro, ITBI, registro, desocupação, reformas, outros gastos, IPTU e condominio pagos até o momneto da venda.
                        </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex flex-col cursor-help">
                                    <div className="flex items-center gap-1">
                                        <ChartNoAxesCombinedIcon className="h-4 w-4" />
                                        <span>Lucro Líquido</span>
                                    </div>
                                    <span className="font-semibold">
                                        {formatCurrency(lucroLiquido)}
                                    </span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                Lucro líquido considerando: valor de venda menos custos total + saldo devedor (em caso de compra financiada), já descontado - comissão da imobiliária e IR
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex flex-col cursor-help">
                                    <div className="flex items-center gap-1">
                                        <PercentIcon className="h-4 w-4" />
                                        <span>Lucro Líquido</span>
                                    </div>
                                    <span className="font-semibold">
                                        {formatPrecision((lucroLiquido / totalInvestido) * 100, 2, "%")}
                                    </span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                Porcentagem de lucro líquido 
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
      </CardContent>
    </Card>
  );

}