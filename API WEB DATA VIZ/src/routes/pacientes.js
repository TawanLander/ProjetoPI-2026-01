const express = require('express');
const app = express.Router();

const controller = require('../controllers/pacientesController');

app.post('/cadastrar', (req, res) => {
    controller.cadastrar(req, res);
});

app.post('/remover', (req, res) => {
    controller.remover(req, res);
});

app.get('/listar', (req, res) => {
    controller.listar(req, res);
});

app.post('/atualizar', (req, res) => {
    controller.atualizar(req, res);
});

module.exports = {
    app
}