import { Parcela, SimulatorResult } from "./index";

export type SensitivityCell = {
  lucroLiquido: number;
  roi: number;
  isBaseCase: boolean;
  isUserScenario: boolean;
};

export type SensitivityRow = {
  prazoVenda: number;
  isUserScenario: boolean;
  cells: SensitivityCell[];
};

export type SensitivityMatrix = {
  rows: SensitivityRow[];
  discountCols: number[];
};

export type MaxBidResult = {
  maxBid: number | null;
  achievable: boolean;
  roi: number | null;
  reason?: string;
};

export type ExportPayload = {
  result: SimulatorResult;
  parcelas: Parcela[];
  sensitivity?: SensitivityMatrix;
  exportedAt: string;
};
