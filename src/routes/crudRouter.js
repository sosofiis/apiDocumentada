// Importar pacote do express
const { Router } = require('express');

// Instanciar  o Router na variável router
const router = Router();

// Importar funções do controller para a rota acessar
const { 
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados
 } = require('../controllers/controller');

//Criando rota get
router.get('/listar', listarDados);

// Criando rota post
router.post('/gravar', gravarDados);

// Criando rota put
router.put('/atualizar/:id', atualizarDados);

// Criando rota delete
router.delete('/deletar/:id', deletarDados);

// Exportar as configurações do app para outros arquivos acessarem
module.exports = router;
