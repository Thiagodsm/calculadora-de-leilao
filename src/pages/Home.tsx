import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { ThemeContext } from "../components/Layout/Provider";
import TitlePage from "../components/Layout/TitlePage";
import CarouselReferencias from "../components/CarouselReferencias";

export default function Home() {

  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <TitlePage title="Início" description="Calculajá - cálculos diversos agrupados em um só lugar." />
        <Card className="mt-5 border-dashed">
          <CardContent>
            <center>
              <img
                className="mt-5 sm:w-[260px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
                src={theme?.theme === 'dark' ? "/team_engineering_white.svg" : "/team_engineering.svg"}
              >
              </img>

            </center>
          </CardContent>
          <CardHeader>
              <CardTitle className='font-bold'>{`Em desenvolvimento...`}</CardTitle>
              <CardDescription className='text-slate-300'>Aguarde...</CardDescription>
          </CardHeader>

        </Card>

        <section>
          <h2 className="text-2xl font-bold my-2 text-center">Referências</h2>
          <CarouselReferencias />
        </section>
      </div>
    </>
  )
}
