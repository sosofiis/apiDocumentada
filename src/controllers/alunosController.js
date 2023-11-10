// Importar a conexão com o banco de dados
const connection = require('../config/db');

// Função async: realiza uma requisição de forma paralela ao sistema
// Request: nesta variável recuperamos os dados enviados na requisição
// Response: tem a responsabilidade de retornar as informações para quem requisitou 
async function listarUsuarios(request, response) {
    // Variável para executar a consulta no banco
    const query = 'SELECT * FROM alunos;';

    // Err: retorna erros na execução
    // Results: retorna a ação realizada com sucesso
    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Sucesso! Lista de alunos",
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "Oops! Não foi possível listar as informações solicitadas!",
                    data: err
                });
            }
        });
    };

async function cadastrarAluno(request, response) {
    // Passo 1: recuperar variáveis 
    // Passo 2: montar query para inserir os dados
    // Passo 3: tentar executar a ação no banco
    // Passo 4: definir retornos da requisição

    // Recuperando dados da requisição
    const params = Array(
        request.body.nome,
        request.body.dt_nasc,
        request.body.time_do_coracao
    );

    const query = 'INSERT INTO alunos(nome, dt_nasc, time_do_coracao) values(?, ?, ?);';

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    sucess: true,
                    message: 'Sucesso! Aluno cadastrado.',
                    data: results
                });
        }
    });
};

module.exports = {
    listarUsuarios,
    cadastrarAluno
};