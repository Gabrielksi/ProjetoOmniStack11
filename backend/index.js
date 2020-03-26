//Framework de criacao de rotas
const express = require('express');
//Inicializando
const app = express();

//Criando rota raiz da aplicacao
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Gabriel Carvalho'
    });
});


app.listen(3333);