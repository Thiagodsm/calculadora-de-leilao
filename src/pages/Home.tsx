import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { ThemeContext } from "../components/layout/Provider";
import TitlePage from "../components/layout/TitlePage";
import CarouselReferencias from "../components/CarouselReferencias";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Home() {

  const theme = useContext(ThemeContext);

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
          <Card>
            <CardHeader>
              <CardTitle>Cálculo do lucro líquido</CardTitle>
              <CardDescription>Receita da venda - (Custos + IR + Taxas)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Simule o retorno de um imóvel considerando arrematação, reformas, impostos e comissão.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Imposto de Renda</CardTitle>
              <CardDescription>Com base na Lei 7.713/88 e regras da Receita Federal</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                O sistema calcula o IR sobre ganho de capital considerando despesas dedutíveis.
              </p>
            </CardContent>
          </Card>
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
