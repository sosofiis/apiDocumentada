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

//Criando rota get
app.get('/api/:id', (request, response) => {
    response.send('Retorno de informações do banco de dados');
});

// Criando rota post
app.post('/api/:id', (request, response) => {
    response.send('Método utilizado para salvar informações');
});

// Criando rota put
app.put('/api/:id', (request, response) => {
    response.send('Método utilizado para editar informações');
});

app.delete('/api/:id', (request, response) => {
    response.send('Método utilizado para deletar informações');
});