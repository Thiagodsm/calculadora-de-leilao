import avatarMale from "../../../assets/leonardo.jpg";
import avatarFemale from "../../../assets/raissa.png";
import type { CasoSucesso } from "../types";

export const casosDeSuccesso: CasoSucesso[] = [
  {
    investidor: {
      nome: "Leonardo Matino Madeira",
      perfil: "Investidor iniciante em Campinas-SP",
    },
    avatarSrc: avatarMale,
    avatarFallback: "LM",
    imovel: {
      tipo: "Casa",
      localidade: "Praia Grande-SP",
      valorArrematacao: 187000,
      modalidadeFinanciamento: "Financiado (5% entrada · 7,25% a.a.)",
    },
    custos: [
      { descricao: "Contrato Caixa", valor: 3600 },
      { descricao: "ITBI", valor: 4675 },
      { descricao: "Reforma", valor: 1400 },
      { descricao: "Registro", valor: 2458.3 },
      { descricao: "Dívida interna", valor: 0 },
      { descricao: "Entrada (5%)", valor: 9350 },
      { descricao: "Parcelas SAC (3 meses)", valor: 4691.38 },
      { descricao: "Comissão imobiliária (6%)", valor: 17520 },
      { descricao: "Saldo devedor quitado", valor: 176169.58 },
    ],
    resultado: {
      precoVenda: 292000,
      lucroLiquido: 72135.74,
    },
    depoimento:
      "Usei a calculadora antes de dar o lance e soube exatamente onde estava pisando. O lucro veio dentro do projetado — sem surpresas.",
  },
  {
    investidor: {
      nome: "Raissa Soares",
      perfil: "Investidora em Santos-SP",
    },
    avatarSrc: avatarFemale,
    avatarFallback: "RS",
    imovel: {
      tipo: "Apartamento",
      localidade: "Guarujá-SP",
      valorArrematacao: 187000,
      modalidadeFinanciamento: "Financiado (5,56% entrada · 10,47% a.a.)",
    },
    custos: [
      { descricao: "Contrato Caixa", valor: 1851.23 },
      { descricao: "ITBI", valor: 5610 },
      { descricao: "Reforma", valor: 4415.48 },
      { descricao: "Registro", valor: 3924.84 },
      { descricao: "Dívida interna", valor: 5725.18 },
      { descricao: "Entrada (5,56%)", valor: 10397.2 },
      { descricao: "Parcelas SAC (6 meses)", valor: 12124.33 },
      { descricao: "Condomínio (6 meses)", valor: 2916 },
      { descricao: "Comissão imobiliária (6%)", valor: 14400 },
      { descricao: "Saldo devedor quitado", valor: 173659.42 },
    ],
    resultado: {
      precoVenda: 240000,
      lucroLiquido: 4976.32,
    },
    depoimento:
      "Mesmo com a dívida interna do imóvel, a calculadora me mostrou que a operação ainda era lucrativa. Confiei nos números e funcionou.",
  },
];
