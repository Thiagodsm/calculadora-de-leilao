import { z } from 'zod';
import { formSchema } from '../schemas/formSchemas';
import { Parcela, SimulatorResult, TipoFinanciamento } from '../types';

import { calcularSaldoDevedorPrice, calculatePriceFinancing } from './calculatePrice';
import { calcularSaldoDevedorSAC, calculateSacFinancing } from './calculateSAC';

export type SimulatorFormData = z.infer<typeof formSchema>;

interface ProfitCalculationInput extends SimulatorFormData
{
    isFinanced: boolean;
    tipoFinanciamento: TipoFinanciamento;
}

export function calculateProfits({ isFinanced, tipoFinanciamento, ...data }: ProfitCalculationInput): SimulatorResult
{
    
    const taxaJurosMensal = parseFloat((data.taxaJurosAnual / 12 / 100).toFixed(5));

    const valorEntradaFinanciamento = isFinanced
        ? data.valorArrematacao * (data.porcEntradaFinanciamento / 100)
        : 0;

    const porcFinanciamento = isFinanced
        ? 100 - data.porcEntradaFinanciamento
        : 0;

    const valorFinanciamento = isFinanced
        ? data.valorArrematacao * (porcFinanciamento / 100)
        : 0;

    // Cálculo das parcelas
    let parcelas: Parcela[] = [];

    if (isFinanced && tipoFinanciamento === "SAC") {
        parcelas = calculateSacFinancing(data);
    } else if (isFinanced && tipoFinanciamento === "PRICE") {
        parcelas = calculatePriceFinancing(data);
    }

    const totalPagoParcelas = isFinanced
    ? parcelas
        .filter((p) => p.numero <= data.prazoVenda)
        .reduce((sum, p) => sum + p.valor, 0)
    : 0;

    let valorTotalParcelasPrice = 0;
    let valorTotalParcelasSAC = 0;
    let saldoDevedorPrice = 0;
    let saldoDevedorSAC = 0;

  

    // Calcula o saldo devedor
    if (isFinanced && tipoFinanciamento === "PRICE") {
        saldoDevedorPrice = calcularSaldoDevedorPrice(
        valorFinanciamento,
        data.prazoFinanciamento,
        taxaJurosMensal,
        data.prazoVenda
        );
        valorTotalParcelasPrice = totalPagoParcelas;
    }

    if (isFinanced && tipoFinanciamento === "SAC") {
        saldoDevedorSAC = calcularSaldoDevedorSAC(
        valorFinanciamento,
        data.prazoFinanciamento,
        data.prazoVenda
        );
        valorTotalParcelasSAC = totalPagoParcelas;
    }

    //const totalPagoComEntrada = valorEntradaFinanciamento + totalPagoParcelas;

    const valorComissaoLeiloeiro = (data.valorArrematacao * data.comissaoLeiloeiro) / 100;
    const valorITBI = (data.valorArrematacao * data.itbi) / 100;
    const totalIptu = data.prazoVenda * data.iptuMensal;
    const totalCondominio = data.prazoVenda * data.condominioMensal;

    const totalCustosParciais = valorComissaoLeiloeiro + valorITBI + data.registroImovel + data.gastosDesocupacao + data.valorReformas + data.valorOutrosGastos + valorEntradaFinanciamento;

    const totalCustosAteVenda = totalIptu + totalCondominio + totalPagoParcelas;

    const valorComissaoCorretor = (data.valorVenda * data.comissaoImobiliaria) / 100;

    const totalInvestido = isFinanced
        ? totalCustosParciais + totalCustosAteVenda
        : data.valorArrematacao + totalCustosParciais + totalCustosAteVenda;

    const saldoDevedor =
        tipoFinanciamento === "PRICE" ? saldoDevedorPrice : tipoFinanciamento === "SAC" ? saldoDevedorSAC : 0;

    const valorIR =
        (data.valorVenda - totalInvestido - valorComissaoCorretor - saldoDevedor) *
        (data.ir / 100);

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
    taxaJurosMensal,
    prazoFinanciamento: data.prazoFinanciamento,
    valorTotalParcelasPrice,
    valorTotalParcelasSAC,
    saldoDevedorPrice,
    saldoDevedorSAC,
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
    //comissaoImobiliaria: data.comissaoImobiliaria,
    //irGanhoCapital: valorIR,
    //condominioAtrasado: totalCondominio,
    //iptuAtrasado: totalIptu,
    //outrosCustos: data.gastosDesocupacao + data.valorReformas + data.valorOutrosGastos + data.registroImovel,
    //totalCustos: totalInvestido + totalCustosVenda,
    //valorEntrada: valorEntradaFinanciamento,
    //valorFinanciado: valorFinanciamento,
    //tipoFinanciamento,
    //parcelas,
    //totalPagoParcelas,
    //totalPagoComEntrada,
  };
}