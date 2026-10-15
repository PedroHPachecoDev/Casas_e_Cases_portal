import React, { useState, useEffect } from 'react';

function ListaImoveis() {
  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // Definimos os parâmetros de pesquisa conforme o seu exemplo
    const pesquisa = {
      fields: ["Codigo", "Categoria", "Bairro", "Cidade", "Dormitorios", "Suites", "Vagas"],
      order: { "Bairro": "asc" },
      paginacao: { "pagina": 1, "quantidade": 10 }
    };

    const key = "***"; // Substitua pela sua chave real da API
    const showtotal = 1;

    // Codificamos o objeto de pesquisa para ser seguro na URL
    const pesquisaString = encodeURIComponent(JSON.stringify(pesquisa));

    const url = `https://casascas-rest.vistahost.com.br/imoveis/listar?key=${key}&showtotal=${showtotal}&pesquisa=${pesquisaString}`;

    // Fazendo a requisição
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados da API');
        }
        return response.json();
      })
      .then((data) => {
        // Dependendo de como o retorno da Vista Host está estruturado, 
        // os dados podem vir em data.Imoveis ou diretamente em data. 
        // Ajuste conforme o JSON retornado pela API.
        setImoveis(data.Imoveis || data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro:', error);
        setErro(error.message);
        setLoading(false);
      });
  }, []); // O array vazio [] garante que a requisição rode apenas uma vez ao montar o componente

  if (loading) return <p>Carregando imóveis...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div>
      <h2>Lista de Imóveis</h2>
      <ul>
        {/* Mapeando os imóveis (verifique a estrutura exata do JSON que a API retorna) */}
        {Array.isArray(imoveis) && imoveis.map((imovel, index) => (
          <li key={imovel.Codigo || index}>
            <strong>Código:</strong> {imovel.Codigo} | 
            <strong> Categoria:</strong> {imovel.Categoria} | 
            <strong> Bairro:</strong> {imovel.Bairro} - {imovel.Cidade} | 
            <strong> Dormitórios:</strong> {imovel.Dormitorios}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaImoveis;