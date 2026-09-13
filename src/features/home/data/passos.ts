import type { PassoFuncionamento } from "../types";

export const passos: PassoFuncionamento[] = [
  {
    numero: 1,
    titulo: "Dados de Aquisição",
    descricao:
      "Informe o valor do lance, taxa do leiloeiro e modalidade de compra (à vista ou financiado). A calculadora identifica automaticamente os custos de entrada.",
  },
  {
    numero: 2,
    titulo: "Custos de Regularização",
    descricao:
      "Calcule dívidas de condomínio e IPTU, custos de desocupação, reforma e demais despesas pós-arrematação que impactam seu resultado real.",
  },
  {
    numero: 3,
    titulo: "Projeções de Venda",
    descricao:
      "Defina o preço esperado de venda e o prazo. A calculadora gera uma matriz de sensibilidade para diferentes cenários de preço e tempo — você vê o lucro em cada combinação.",
  },
  {
    numero: 4,
    titulo: "Tabela de Amortização",
    descricao:
      "Para operações financiadas (SAC ou Price), visualize parcela a parcela com saldo devedor e total pago até a venda.",
    cta: {
      label: "Acessar Calculadora",
      href: "/simulador",
    },
  },
];
