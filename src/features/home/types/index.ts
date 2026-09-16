export type ModalidadeCard = {
  ordem: number;
  nome: string;
  lanceMinimoBase: string;
  taxaLeiloeiro: string;
  responsavelIptuCond: string;
  criterioVencedor: string;
  destaque?: string;
};

export type PassoFuncionamento = {
  numero: number;
  titulo: string;
  descricao: string;
  cta?: {
    label: string;
    href: string;
  };
};

export type CustoDetalhe = {
  descricao: string;
  valor: number;
};

export type CasoSucesso = {
  investidor: {
    nome: string;
    perfil: string;
  };
  imovel: {
    tipo: string;
    localidade: string;
    valorArrematacao: number;
    modalidadeFinanciamento: string;
  };
  custos: CustoDetalhe[];
  resultado: {
    precoVenda: number;
    lucroLiquido: number;
    roe?: number;
  };
  depoimento: string;
  avatarSrc?: string;
  avatarFallback: string;
};

export type RecursoAvancado = {
  iconName: string;
  titulo: string;
  descricao: string;
};
