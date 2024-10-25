// FAZER CALCULOS SAC E PRICE E MOSTRAR OS VALORES COBRADOS ATE A VENDA DO IMOVEL

// MANTER OS ESTADOS DOS COMPOENTES QUANDO TIVER ALTERAÇÃO DE ABAS A VISTA E FINANCIADA

// DESENVOLVER METODO PARA EXPORTAR CALCULOS

// FAZER CALCULOS PARA COMPRAS FINANCIADAS

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { Button } from "../components/ui/button";

import { SimuladorImoveisForm } from "../components/SimuladorImoveisForm";

import { useState } from "react";
import { formSchema } from "../schemas/formSchema";
import { z } from "zod";
import { SimuladorImoveisCard } from "../components/SimuladorImoveisCard";
import { File, Eraser } from "lucide-react";

type CreateCalculaImoveisFormData = z.infer<typeof formSchema>;

export default function CalculosLeilaoExtrajudicial() {

  type ResultadosSimulacaoType = {
    valorArrematacao: number;
    valorVenda: number;
    /* compra financiada */
    porcEntradaFinanciamento: number;
    valorEntradaFinanciamento: number;
    porcFinanciamento: number;
    valorFinanciamento: number;
    taxaJurosAnual: number;
    prazoFinanciamento: number;
    valorParcelasPrice: number;
    valorParcelasSAC: number;
    /********************/
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
    totalCustosAteVenda: number;
    comissaoCorretor: number;
    valorComissaoCorretor: number;
    ir: number;
    valorIR: number;
    totalCustosVenda: number;
    totalInvestido: number;
    lucroLiquido: number;
  }

  const [resultados, setResultados] = useState<ResultadosSimulacaoType | null>(null);

  const handleFormSubmit = (data: CreateCalculaImoveisFormData, isFinanciado: boolean) => {
    console.log("Dados do formulário: ", data);
    let valorEntradaFinanciamento = 0, porcFinanciamento = 0, valorFinanciamento = 0, valorParcelasPrice = 0, valorParcelasSAC = 0;

    if(isFinanciado)
    {
      valorEntradaFinanciamento = data.valorArrematacao * data.porcEntradaFinanciamento;
      porcFinanciamento = (1 - (data.porcEntradaFinanciamento / 100)) * 100;
      valorFinanciamento = data.valorArrematacao * porcFinanciamento;
    }

    // Calculo das despesas de aquisicao
    const valorComissaoLeiloeiro = (data.valorArrematacao * data.comissaoLeiloeiro) / 100;
    const valorITBI = (data.valorArrematacao * data.itbi) / 100;
    const totalCustosParciais = valorComissaoLeiloeiro + valorITBI + data.registroImovel + data.gastosDesocupacao + data.valorReformas + data.valorOutrosGastos;

    // Calculo custos ate a venda
    const totalIptu = data.prazoVendaMeses * data.iptuMensal;
    const totalCondominio = data.prazoVendaMeses * data.condominioMensal;
    const totalCustosAteVenda = totalIptu + totalCondominio;    

    const totalInvestido = isFinanciado ?
      totalCustosParciais + totalCustosAteVenda :
      data.valorArrematacao + totalCustosParciais + totalCustosAteVenda;

    // Calculo das despesas com a venda
    const valorComissaoCorretor = (data.valorVenda * data.comissaoImobiliaria) / 100;    

    // Calculo do imposto de renda (15% sobre o lucro liquido)
    const valorIR = ((data.valorVenda - data.valorReformas) - totalInvestido) * (data.ir / 100);
    const valorRealVenda = data.valorVenda - valorComissaoCorretor - valorIR;

    // Calculo do total investido
    const totalCustosVenda = totalCustosParciais + valorComissaoCorretor + valorIR; 

    // Calculo do lucro liquido antes do imposto
    const lucroLiquido = valorRealVenda - totalInvestido;

    // Atualizando o estado com todos os resultados
    setResultados({
      valorArrematacao: data.valorArrematacao,
      valorVenda: data.valorVenda,
      /* compra financiada */
      porcEntradaFinanciamento: data.porcEntradaFinanciamento,
      valorEntradaFinanciamento,
      porcFinanciamento,
      valorFinanciamento,
      taxaJurosAnual: data.taxaJurosAnual,
      prazoFinanciamento: data.prazoFinanciamento,
      valorParcelasPrice,
      valorParcelasSAC,
      /********************/
      comissaoLeiloeiro: data.comissaoLeiloeiro,
      valorComissaoLeiloeiro,
      itbi: data.itbi,
      valorITBI,
      registroImovel: data.registroImovel,
      valorDesocupacao: data.gastosDesocupacao,
      valorReformas: data.valorReformas,
      valorOutrosGastos: data.valorOutrosGastos,
      totalCustosParciais,
      prazoVenda: data.prazoVendaMeses,
      iptuMensal: data.iptuMensal,
      totalIptu,
      condominioMensal: data.condominioMensal,
      totalCondominio,
      totalCustosAteVenda,
      comissaoCorretor: data.comissaoImobiliaria,
      valorComissaoCorretor,
      ir: data.ir,
      valorIR,
      totalCustosVenda,
      totalInvestido,
      lucroLiquido,
    });
  };

  console.log({resultados});

  
  const limparResultados = () =>{
    setResultados(null)
  }

  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>Cálculos de Leilão de Extrajudicial</CardTitle>
              <CardDescription className="text-balance leading-relaxed">
                O leilão extrajudicial é um processo que permite vender imóveis que foram dados como garantia em empréstimos que não foram pagos. O leilão é mais rápido e barato do que um processo judicial e pode oferecer imóveis a preços mais baixos do que o valor de mercado.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Faça sua simulação</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Custos totais</CardDescription>
              <CardTitle className="text-4xl">{resultados ? resultados.totalInvestido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}): "R$ 0,00"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                Custos da arrematação até a venda, com lucro bruto de: {resultados ? ( resultados.valorVenda !== 0 ? ((1-(resultados.valorArrematacao / resultados.valorVenda)) * 100).toFixed(2) : 0) : "0"}%
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={resultados ? ( resultados.valorVenda !== 0 ? ((1-(resultados.valorArrematacao / resultados.valorVenda)) * 100) : 0) : 0} aria-label="custos totais" />
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Lucro líquido</CardDescription>
              <CardTitle className="text-4xl">{resultados ? resultados.lucroLiquido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : "R$ 0,00"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                {resultados ? ( resultados.totalInvestido !== 0 ? ((resultados.lucroLiquido / resultados.totalInvestido) * 100).toFixed(2) : 0) : "0"}% de lucro líquido com a venda do imóvel
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={resultados ? ( resultados.totalInvestido !== 0 ? ((resultados.lucroLiquido / resultados.totalInvestido) * 100) : 0) : 0} aria-label="porcentagem do lucro líquido" />
            </CardFooter>
          </Card>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
          <Tabs defaultValue="avista">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="avista">À Vista</TabsTrigger>
                <TabsTrigger value="financiado">Financiado</TabsTrigger>              
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                  <Button
                    variant="destructive"
                    size="sm"
                    className="h-7 gap-1 text-sm"
                    onClick={limparResultados}
                  >
                    <Eraser className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Limpar</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Exportar</span>
                  </Button>
                </div>
            </div>
            <TabsContent value="financiado">
              <Card>
                <CardHeader className="px-7">
                  <CardTitle>Fomulário de compra financiada</CardTitle>
                  <CardDescription>
                    Campos necessários para fazer os cálculos de custos e lucro na venda do imóvel.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SimuladorImoveisForm onSubmit={handleFormSubmit} isFinanciado={true} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="avista">
              <Card>
                <CardHeader className="px-7">
                  <CardTitle>Fomulário de compra a vista</CardTitle>
                  <CardDescription>
                    Campos necessários para fazer os cálculos de custos e lucro na venda do imóvel.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SimuladorImoveisForm onSubmit={handleFormSubmit} isFinanciado={false} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="grid">
            <SimuladorImoveisCard resultados={resultados} isFinanciado={true} />
          </div>
        </div>
      </div>
    </>
  )
}
