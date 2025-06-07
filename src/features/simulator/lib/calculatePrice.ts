import { z } from 'zod';
import { formSchema } from '../schemas/formSchemas';
import { Parcela } from '../types';

export type SimulatorFormData = z.infer<typeof formSchema>;

export function calculatePriceFinancing(data: SimulatorFormData): Parcela[]
{
    const valorFinanciado = data.valorVenda * (1 - data.porcEntradaFinanciamento / 100);
    const taxaMensal = data.taxaJurosAnual / 100 / 12;
    const prazo = data.prazoFinanciamento;

    const valorParcela =
        (valorFinanciado * taxaMensal) /
        (1 - Math.pow(1 + taxaMensal, -prazo));

    let parcelas: Parcela[] = [];

    let saldoDevedor = valorFinanciado;

    for (let i = 0; i < prazo; i++) 
    {
        const juros = saldoDevedor * taxaMensal;
        const amortizacao = valorParcela - juros;
        saldoDevedor -= amortizacao;

        parcelas.push({
            numero: i + 1,
            amortizacao,
            juros,
            valor: valorParcela,
        });
    }

    return parcelas;
}