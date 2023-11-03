// Importar pacote do express
const express = require('express');

// Instanciar o express na variável app
const app = express();

// Importar as rotas para serem executadas na aplicação
const crudRouter = require('./routes/crudRouter');

// Importar as rotas para serem executadas na aplicação
const alunosRouter = require('./routes/alunosRouter');

// Importar o pacote dotenv
const dotenv = require('dotenv').config();

// Habilita a utilização do crudRouter
app.use('/api', crudRouter);

// Habilita a utilização do alunosRouter
app.use('/api', alunosRouter);

// Seleciona uma porta para usar no app
app.set('port', process.env.PORT);

// Exportando a configuração do app para outros arquivos acessarem
module.exports = app;