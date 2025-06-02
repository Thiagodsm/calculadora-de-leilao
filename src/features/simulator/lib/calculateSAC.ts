import { z } from 'zod';
import { formSchema } from '../schemas/formSchemas';
import { Parcela } from '../types';

export type SimulatorFormData = z.infer<typeof formSchema>;

export function calculateSacFinancing(data: SimulatorFormData): Parcela[]
{
    const valorFinanciado = data.valorVenda * (1 - data.porcEntradaFinanciamento / 100);
    const taxaMensal = data.taxaJurosAnual / 100 / 12;
    const prazo = data.prazoFinanciamento;

    const amortizacao = valorFinanciado / prazo;
    let parcelas: Parcela[] = [];

    for (let i = 0; i < prazo; i++) 
    {
        const saldoDevedor = valorFinanciado - amortizacao * i;
        const juros = saldoDevedor * taxaMensal;
        const valorParcela = amortizacao + juros;

        parcelas.push({
            numero: i + 1,
            amortizacao,
            juros,
            valor: Number(valorParcela.toFixed(2)),
        });
    }

    return parcelas;
}

export function calcularSaldoDevedorSAC(valorFinanciado: number, prazoTotalMeses: number, parcelasPagas: number): number 
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