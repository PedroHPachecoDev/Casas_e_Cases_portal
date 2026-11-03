// Integração com a API Vista Host CRM
// Funções puras e assíncronas — sem estado, sem JSX

// ---------------------------------------------------------------------------
// Tipos
// ---------------------------------------------------------------------------

export type ImovelField =
  | 'Codigo'
  | 'Categoria'
  | 'Bairro'
  | 'Cidade'
  | 'Dormitorios'
  | 'Suites'
  | 'Vagas';

export type Imovel = {
  Codigo?: string;
  Categoria?: string;
  Bairro?: string;
  Cidade?: string;
  Dormitorios?: number;
  Suites?: number;
  Vagas?: number;
};

export type ListarImoveisParams = {
  fields?: ImovelField[];
  order?: Record<string, 'asc' | 'desc'>;
  pagina?: number;
  quantidade?: number;
};

// ---------------------------------------------------------------------------
// Configuração da API
// ---------------------------------------------------------------------------

const API_KEY = import.meta.env.VITE_VISTA_API_KEY ?? '';
const API_BASE_URL = 'https://casascas-rest.vistahost.com.br';

function apiUrl(path: string) {
  return `${API_BASE_URL}${path}`;
}

// ---------------------------------------------------------------------------
// Funções de API
// ---------------------------------------------------------------------------

/**
 * Lista imóveis do CRM Vista Host.
 * A API key deve estar em VITE_VISTA_API_KEY no arquivo .env
 */
export async function listarImoveis(params: ListarImoveisParams = {}): Promise<Imovel[]> {
  const {
    fields = ['Codigo', 'Categoria', 'Bairro', 'Cidade', 'Dormitorios', 'Suites', 'Vagas'],
    order = { Bairro: 'asc' },
    pagina = 1,
    quantidade = 10,
  } = params;

  const pesquisa = {
    fields,
    order,
    paginacao: { pagina, quantidade },
  };

  const pesquisaString = encodeURIComponent(JSON.stringify(pesquisa));
  const url = apiUrl(`/imoveis/listar?key=${API_KEY}&showtotal=1&pesquisa=${pesquisaString}`);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Erro ao listar imóveis: ${res.status}`);

  const data = await res.json();
  return data.Imoveis ?? data ?? [];
}
