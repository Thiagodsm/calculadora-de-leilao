import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import TitlePage from "../components/Layout/TitlePage";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { CardHomeDescription } from "../components/CardHomeDescription";

export default function Home() {

  return (
    <>
      <div className="grid w-full auto-rows-max items-start gap-4 px-4 md:gap-8 lg:col-span-2">
        <TitlePage 
          title="Calculadora Leilão Extrajudicial" 
          description="Calcule de forma fácil os custos, impostos e o lucro líquido ao comprar e vender imóveis em leilão." />
        <Card className="boder-dashed">
          <CardContent className="text-center">
          </CardContent>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Pronto para começar?</CardTitle>
            <CardDescription className="text-md text-justify">
              <strong>O leilão extrajudicial é uma forma de venda de imóveis realizada fora do processo judicial</strong>. Ele ocorre quando o proprietário não paga um financiamento ou empréstimo em que o imóvel foi dado como garantia (alienação fiduciária). Nesses casos, a instituição credora pode retomar o bem e vendê-lo em leilão público para recuperar a dívida. Esse tipo de leilão costuma ser mais rápido, menos burocrático e com custos reduzidos — o que pode representar uma boa oportunidade para comprar imóveis por valores abaixo do mercado.
            </CardDescription>
            <div className="mt-4 flex justify-center">
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
