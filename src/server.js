// Importar pacote do express
const express = require('express');

// Instanciar o express na variável app
const app = express();

// Importar o pacote dotenv
const dotenv = require('dotenv').config();

// Definir a porta do servidor
const PORT = process.env.port || 3005;

// Testar servidor
app.listen(PORT, () => console.log(`Running at the port ${PORT}`))