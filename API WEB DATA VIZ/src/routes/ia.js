const express = require('express');
const router = express.Router();

const controller = require('../controllers/iaController');

router.post("/perguntar", async (req, res) => {
    const pergunta = req.body.pergunta;

    try {
        const resultado = await controller.gerarResposta(pergunta);
        res.json({ resultado });
    } 
    catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.post('/cadastrar', async (req, res) => {
    controller.cadastrar(req, res);
})

module.exports = router
