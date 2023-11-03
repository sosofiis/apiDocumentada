const connection = require('../config/db');

async function listarUsuarios(request, response){
    const query = 'SELECT * FROM alunos;';

    connection.query(query, (err, results) =>{
        if(results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Sucesso! Lista de alunos",
                    data: results
                });
        } else {

        }
    });
}

module.exports = listarUsuarios;