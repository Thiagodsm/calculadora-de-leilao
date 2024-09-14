import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { isAfter } from "date-fns";

// Definindo o tipo para os feriados
interface Holiday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties?: string[] | null;
  launchYear?: number | null;
  type: string;
}

const HolidayList: React.FC = () => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextHoliday, setNextHoliday] = useState<Holiday | null>(null);

  // Função para buscar os feriados da API
  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch(
          `https://date.nager.at/api/v3/PublicHolidays/${new Date().getFullYear()}/BR`
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar os feriados.");
        }
        const data: Holiday[] = await response.json();
        setHolidays(data);

        // Encontrar o próximo feriado
        const today = new Date();
        const upcomingHoliday = data.find((holiday) => isAfter(new Date(holiday.date), today));
        setNextHoliday(upcomingHoliday || null);
      } catch (error) {
        setError("Não foi possível carregar os feriados. Tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHolidays();
  }, []);

  return (
    <section id="holidays" className="py-10">
      <div className="container mx-auto">

        <h2 className="text-xl font-bold mb-4">
          Feriados de {new Date().getFullYear()} no Brasil
        </h2>
        {isLoading ? (
          <p>Carregando feriados...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holidays.map((holiday) => {
              // Verifica se este é o próximo feriado para aplicar o destaque
              const isNextHoliday = nextHoliday && holiday.date === nextHoliday.date;
              
              return (
                <Card key={holiday.date} className={isNextHoliday ? "border-2 border-green-500 shadow-lg" : ""}>
                  <CardHeader>
                    <CardTitle>{holiday.localName}</CardTitle>
                    <CardDescription>
                      {holiday.date.split('-').reverse().join('/')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Nome: {holiday.localName}</p>
                    <p>Nome Internacional: {holiday.name}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default HolidayList;
