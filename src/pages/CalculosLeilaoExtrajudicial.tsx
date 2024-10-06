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

type CreateCalculaImoveisFormData = z.infer<typeof formSchema>;

export default function CalculosLeilaoExtrajudicial() {

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
  }

  const [resultados, setResultados] = useState<ResultadosSimulacaoType | null>(null);

  const handleFormSubmit = (data: CreateCalculaImoveisFormData) => {
    console.log("Dados do formulário: ", data);

    // Realizando os cálculos necessários
    const valorComissaoLeiloeiro = (data.valorArrematacao * data.comissaoLeiloeiro) / 100;
    const valorITBI = (data.valorArrematacao * data.itbi) / 100;
    const totalCustosParciais = valorComissaoLeiloeiro + valorITBI + data.registroImovel + data.gastosDesocupacao + data.valorReformas + data.valorOutrosGastos;

    const totalIptu = data.prazoVendaMeses * data.iptuMensal;
    const totalCondominio = data.prazoVendaMeses * data.condominioMensal;
    const totalVenda = totalIptu + totalCondominio;

    const valorComissaoCorretor = (data.valorVenda * data.comissaoImobiliaria) / 100;
    const valorIR = (totalVenda * data.ir) / 100;

    const totalCustosVenda = totalCustosParciais + valorComissaoCorretor + valorIR;
    const totalInvestido = data.valorArrematacao + totalCustosVenda;
    

    // Atualizando o estado com todos os resultados
    setResultados({
      valorArrematacao: data.valorArrematacao,
      valorVenda: data.valorVenda,

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
      totalVenda,
      comissaoCorretor: data.comissaoImobiliaria,
      valorComissaoCorretor,
      ir: data.ir,
      valorIR,
      totalCustosVenda,
      totalInvestido,
    });
  };

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
              <CardTitle className="text-4xl">R$ 0,00</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                0% custos totais para comprar o imóvel
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={0} aria-label="25% increase" />
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Lucro líquido</CardDescription>
              <CardTitle className="text-4xl">R$ 0,00</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                0% lucros com a venda do imóvel
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={0} aria-label="12% increase" />
            </CardFooter>
          </Card>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
          <Tabs defaultValue="financiado">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="avista">À Vista</TabsTrigger>
                <TabsTrigger value="financiado">Financiado</TabsTrigger>              
              </TabsList>
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
                  <SimuladorImoveisForm onSubmit={handleFormSubmit} />
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
                  <SimuladorImoveisForm onSubmit={handleFormSubmit} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="grid">
            <SimuladorImoveisCard resultados={resultados} />
          </div>
        </div>
      </div>
    </>
  )
}
