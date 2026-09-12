import { useEffect, useState } from "react";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { AlertTriangle, Target } from "lucide-react";
import { ProfitCalculationInput } from "../domain/calculateProfit";
import { calculateMaxBid } from "../domain/calculateMaxBid";
import { MaxBidResult } from "../types/analytics";
import { formatCurrency, formatPercent } from "../utils/formatters";

const roiSchema = z.coerce.number().min(0.1, "Mínimo 0.1%").max(100, "Máximo 100%");

interface MaxBidCalculatorProps {
  baseInputs: Omit<ProfitCalculationInput, "valorArrematacao"> | null;
  onApplyBid: (maxBid: number) => void;
}

export const MaxBidCalculator = ({ baseInputs, onApplyBid }: MaxBidCalculatorProps) =>
{
  const [roiInput, setRoiInput] = useState("25");
  const [result, setResult] = useState<MaxBidResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!baseInputs) return;

    const timeout = setTimeout(() => {
      const parsed = roiSchema.safeParse(roiInput);
      if (!parsed.success) {
        setError(parsed.error.errors[0].message);
        setResult(null);
        return;
      }
      setError(null);
      const res = calculateMaxBid(baseInputs, parsed.data);
      setResult(res);
    }, 300);

    return () => clearTimeout(timeout);
  }, [roiInput, baseInputs]);

  if (!baseInputs) {
    return (
      <p className="text-muted-foreground text-sm text-center py-8">
        Preencha e calcule primeiro para usar o Lance Máximo.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="roi-input">Lucro mínimo desejado (%)</Label>
        <Input
          id="roi-input"
          type="number"
          min={0.1}
          max={100}
          step={0.1}
          value={roiInput}
          onChange={(e) => setRoiInput(e.target.value)}
          placeholder="Ex: 25"
          className="max-w-xs"
        />
        {error && <p className="text-destructive text-xs">{error}</p>}
      </div>

      {result && result.achievable && result.maxBid !== null && (
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle className="text-base">Lance Máximo</CardTitle>
            </div>
            <CardDescription>Para atingir {roiInput}% de ROI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold text-primary">
              {formatCurrency(result.maxBid)}
            </div>
            <div className="text-sm text-muted-foreground">
              ROI estimado: <span className="font-medium text-emerald-600 dark:text-emerald-400">{formatPercent(result.roi!)}</span>
            </div>
            <Button onClick={() => onApplyBid(result.maxBid!)} className="w-full">
              Simular com este lance
            </Button>
          </CardContent>
        </Card>
      )}

      {result && !result.achievable && (
        <Card className="border-destructive">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <CardTitle className="text-base text-destructive">Não atingível</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{result.reason}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
