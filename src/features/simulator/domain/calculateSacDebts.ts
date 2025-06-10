export function calculateSacDebts(valorFinanciado: number, prazoTotalMeses: number, parcelasPagas: number): number 
{
    // Amortização constante no sistema SAC
    const amortizacao = parseFloat((valorFinanciado / prazoTotalMeses).toFixed(2));

    let saldoDevedor = valorFinanciado - amortizacao;

    // Itera por cada parcela paga
    for (let i = 0; i < parcelasPagas; i++) {  
        saldoDevedor -= amortizacao;
    }

    return saldoDevedor;  
}