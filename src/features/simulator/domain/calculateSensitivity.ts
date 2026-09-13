import { calculateProfits, ProfitCalculationInput } from "./calculateProfit";
import { SensitivityMatrix, SensitivityRow, SensitivityCell } from "../types/analytics";

const DEFAULT_TIME_ROWS = [3, 6, 12, 18, 24];
const DEFAULT_DISCOUNT_COLS = [0, 5, 10, 15];

export function calculateSensitivity(
  baseInputs: ProfitCalculationInput,
  timeRows: number[] = DEFAULT_TIME_ROWS,
  discountCols: number[] = DEFAULT_DISCOUNT_COLS
): SensitivityMatrix
{
  const allTimes = timeRows.includes(baseInputs.prazoVenda)
    ? [...timeRows]
    : [...timeRows, baseInputs.prazoVenda].sort((a, b) => a - b);

  const rows: SensitivityRow[] = allTimes.map((time) => {
    const isUserScenario = !DEFAULT_TIME_ROWS.includes(time);

    const cells: SensitivityCell[] = discountCols.map((discount) => {
      const adjustedVenda = baseInputs.valorVenda * (1 - discount / 100);
      const clonedInputs: ProfitCalculationInput = {
        ...baseInputs,
        prazoVenda: time,
        valorVenda: adjustedVenda,
      };
      const result = calculateProfits(clonedInputs);
      const isBaseCase = time === baseInputs.prazoVenda && discount === 0;

      return {
        lucroLiquido: result.lucroLiquido,
        roi: result.roi,
        isBaseCase,
        isUserScenario,
      };
    });

    return { prazoVenda: time, isUserScenario, cells };
  });

  return { rows, discountCols };
}
