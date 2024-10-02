import { z } from 'zod';

export const formSchema = z.object({
  valorArrematacao: z
    .coerce
    .number({ invalid_type_error: 'Valor de arrematação é obrigatório' })
    .min(0, 'Valor de arrematação deve ser maior que zero'),
  valorVenda: z
    .coerce
    .number({ invalid_type_error: 'Valor de venda é obrigatório' })
    .min(0, 'Valor de venda deve ser maior que zero'),
  comissaoLeiloeiro: z
    .coerce
    .number({ invalid_type_error: 'Comissão do leiloeiro é obrigatória' }),
  itbi: z
    .coerce
    .number({ invalid_type_error: 'ITBI é obrigatório' })
    .min(0, 'ITBI deve ser maior que zero'),
  registroImovel: z
    .coerce
    .number({ invalid_type_error: 'Registro do imóvel é obrigatório' }),
  desocupacao: z
    .coerce
    .number({ invalid_type_error: 'Desocupação é obrigatória' }),
  reforma: z
    .coerce
    .number({ invalid_type_error: 'Reforma é obrigatória' }),
  outrosGastos: z
    .coerce
    .number({ invalid_type_error: 'Outros gastos são obrigatórios' }),
  mesesVenda: z
    .coerce
    .number({ invalid_type_error: 'Prazo de venda é obrigatório' }),
  iptuMensal: z
    .coerce
    .number({ invalid_type_error: 'IPTU mensal é obrigatório' })
    .min(0, 'IPTU mensal deve ser maior que zero'),
  condominioMensal: z
    .coerce
    .number({ invalid_type_error: 'Condomínio mensal é obrigatório' }),
  comissaoImobiliaria: z
    .coerce
    .number({ invalid_type_error: 'Comissão da imobiliária é obrigatória' }),
  ir: z
    .coerce
    .number({ invalid_type_error: 'IR é obrigatório' })
    .min(0, 'IR deve ser maior que zero'),
});