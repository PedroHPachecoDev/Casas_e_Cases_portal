import React, { useState, useEffect } from "react";

function ListarImoveis(){
    const [imoveis, setImoveis] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const pesquisa = {
            fields: ["Codigo", "Categoria", "Bairro", "Cidade", "Dormitorios", "Suites", "Vagas"],
            order: { "Bairro": "asc" },
            paginacao: { "pagina": 1, "quantidade": 10 }
    };

    const key = "***";
    const showtotal = 1;

    const pesquisaString = encodeURIComponent(JSON.stringify(pesquisa));

    const url = `https://casascas-rest.vistahost.com.br/imoveis/listar?key=${key}&showtotal=${showtotal}&pesquisa=${pesquisaString}`
    })
}