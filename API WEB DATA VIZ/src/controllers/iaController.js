const model = require("../models/iaModel");

const { GoogleGenAI } = require("@google/genai");
const chatIA = new GoogleGenAI({ apiKey: process.env.MINHA_CHAVE });

// função para gerar respostas usando o gemini
async function gerarResposta(mensagem) {

    try {
        // gerando conteúdo com base na pergunta
        const modeloIA = chatIA.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Em um paragráfo responda: ${mensagem}`

        });
        const resposta = (await modeloIA).text;
        const tokens = (await modeloIA).usageMetadata;

        console.log(resposta);
        console.log("Uso de Tokens:", tokens);

        return resposta;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function cadastrar(req, res) {
    const titulo = req.body.titulo;
    const desc = req.body.desc;

    if(titulo === undefined || desc === undefined) return res.status(400).send(false);

    const resultado = await model.cadastrar(titulo, desc);

    if(!resultado) return res.status(400).send(false);

    return res.status(200).json(resultado);
}


module.exports = {
    gerarResposta,
    cadastrar
}