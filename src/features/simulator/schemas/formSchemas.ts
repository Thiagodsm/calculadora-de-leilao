import { z } from 'zod';

export const formSchema = z.object({
  valorArrematacao: z
    .coerce
    .number({ invalid_type_error: 'Valor de arrematação é obrigatório.' })
    .min(1, 'Valor de arrematação deve ser maior que zero.')
    .lte(1000000000, "Máximo de 10 dígitos numéricos"),
  valorVenda: z
    .coerce
    .number({ invalid_type_error: 'Valor de venda é obrigatório.' })
    .min(1, 'Valor de venda deve ser maior que zero.')
    .lte(1000000000, "Máximo de 10 dígitos numéricos"),
  comissaoLeiloeiro: z
    .coerce
    .number()
    .lte(100, "Máximo de 3 dígitos numéricos"),
  itbi: z
    .coerce
    .number({ invalid_type_error: 'ITBI é obrigatório.' })
    .min(1, 'ITBI deve ser maior que zero.')
    .lte(100, "Máximo de 3 dígitos numéricos"),
  registroImovel: z
    .coerce
    .number({ invalid_type_error: 'Valor do registro do imóvel é obrigatório.' })
    .min(1, 'Registro do imóvel deve ser maior ou igual a zero.')
    .lte(10000000, "Máximo de 8 dígitos numéricos"),
  gastosDesocupacao: z
    .coerce
    .number()
    .lte(10000000, "Máximo de 8 dígitos numéricos"),
  valorReformas: z
    .coerce
    .number()
    .lte(10000000, "Máximo de 8 dígitos numéricos"),
  valorOutrosGastos: z
    .coerce
    .number({ invalid_type_error: 'Outros gastos é um campo numérico.' })
    .lte(10000000, "Máximo de 8 dígitos numéricos"),
  prazoVenda: z
    .coerce
    .number({ invalid_type_error: 'Prazo de venda é um campo numérico.' })
    .min(1, 'Prazo de venda deve ser maior que zero.')
    .lte(999, "Máximo de 3 dígitos numéricos"),
  iptuMensal: z
    .coerce
    .number({ invalid_type_error: 'IPTU mensal é um campo numérico.' })
    .lte(10000000, "Máximo de 8 dígitos numéricos"),
  condominioMensal: z
    .coerce
    .number({ invalid_type_error: 'Condomínio mensal é um campo numérico.' })
    .lte(10000000, "Máximo de 8 dígitos numéricos"),
  comissaoImobiliaria: z
    .coerce
    .number({ invalid_type_error: 'Comissão da imobiliária é um campo numérico.' })
    .lte(10000000, "Máximo de 8 dígitos numéricos"),
  ir: z
    .coerce
    .number({ invalid_type_error: 'IR é obrigatório.' })
    .min(1, 'IR deve ser maior que zero.')
    .lte(100, "Máximo de 3 dígitos numéricos"),
  porcEntradaFinanciamento: z
    .coerce
    .number()
    .lte(100, "Máximo de 3 dígitos numéricos"),
  taxaJurosAnual: z
    .coerce
    .number()
    .lte(100, "Máximo de 3 dígitos numéricos"),
  prazoFinanciamento: z
    .coerce  
    .number()
    .min(1, 'O prazo de financiamento deve ser maior que zero')
    .lte(9999, "Máximo de 4 dígitos numéricos")
});