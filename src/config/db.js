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