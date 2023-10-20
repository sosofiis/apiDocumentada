function listarDados(request, response){
    response.send('Retorno de informações do banco de dados');
    console.log('get');
}

module.exports = {
    listarDados
}