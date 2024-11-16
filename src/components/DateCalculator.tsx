import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  differenceInDays,
  differenceInBusinessDays,
  eachWeekendOfInterval,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  isAfter,
  isBefore,
} from "date-fns";
import { Eraser } from "lucide-react";

const DateCalculator = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [results, setResults] = useState<any>(null);

  const handleCalculate = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Calculos utilizando date-fns
      const totalDays = differenceInDays(end, start);
      const totalBusinessDays = differenceInBusinessDays(end, start);
      const weekends = eachWeekendOfInterval({end, start});
      const totalWeekends = 
        weekends.filter(
          (weekend) =>
            isAfter(weekend, start) &&
            isBefore(weekend, end)
      ).length;
      const totalWeeks = differenceInWeeks(end, start);
      const totalMonths = differenceInMonths(end, start);
      const totalYears = differenceInYears(end, start);
      const totalHours = differenceInHours(end, start);
      const totalMinutes = differenceInMinutes(end, start);
      const totalSeconds = differenceInSeconds(end, start);

      // Atualizar resultados
      setResults({
        totalDays,
        totalBusinessDays,
        totalWeekends,
        totalWeeks,
        totalMonths,
        totalYears,
        totalHours,
        totalMinutes,
        totalSeconds,
      });
    }
  };

  const limparResultados = () =>{
    setStartDate("");
    setEndDate("");
    setResults(null);
  }

  return (
    <section id="calculadora">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold">Calculadora de Datas</h2>
        </CardHeader>
        <CardContent>
          <CardDescription className="py-2 mb-4">
            Esta calculadora tem por objetivo simplificar sua vida na hora de fazer calculos com datas. Insira as datas de início e fim para fazer o cálculo.
          </CardDescription>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 gap-2">
            <div className="flex-1">
              <Label htmlFor="start-date">Data inicial</Label>
              <Input
                type="datetime-local"
                id="start-date"
                className="  dark:text-white dark:focus:ring-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400"
                value={startDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setStartDate(e.target.value)
                }
                placeholder="Data inicial"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="end-date">Data final</Label>
              <Input
                type="datetime-local"
                id="end-date"
                className="dark:text-white dark:focus:ring-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400"
                value={endDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEndDate(e.target.value)
                }
                placeholder="Data de final"
              />
            </div>
            <div className="ml-auto flex gap-2 h-[44px] py-4">
              <Button onClick={handleCalculate}>Calcular</Button>
              <Button
                    variant="destructive"
                    className="gap-1"
                    onClick={limparResultados}
                  >
                    <Eraser className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Limpar</span>
                  </Button>
            </div>
          </div>

            {results && (
              <div className="mt-5 space-y-1">
                <p>Total de dias: {results.totalDays}</p>
                <p>Total de dias úteis: {results.totalBusinessDays}</p>
                <p>Total de finais de semana: {results.totalWeekends}</p>
                <p>Total em semanas: {results.totalWeeks}</p>
                <p>Total em meses: {results.totalMonths}</p>
                <p>Total em anos: {results.totalYears}</p>
                <p>Total em horas: {results.totalHours}</p>
                <p>Total em minutos: {results.totalMinutes}</p>
                <p>Total em segundos: {results.totalSeconds}</p>
              </div>
            )}
        </CardContent>
        <CardFooter>
          {/* Footer do Card pode ser usado para adicionar informações adicionais */}
        </CardFooter>
      </Card>
    </section>
  );
};

export default DateCalculator;
