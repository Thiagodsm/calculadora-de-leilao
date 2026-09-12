import { calculateProfits, ProfitCalculationInput } from "./calculateProfit";
import { MaxBidResult } from "../types/analytics";

export function calculateMaxBid(
  baseInputs: Omit<ProfitCalculationInput, "valorArrematacao">,
  targetRoiPercent: number,
  maxIterations = 1000
): MaxBidResult
{
  let lo = 1;
  let hi = baseInputs.valorVenda;

  for (let i = 0; i < maxIterations; i++)
  {
    if (lo > hi) break;
    const mid = Math.floor((lo + hi) / 2);
    const result = calculateProfits({ ...baseInputs, valorArrematacao: mid });
    const achieved = result.roi;

    if (achieved >= targetRoiPercent) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  if (hi < 1) {
    return {
      achievable: false,
      maxBid: null,
      roi: null,
      reason: "Lucro desejado não é atingível com os custos informados",
    };
  }

  const finalResult = calculateProfits({ ...baseInputs, valorArrematacao: hi });

  if (finalResult.roi < targetRoiPercent - 0.1) {
    return {
      achievable: false,
      maxBid: null,
      roi: null,
      reason: "Lucro desejado não é atingível com os custos informados",
    };
  }

  return {
    achievable: true,
    maxBid: hi,
    roi: finalResult.roi,
  };
}
