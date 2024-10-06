import { z } from 'zod';

export const formSchema = z.object({
  valorArrematacao: z
    .coerce
    .number({ invalid_type_error: 'Valor de arrematação é obrigatório.' })
    .min(0, 'Valor de arrematação deve ser maior que zero.'),
  valorVenda: z
    .coerce
    .number({ invalid_type_error: 'Valor de venda é obrigatório.' })
    .min(0, 'Valor de venda deve ser maior que zero.'),
  comissaoLeiloeiro: z
    .number(),
  itbi: z
    .coerce
    .number({ invalid_type_error: 'ITBI é obrigatório.' })
    .min(0, 'ITBI deve ser maior que zero.'),
  registroImovel: z
    .coerce
    .number({ invalid_type_error: 'Registro do imóvel é um campo numérico.' }),
  valorDesocupacao: z
    .coerce
    .number(),
  reforma: z
    .coerce
    .number({ invalid_type_error: 'Reforma é um campo numérico.' }),
  outrosGastos: z
    .coerce
    .number({ invalid_type_error: 'Outros gastos é um campo numérico.' }),
  prazoVendaMeses: z
    .coerce
    .number({ invalid_type_error: 'Prazo de venda é um campo numérico.' }),
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
    .min(0, 'IR deve ser maior que zero.'),
});