const express = require("express");
const router = express.Router();
const { ambiente_processo } = require("../../app.js");

const caminho_env = ambiente_processo === "producao" ? ".env" : ".env.dev";
const path = require("path");
require("dotenv").config({ path: caminho_env });

const controller = require("../controllers/iaController");

router.post("/perguntar", async (req, res) => {
  const pergunta = req.body.pergunta;

  try {
    const resultado = await controller.gerarResposta(req, res, pergunta);
    res.json({ resultado });
  } catch (error) {
    if (error.message?.includes("503")) {
      return res.status(503).send(false);
    } else if (error.message?.includes("429")) {
      return res.status(429).send(false);
    }
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.post("/cadastrar", (req, res) => {
  controller.cadastrar(req, res);
});

router.post("/salvar", (req, res) => {
  controller.salvarResposta(req, res);
});

router.get('/pegarRespostas', (req, res) => {
  controller.pegarRespostas(req, res);
})

router.get('/contatos', (req, res) => {
  controller.contatos(req, res);
});

module.exports = router;
