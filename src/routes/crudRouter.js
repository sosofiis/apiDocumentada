// Importar pacote do express
const { Router } = require('express');

// Instanciar  o Router na variável router
const router = Router();

//Criando rota get
router.get('/api', (request, response) => {
    response.send('Retorno de informações do banco de dados');
    console.log('get');
});

// Criando rota post
router.post('/api', (request, response) => {
    response.send('Método utilizado para salvar informações');
    console.log('post');
});

// Criando rota put
router.put('/api/:id', (request, response) => {
    response.send('Método utilizado para editar informações');
    console.log('put');
    console.log('id:', request.params.id);
});

// Criando rota delete
router.delete('/api/:id', (request, response) => {
    response.send('Método utilizado para deletar informações');
    console.log('delete');
});

// Exportar as configurações do app para outros arquivos acessarem
module.exports = router;
