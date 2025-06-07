// mudar para ingles
export type TipoFinanciamento = "SAC" | "PRICE";
export type TipoSimulacao = "avista" | "financiado";

export type Parcela = {
  numero: number;
  valor: number;
  amortizacao?: number; // caso queira detalhar no futuro
  juros?: number;
  saldoDevedor?: number;
};

export type SimulatorResult = {
  tipoSimulacao: TipoSimulacao;
  valorArrematacao: number;
  valorVenda: number;
  porcEntradaFinanciamento: number;
  valorEntradaFinanciamento: number;
  porcFinanciamento: number;
  valorFinanciamento: number;
  taxaJurosAnual: number;
  taxaJurosMensal: number;
  prazoFinanciamento: number;
  comissaoLeiloeiro: number;
  valorComissaoLeiloeiro: number;
  itbi: number;
  valorITBI: number;
  registroImovel: number;
  valorDesocupacao: number;
  valorReformas: number;
  valorOutrosGastos: number;
  totalCustosParciais: number;
  prazoVenda: number;
  iptuMensal: number;
  totalIptu: number;
  condominioMensal: number;
  totalCondominio: number;
  totalCustosAteVenda: number;
  comissaoCorretor: number;
  valorComissaoCorretor: number;
  ir: number;
  valorIR: number;
  totalCustosVenda: number;
  totalInvestido: number;
  lucroLiquido: number;
  parcelas?: Parcela[];
  tipoFinanciamento: TipoFinanciamento,
  totalPagoParcelas: number;
  saldoDevedor: number;
};