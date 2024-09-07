import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { ThemeContext } from "../components/Provider";
import TitlePage from "../components/TitlePage";

export default function Home() {

  const theme = useContext(ThemeContext);

  return (
    <>
      <TitlePage title="Início" description="Calculajá - calculos diversos agrupados em um único lugar" />
        <Card className="mt-10 border-dashed">
          <CardContent>
            <center>
              <img
                className="m-10"
                width={500}
                height={200}
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
    </>
  )
}
