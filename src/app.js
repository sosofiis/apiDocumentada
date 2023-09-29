// Importar pacote do express
const express = require('express');

// Instanciar o express na variável app
const app = express();

// Importar as rotas para serem executadas na aplicação
const crudRouter = require('./routes/crudRouter');

// Importar o pacote dotenv
const dotenv = require('dotenv').config();

// Habilita a utilização do crudRouter
app.use(crudRouter);

// Seleciona uma porta para usar no app
app.set('port', process.env.PORT);

// Exportando a configuração do app para outros arquivos acessarem
module.exports = app;