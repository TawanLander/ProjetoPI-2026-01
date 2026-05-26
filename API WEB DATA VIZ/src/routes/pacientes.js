const express = require('express');
const router = express.Router();

const controller = require('../controllers/pacientesController');

router.post('/cadastrar', (req, res) => {
    controller.cadastrar(req, res);
});

router.post('/remover', (req, res) => {
    controller.remover(req, res);
});

router.get('/listar', (req, res) => {
    controller.listar(req, res);
});

router.post('/atualizar', (req, res) => {
    controller.atualizar(req, res);
});

router.get('/obterTemp/:idPaciente', (req,res) => {
    controller.obterTemp(req,res);
});

router.get('/trazerPulseiras', (req, res) => {
    controller.trazerPulseiras(req, res);
})
module.exports = router