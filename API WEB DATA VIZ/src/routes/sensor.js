const controller
const express = require('express');
const app = express.Router();

app.get('/inserir', (req, res) => {
    controller.inserir(req, res);
});

module.exports = {
    app
}