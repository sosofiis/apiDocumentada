// Importar o arquivo de configuração
const app = require('./app');

// Importar a porta do servidor
const PORT = app.get('port');

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

// Criando rota delete
app.delete('/api/:id', (request, response) => {
    response.send('Método utilizado para deletar informações');
});

// Testar servidor
app.listen(PORT, () => console.log(`Running at the port ${PORT}`))