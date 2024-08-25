// src/components/HolidayList.tsx

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";

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

  // Função para buscar os feriados da API
  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch("https://date.nager.at/api/v3/PublicHolidays/2024/BR");
        const data: Holiday[] = await response.json();
        setHolidays(data);
      } catch (error) {
        console.error("Erro ao buscar os feriados:", error);
      }
    };

    fetchHolidays();
  }, []);

  return (
    <section id="holidays" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Feriados de 2024 no Brasil</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {holidays.map((holiday) => (
            <Card key={holiday.date}>
              <CardHeader>              
                <CardTitle>{holiday.localName}</CardTitle>
                <CardDescription>{holiday.date}</CardDescription>
              </CardHeader>
              <CardContent>
                
              {/*<p>Tipo: {(holiday.type as string[]).length > 0 ? (holiday.type as string[]).slice(0, -1).join(', ') + ' e ' + (holiday.type as string[])[(holiday.type as string[]).length - 1] : 'Não definido'}</p>*/}
                <p>Nome: {holiday.localName}</p>
                <p>Nome Internacional: {holiday.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolidayList;
