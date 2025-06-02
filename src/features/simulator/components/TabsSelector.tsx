import { TabsList, TabsTrigger, Tabs } from "../../../components/ui/tabs";
import { Button } from "../../../components/ui/button";
import { Eraser, File } from "lucide-react";
import { TipoSimulacao } from "../types";

interface TabsSelectorProps {
  tipoSimulacao: TipoSimulacao;
  onChange: (value: TipoSimulacao) => void;
  onClear: () => void;
}

export const TabsSelector = ({ tipoSimulacao, onChange, onClear }: TabsSelectorProps)  =>
{
  return (
    <div className="flex items-center mb-2 mt-4">
      <Tabs value={tipoSimulacao} onValueChange={(value) => onChange(value as TipoSimulacao)} >
        <TabsList>
          <TabsTrigger value="avista">À Vista</TabsTrigger>
          <TabsTrigger value="financiado">Financiado</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="ml-auto flex items-center gap-2">
        <Button
          variant="destructive"
          size="sm"
          className="h-7 gap-1 text-sm"
          onClick={onClear}
        >
          <Eraser className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Limpar</span>
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-7 gap-1 text-sm"
          disabled
        >
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Exportar</span>
        </Button>
      </div>
    </div>
  )
}