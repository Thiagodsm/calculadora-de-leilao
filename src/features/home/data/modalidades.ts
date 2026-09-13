import type { ModalidadeCard } from "../types";

export const modalidades: ModalidadeCard[] = [
  {
    ordem: 1,
    nome: "1º Leilão SFI",
    lanceMinimoBase: "100% da avaliação",
    taxaLeiloeiro: "5% pago pelo comprador",
    responsavelIptuCond: "Comprador responsável",
    criterioVencedor: "Maior lance",
  },
  {
    ordem: 2,
    nome: "2º Leilão SFI",
    lanceMinimoBase: "60% da avaliação",
    taxaLeiloeiro: "5% pago pelo comprador",
    responsavelIptuCond: "Comprador responsável",
    criterioVencedor: "Maior lance",
  },
  {
    ordem: 3,
    nome: "Licitação Aberta",
    lanceMinimoBase: "Tabela Caixa",
    taxaLeiloeiro: "0% (Caixa paga ao leiloeiro)",
    responsavelIptuCond: "Caixa quita pendências",
    criterioVencedor: "Melhor proposta aberta",
    destaque: "Sem taxa",
  },
  {
    ordem: 4,
    nome: "Venda Online — Concorrência Fechada",
    lanceMinimoBase: "Tabela Caixa",
    taxaLeiloeiro: "0% (Caixa paga ao leiloeiro)",
    responsavelIptuCond: "Caixa quita pendências",
    criterioVencedor: "Melhor proposta fechada",
    destaque: "Sem taxa",
  },
  {
    ordem: 5,
    nome: "Venda Direta Online",
    lanceMinimoBase: "Tabela Caixa",
    taxaLeiloeiro: "0% (Caixa paga ao leiloeiro)",
    responsavelIptuCond: "Caixa quita pendências",
    criterioVencedor: "Primeiro a aceitar o preço",
    destaque: "Sem taxa",
  },
];
