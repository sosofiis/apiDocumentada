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
    console.log(request.body);
    // Recuperando dados da requisição
    const params = Array(
        request.body.nome,
        request.body.dt_nascimento,
        request.body.time_do_coracao
    );

    const query = 'INSERT INTO alunos(nome, dt_nascimento, time_do_coracao) values(?, ?, ?);';

    connection.query(query, params, (err, results) => {
        console.log(err);
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


async function update (request, response) {
    // Comando SQL
    const query = "UPDATE alunos SET nome = ?, dt_nascimento = ?, time_do_coracao = ? WHERE id = ?;";
    
    const params = Array(
        request.body.nome,
        request.body.dt_nascimento,
        request.body.time_do_coracao,
        request.params.id
    )

    connection.query(query, params, (err, results) =>{
        if(results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Aluno atualizado com sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "Aluno não atualizado!",
                    error: err
                })
        }
    })
}

async function deleteAluno (request, response) {
    // Comando SQL
    const query = "DELETE FROM alunos WHERE id = ?;";
    
    const params = Array(
        request.params.id
    )

    connection.query(query, params, (err, results) =>{
        if(results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Aluno removido com sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "Aluno não removido!",
                    mysql: err
                })
        }
    })
}

async function selecionarAlunoId(request, response) {
    // Comando SQL
    const query = "SELECT * FROM alunos WHERE id = ?;";
    
    const params = Array(
        request.params.id
    )

    connection.query(query, params, (err, results) =>{
        if(results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Aluno selecionado com sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "Aluno não encontrado!",
                    mysql: err
                })
        }
    })
}

module.exports = {
    listarUsuarios,
    cadastrarAluno,
    update,
    deleteAluno,
    selecionarAlunoId
};