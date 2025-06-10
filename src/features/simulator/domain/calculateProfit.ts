import { z } from 'zod';
import { formSchema } from '../schemas/formSchemas';
import { Parcela, SimulatorResult, TipoFinanciamento } from '../types';

import { calculatePriceFinancing } from './calculatePrice';
import { calculateSacFinancing } from './calculateSac';
import { calculatePriceDebts } from './calculatePriceDebts';
import { calculateSacDebts } from './calculateSacDebts';

export type SimulatorFormData = z.infer<typeof formSchema>;

interface ProfitCalculationInput extends SimulatorFormData
{
    isFinanced: boolean;
    tipoFinanciamento: TipoFinanciamento;
}

export function calculateProfits({ isFinanced, tipoFinanciamento, ...data }: ProfitCalculationInput): SimulatorResult
{
    let valorEntradaFinanciamento = 0, porcFinanciamento = 0, valorFinanciamento = 0;
    let saldoDevedor = 0;
    let parcelas: Parcela[] = [];
    let totalPagoParcelas = 0;
    let taxaJurosMensal = 0;

    if (isFinanced)
    {
        valorEntradaFinanciamento = data.valorArrematacao * (data.porcEntradaFinanciamento / 100);
        porcFinanciamento = (1 - (data.porcEntradaFinanciamento / 100)) * 100;
        valorFinanciamento = data.valorArrematacao * (porcFinanciamento / 100);

        taxaJurosMensal = parseFloat((data.taxaJurosAnual / 12 / 100).toFixed(5));

        if (tipoFinanciamento === "SAC")
        {
            parcelas = calculateSacFinancing(data);
            saldoDevedor = calculateSacDebts(valorFinanciamento, data.prazoFinanciamento, data.prazoVenda);
        }
        else if (tipoFinanciamento === "PRICE")
        {
            parcelas = calculatePriceFinancing(data);
            saldoDevedor = calculatePriceDebts(valorFinanciamento, data.prazoFinanciamento, taxaJurosMensal, data.prazoVenda);
        }

        totalPagoParcelas = parcelas
                .filter((p) => p.numero <= data.prazoVenda)
                .reduce((sum, p) => sum + p.valor, 0);
    }

    const valorComissaoLeiloeiro = (data.valorArrematacao * data.comissaoLeiloeiro) / 100;
    const valorITBI = (data.valorArrematacao * data.itbi) / 100;
    const totalIptu = data.prazoVenda * data.iptuMensal;
    const totalCondominio = data.prazoVenda * data.condominioMensal;

    const totalCustosParciais = valorEntradaFinanciamento +
                                valorComissaoLeiloeiro + 
                                valorITBI + 
                                data.registroImovel + 
                                data.gastosDesocupacao + 
                                data.valorReformas + 
                                data.valorOutrosGastos;

    const totalCustosAteVenda = totalIptu + totalCondominio + totalPagoParcelas;
    const valorComissaoCorretor = (data.valorVenda * data.comissaoImobiliaria) / 100;

    let totalInvestido = 0;
    if (isFinanced)
        totalInvestido = totalCustosParciais + totalCustosAteVenda
    else
        totalInvestido = data.valorArrematacao + totalCustosParciais + totalCustosAteVenda;

    const valorIR = (data.valorVenda - totalInvestido - valorComissaoCorretor - saldoDevedor) * (data.ir / 100);

    const totalCustosVenda = valorComissaoCorretor + valorIR;

    const lucroLiquido = data.valorVenda - totalInvestido - totalCustosVenda - saldoDevedor;

  return {
    valorArrematacao: data.valorArrematacao,
    valorVenda: data.valorVenda,
    porcEntradaFinanciamento: data.porcEntradaFinanciamento,
    valorEntradaFinanciamento,
    porcFinanciamento,
    valorFinanciamento,
    taxaJurosAnual: data.taxaJurosAnual,
    taxaJurosMensal: data.taxaJurosAnual / 12,
    prazoFinanciamento: data.prazoFinanciamento,
    comissaoLeiloeiro: data.comissaoLeiloeiro,
    valorComissaoLeiloeiro,
    itbi: data.itbi,
    valorITBI,
    registroImovel: data.registroImovel,
    valorDesocupacao: data.gastosDesocupacao,
    valorReformas: data.valorReformas,
    valorOutrosGastos: data.valorOutrosGastos,
    totalCustosParciais,
    prazoVenda: data.prazoVenda,
    iptuMensal: data.iptuMensal,
    totalIptu,
    condominioMensal: data.condominioMensal,
    totalCondominio,
    totalCustosAteVenda,
    comissaoCorretor: data.comissaoImobiliaria,
    valorComissaoCorretor,
    ir: data.ir,
    valorIR,
    totalCustosVenda,
    totalInvestido,
    lucroLiquido,
    tipoSimulacao: isFinanced ? "financiado" : "avista",
    tipoFinanciamento: tipoFinanciamento,
    totalPagoParcelas: totalPagoParcelas,
    saldoDevedor: saldoDevedor
  };
}