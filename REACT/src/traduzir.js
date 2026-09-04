import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';
import fs from 'fs/promises'; // Módulo nativo para salvar arquivos

const ai = new GoogleGenAI();

// Conteúdo que você quer traduzir
const conteudoOriginal = {
    "home": {
        "titulo": "Bem-vindo ao nosso site!",
        "subtitulo": "Desenvolvemos soluções incríveis para o seu negócio.",
        "botao_acao": "Começar Agora"
    },
    "rodape": {
        "direitos": "© 2026 Minha Empresa. Todos os direitos reservados."
    }
};

async function traduzirESalvar() {
    const prompt = `
    Você é um tradutor especialista em localização de softwares e sites.
    Traduza os valores do seguinte objeto JSON para o idioma Inglês (en-US).
    Mantenha rigorosamente as chaves originais intactas.

    JSON para traduzir:
    ${JSON.stringify(conteudoOriginal, null, 2)}
    `;

    try {
        console.log("Enviando dados para o Gemini...");
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
                temperature: 0.1
            }
        });

        // Converte o texto recebido em um objeto formatado
        const dadosTraduzidos = JSON.parse(response.text);
        
        // Converte o objeto de volta para texto JSON bonito (com recuos de 2 espaços)
        const jsonFormatado = JSON.stringify(dadosTraduzidos, null, 2);

        // Salva o arquivo na raiz do projeto com o nome 'en.json'
        await fs.writeFile('en.json', jsonFormatado, 'utf-8');
        
        console.log("✅ Sucesso! O arquivo 'en.json' foi criado e salvo na raiz do projeto.");

    } catch (error) {
        console.error("❌ Erro no processo:", error);
    }
}

traduzirESalvar();

