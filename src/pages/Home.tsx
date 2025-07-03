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
          title="Calculadora de Lucro em Imóveis de Leilão" 
          description="Simule os custos, impostos e descubra o lucro líquido na compra e venda de imóveis arrematados em leilão extrajudicial." />
        <Card className="boder-dashed">
          <CardContent className="text-center">
          </CardContent>
          <CardHeader>
            <CardTitle className="text-2xl text-center mb-1 sm:mb-0">Pronto para começar?</CardTitle>
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

        <div className="w-full max-w-full">
            <p className="text-muted-foreground text-justify">
              A seguir, veja os principais pontos considerados nos cálculos:
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1 w-full max-w-full">

          <CardHomeDescription 
            title="Lucro Líquido da Operação" 
            description="Lucro = Receita de Venda - (Total de Custos + IR + Comissão do Leiloeiro)" 
            text="Calcula o retorno real da operação, considerando desde o valor pago no leilão até os custos finais com impostos e taxas. Ideal para saber se o negócio vale a pena."
          />

          <CardHomeDescription 
            title="Cálculo do Imposto de Renda (Ganho de Capital)" 
            description="IR = 15% sobre o lucro (com deduções permitidas por lei)" 
            text="O sistema calcula o IR sobre ganho de capital considerando despesas dedutíveis."
          />

          <CardHomeDescription 
            title="Simulação de Financiamento (SAC e Price)" 
            description="Calcula valor total pago + saldo devedor final" 
            text="Com base nos parametros passados o sistema calcula o valor gastos com as parcelas e saldo devedor a ser quitado na venda."
          />

          <CardHomeDescription 
            title="Despesas Pós-Arrematação até a Venda" 
            description="Custos fixos: IPTU + Condomínio + Parcelas Pagas + Outras Despesas" 
            text="Apresenta um resumo dos custos recorrentes e extraordinários entre o arremate e a revenda. Essencial para entender a real rentabilidade."
          />
        </div>
      </div>
    </>
  )
}
