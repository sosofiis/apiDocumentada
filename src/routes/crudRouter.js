// Importar pacote do express
const express = require('express');

// Instanciar  o Router na variável router
const router = express.Router();

//Criando rota get
router.get('/api/:id', (request, response) => {
    response.send('Retorno de informações do banco de dados');
});

// Criando rota post
router.post('/api/:id', (request, response) => {
    response.send('Método utilizado para salvar informações');
});

// Criando rota put
router.put('/api/:id', (request, response) => {
    response.send('Método utilizado para editar informações');
});

// Criando rota delete
router.delete('/api/:id', (request, response) => {
    response.send('Método utilizado para deletar informações');
});

// 
modules.exports = router;