// Importar pacote do express
const express = require('express');

// Instanciar o express na variável app
const app = express();

// Importar o pacote dotenv
const dotenv = require('dotenv').config();

// Seleciona uma porta para usar no app
app.set('port', process.env.PORT);

// Exportando a configuração do app
module.exports = app;