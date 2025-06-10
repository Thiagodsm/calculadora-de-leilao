import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import TitlePage from "../components/layout/TitlePage";
import CarouselReferencias from "../components/CarouselReferencias";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { CardHomeDescription } from "../components/CardHomeDescription";

export default function Home() {

  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <TitlePage title="Calculajá - Cálculos para imóveis de leilão" description="Simule custos, lucros e impostos na compra e venda de imóveis arrematados em leilão extrajudicial." />
        <Card className="boder-dashed">
          <CardContent className="text-center">
            <img
              src="/cat-developer2.gif"
              alt="Demonstação do cálculo"
              className="mx-auto mt-5 max-w-md sm:max-w-lg md:max-w-2xl rounded-lg shadow"
            />
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

        {/* Destaques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

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
            description="loren ipsum" 
            text="loren ipsum"
          />

        </div>

        {/* Referências */}
        <section>
          <h2 className="text-2xl font-bold my-4 text-center">Referências</h2>
          <CarouselReferencias />
        </section>

      </div>
    </>
  )
}
