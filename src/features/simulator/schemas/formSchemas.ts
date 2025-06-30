import { z } from 'zod';

export const formSchema = z.object({
  valorArrematacao: z
    .coerce
    .number({ invalid_type_error: 'Valor de arrematação é obrigatório.' })
    .min(1, 'Valor de arrematação deve ser maior que zero.'),
  valorVenda: z
    .coerce
    .number({ invalid_type_error: 'Valor de venda é obrigatório.' })
    .min(1, 'Valor de venda deve ser maior que zero.'),
  comissaoLeiloeiro: z
    .coerce
    .number(),
  itbi: z
    .coerce
    .number({ invalid_type_error: 'ITBI é obrigatório.' })
    .min(1, 'ITBI deve ser maior que zero.'),
  registroImovel: z
    .coerce
    .number({ invalid_type_error: 'Valor do registro do imóvel é obrigatório.' })
    .min(1, 'Registro do imóvel deve ser maior ou igual a zero.'),
  gastosDesocupacao: z
    .coerce
    .number(),
  valorReformas: z
    .coerce
    .number(),
  valorOutrosGastos: z
    .coerce
    .number({ invalid_type_error: 'Outros gastos é um campo numérico.' }),
  prazoVenda: z
    .coerce
    .number({ invalid_type_error: 'Prazo de venda é um campo numérico.' })
    .min(1, 'Prazo de venda deve ser maior que zero.'),
  iptuMensal: z
    .coerce
    .number({ invalid_type_error: 'IPTU mensal é um campo numérico.' }),
  condominioMensal: z
    .coerce
    .number({ invalid_type_error: 'Condomínio mensal é um campo numérico.' }),
  comissaoImobiliaria: z
    .coerce
    .number({ invalid_type_error: 'Comissão da imobiliária é um campo numérico.' }),
  ir: z
    .coerce
    .number({ invalid_type_error: 'IR é obrigatório.' })
    .min(1, 'IR deve ser maior que zero.'),
  porcEntradaFinanciamento: z
    .coerce
    .number(),
  taxaJurosAnual: z
    .coerce
    .number(),
  prazoFinanciamento: z
    .coerce  
    .number()
    .min(1, 'O prazo de financiamento deve ser maior que zero')
});