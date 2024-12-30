export type QueryType = {
  home: Page;
};

export type Page = {
  sessaoConhecimentos: SessaoConhecimentos;
  sessaoContato: SessaoContato;
  sessaoProjetos: sessaoProjetos;
};

type sessaoProjetos = {
  listaProjetos: Projeto[];
};
export type Projeto = {
  projetoModel?: ProjetoModel;
  projetoModels?: ProjetoModel[];
};
export type ProjetoModel = {
  titulo: string;
  fichaTecnica: FichaTecnica[];
  descricao: {
    html: string;
  };
  url: string;
  mocks: {
    mockBrowser1: {
      url: string;
    };
    mockBrowser2: {
      url: string;
    };
    mockBrowser3: {
      url: string;
    };
    mockMobile1: {
      url: string;
    };
    mockMobile2: {
      url: string;
    };
  };
  urlLive: string;
  urlGit: string;
};
type FichaTecnica = {
  titulo: string;
  icone: {
    url: string;
  };
};

export type SessaoConhecimentos = {
  id: string;
  conhecimentos: Conhecimento[];
};

export type SessaoContato = {
  dados: { email: string; telefone: string };
};

export type Conhecimento = {
  id: string;
  titulo: string;
  icone: {
    url: string;
  };
};
