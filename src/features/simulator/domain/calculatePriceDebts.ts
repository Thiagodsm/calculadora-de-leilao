export function calculatePriceDebts(valorFinanciado: number, prazoTotalMeses: number, taxaJurosMensal: number, parcelasPagas: number ): number
{
    // Calcula o valor da parcela fixa no sistema Price
    const parcelaPrice = valorFinanciado * (taxaJurosMensal / (1 - Math.pow(1 + taxaJurosMensal, -prazoTotalMeses)));

    // Calcula o saldo devedor usando a fórmula para o saldo devedor no sistema Price
    const saldoDevedor = parcelaPrice * ((1 - Math.pow(1 + taxaJurosMensal, parcelasPagas - prazoTotalMeses)) / taxaJurosMensal);
    
    return saldoDevedor; 
}