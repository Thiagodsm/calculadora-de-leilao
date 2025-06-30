import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import TitlePage from "../components/Layout/TitlePage";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { CardHomeDescription } from "../components/CardHomeDescription";

export default function Home() {

  return (
    <>
      <div className="grid w-full auto-rows-max items-start gap-4 px-4 md:gap-8 lg:col-span-2">
        <TitlePage title="Calculajá - Cálculos para imóveis de leilão" description="Simule custos, lucros e impostos na compra e venda de imóveis arrematados em leilão extrajudicial." />
        <Card className="boder-dashed">
          <CardContent className="text-center">
          </CardContent>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Pronto para começar?</CardTitle>
            <CardDescription>
              Acesse o simulador para calcular o lucro líquido da venda de um imóvel de leilão.
            </CardDescription>
            <div className="mt-4">
              <Link to="/simulator">
                <Button variant="default">Ir para o simulador</Button>
              </Link>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full max-w-full">

          <CardHomeDescription 
            title="Cálculo do lucro líquido" 
            description="Receita da venda - (Custos + IR + Taxas)" 
            text="Simule o retorno de um imóvel considerando arrematação, reformas, impostos e comissão."
          />

          <CardHomeDescription 
            title="Imposto de Renda" 
            description="Receita da venda - (Custos + IR + Taxas)" 
            text="O sistema calcula o IR sobre ganho de capital considerando despesas dedutíveis."
          />

          <CardHomeDescription 
            title="Saldo devedor e parcelas pagas (compra financiada)" 
            description="Calcula os valor a ser pago em parcelas considerando sistemas SAC ou Price" 
            text="Com base nos parametros passados o sistema calcula o valor gastos com as parcelas e saldo devedor a ser quitado na venda."
          />

          <CardHomeDescription 
            title="Valores gastos até pós arrematação até a venda do imóvel" 
            description="IPTU + Condominio + Total em parcelas" 
            text="Resumo dos custos totais incorridos desde a arrematação até a venda do imóvel, incluindo taxas, reformas, impostos e demais despesas operacionais."
          />
        </div>
      </div>
    </>
  )
}
