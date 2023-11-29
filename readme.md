# Documentação para contrução da API com node.js
* Escolher local do computador para criar a pasta do proejto
* Abrir o gitBash nesta pasta


Criar a pasta
```
mkdir NOME_PROJETO
```

Acessar a pasta do projeto
```
cd NOME_PROJETO
```

Abrir a pasta no VSCode
```
code .
```

Iniciar o gerenciador de pacotes Node
```
npm init -y
```
* Cria o arquivo package.json para gerenciar os pacotes da aplicação

# Instalar pacotes da API
```
npm i express nodemon dotenv mysql2
```
* express: será o servidor da API;
* nodemon: atualizar os arquivos alterados sem parar o servidor;
* dotenv: gerenciador de variáveis de ambiente;
* mysql2: integrar aplicação com o banco de dados.

<hr>

Criar arquivo .gitignore (arquivos e pastas que não vão para o gitHub)
```
touch .gitignore
```
* Arquivo responsável por ignorar arquivos e pastas no gitHub, ou seja, não serão visíveis no repositório remoto.

Criar arquivo .env (armazenará as variáveis do ambiente)
```
touch .env
```
* Arquivo responsável por armazenar as variáveis de ambiente.

Informar arquivos e pastas no .gitignore
```
node_modules 
.env
```

Criar pasta src para estrutura do projeto
```
mkdir src
```
* Pasta responsável por organizar a estrutura da aplicação.

Criar arquivo server.js na pasta src
```
touch src/server.js
```
* Arquivo responsável por rodar a aplicação.

Colar o código de configuração no arquivo 'server.js'
```
// Importar o arquivo de configuração
const app = require('./app');

// Importar a porta do servidor
const PORT = app.get('port');

// Testar servidor
app.listen(PORT, () => console.log(`Running at the port ${PORT}`))
```

Criar comando para rodar o servidor no arquivo package.json
```
"start":"nodemon src/server.js"
```

Rodar o comando no terminal com gitBash
```
npm run start
```
<hr>

##  Criar estrutura para o projeto

Criar arquivo app.js na pasta src
```
touch src/app.js
```

## Rodar o comando 'npm install' sempre que fizer um clone do gitHub

## Criar o arquivo .env e .env.example

```
touch .env
```

Criar arquivo para salvar as variáveis necessárias da aplicação sem os valores
```
touch .env.example
```

Criar pasta routes
```
mkdir routes
```

Criar arquivo crudRouter.js dentro da pasta routes (só funciona no gitBash)

```
nano crudRouter.js
```

<hr>
Como gerenciar arquivos com o nano:

* Ctrl + O: Salvar o arquivo
* Enter: Confirmar nome do arquivo
* Ctrl + X: Fechar o arquivo
<hr>

Digitar o código no arquivo criado
```
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
```

## CRIAÇÃO DE CONTROLLERS

* Arquivos para processar as requisições das rotas.
<hr>

Criar pasta de controllers
```
mkdir src/controllers
```

Criar arquivo controller.js
```
touch src/controllers/controller.js
```

Criar funções para processar as requisições das rotas 
```
function listarDados(request, response){
    response.send('Retorno de informações do banco de dados');
}

function gravarDados(request, response){
    response.send('Método utilizado para salvar informações');
}

function atualizarDados(request, response){
    response.send('Método utilizado para editar informações');
}

function deletarDados(request, response){
    response.send('Método utilizado para deletar informações');
}

module.exports = {
    listarDados, 
    gravarDados,
    atualizarDados,
    deletarDados
}
```

<hr>

## CONFIGURAR ESTRUTURA DE CONEXÃO COM O BANCO DE DADOS

Criar pasta 'config' dentro da pasta 'src'
```
mkdir src/config
```

Criar arquivo 'db.js dentro da pasta 'config'
```
touch src/config/db.js
```

Colar o código no arquivo 'db.js'
```
// Importando o pacote de conexão com o banco de dados
const mysql = require('mysql2')

// Importar variáveis de conexão do banco de dados
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect( (err) => {
    if (err) {
        console.log('Erro de conexão' + err);
    } else {
        console.log('Mysql Connected!');
    }
});

module.exports = connection;
```

## Criar banco de dados

* Criar database 
* Dar um use na tabela criada
* Criar tabelas


### Criar database
```
create database NOME_DATABASE;
```
* Obs.: CTRL + ENTER para executar o comando SQL

### Selecionar a database
```
use NOME_DATABASE;
```

### Criar tabela alunos
```
create table alunos(
    id int not null auto_increment,
    nome varchar(120) not null,
    dt_nasc date not null,
    time_do_coracao varchar(120),
    primary key(id)
);
```

### Criar tabela users
```
create table users(
    id int not null auto_increment,
    ds_nome varchar(120),
    primary key(id)
);
```