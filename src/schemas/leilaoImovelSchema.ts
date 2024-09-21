import { z } from 'zod';

export const leilaoImovelSchema = z.object({
  valorArrematacao: z
    .number({ invalid_type_error: 'Valor de arrematação é obrigatório' })
    .min(1, 'Valor de arrematação deve ser pelo menos 1'),
  valorVenda: z
    .number({ invalid_type_error: 'Valor de venda é obrigatório' })
    .min(1, 'Valor de venda deve ser pelo menos 1'),
  comissaoLeiloeiro: z
    .number({ invalid_type_error: 'Comissão do leiloeiro é obrigatória' })
    .min(0, 'Comissão do leiloeiro deve ser pelo menos 0%'),
  itbi: z
    .number({ invalid_type_error: 'ITBI é obrigatório' })
    .min(0, 'ITBI deve ser pelo menos 0%'),
  registroImovel: z
    .number({ invalid_type_error: 'Registro do imóvel é obrigatório' })
    .min(0, 'Registro do imóvel deve ser pelo menos 0'),
  desocupacao: z
    .number({ invalid_type_error: 'Desocupação é obrigatória' })
    .min(0, 'Desocupação deve ser pelo menos 0'),
  reforma: z
    .number({ invalid_type_error: 'Reforma é obrigatória' })
    .min(0, 'Reforma deve ser pelo menos 0'),
  outrosGastos: z
    .number({ invalid_type_error: 'Outros gastos são obrigatórios' })
    .min(0, 'Outros gastos devem ser pelo menos 0'),
  mesesVenda: z
    .number({ invalid_type_error: 'Prazo de venda é obrigatório' })
    .min(1, 'Prazo de venda deve ser pelo menos 1 mês'),
  iptuMensal: z
    .number({ invalid_type_error: 'IPTU mensal é obrigatório' })
    .min(0, 'IPTU mensal deve ser pelo menos 0'),
  condominioMensal: z
    .number({ invalid_type_error: 'Condomínio mensal é obrigatório' })
    .min(0, 'Condomínio mensal deve ser pelo menos 0'),
  comissaoImobiliaria: z
    .number({ invalid_type_error: 'Comissão da imobiliária é obrigatória' })
    .min(0, 'Comissão da imobiliária deve ser pelo menos 0%'),
  ir: z
    .number({ invalid_type_error: 'IR é obrigatório' })
    .min(0, 'IR deve ser pelo menos 0%'),
});