import { useState, useEffect } from "react";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../components/ui/select";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../components/ui/card";

import { continents } from "../schemas/continents";
import { cities } from '../schemas/cities';

//  AJUSTAR RETORNOS, TESTAR PARA CONTINENTES SEM CIDADES, TENTAR MOSTRAR UMA IMAGEM REFERENTE AO CONTINENTE SELECIONADO

const daysOfWeek: Record<string, string> = {
  Monday: "Segunda-feira",
  Tuesday: "Terça-feira",
  Wednesday: "Quarta-feira",
  Thursday: "Quinta-feira",
  Friday: "Sexta-feira",
  Saturday: "Sábado",
  Sunday: "Domingo",
};

export default function RelogioMundial() {
  const [continent, setContinent] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [timeData, setTimeData] = useState<any>(null);

  useEffect(() => {
    if (continent && city) {
      const timeZone = `${continent}/${city}`;
      fetch(`https://timeapi.io/api/time/current/zone?timeZone=${encodeURIComponent(timeZone)}`)
        .then((response) => response.json())
        .then((data) => setTimeData(data))
        .catch((error) => console.error("Failed to fetch time data:", error));
    }
  }, [continent, city]);

  return (
    <div className="p-6 space-y-6">
      <div>
        <Select onValueChange={(value) => setContinent(value)}>
          <SelectTrigger className="w-full">
            <span>{continent || "Selcione o Continente"}</span>
          </SelectTrigger>
          <SelectContent>
            {continents.map((c) => (
              <SelectItem key={c} value={c}>
                {c.replace("_", " ")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Select Cities */}
      {continent && (
        <div>
          <Select onValueChange={(value) => setCity(value)}>
            <SelectTrigger className="w-full">
              <span>{city || "Selecione a Cidade"}</span>
            </SelectTrigger>
            <SelectContent>
              {cities[continent as keyof typeof cities]?.map((city: string) => (
                <SelectItem key={city} value={city}>
                  {city.replace("_", " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Time Data Card */}
      {timeData && (
        <Card>
          <CardHeader>
            <CardTitle>Horário atual na cidade de: {city.replace("_", " ")}</CardTitle>
            <CardDescription>Fuso Horário: {timeData.timeZone?.replace("_", " ")}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Data:</strong> {timeData.date}
            </p>
            <p>
              <strong>Horário:</strong> {timeData.time}
            </p>
            <p>
              <strong>Dia da semana:</strong> {daysOfWeek[timeData.dayOfWeek] || timeData.dayOfWeek}
            </p>
            <p>
              <strong>Horário de Verão:</strong> {timeData.dstActive ? "Sim" : "Não"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
