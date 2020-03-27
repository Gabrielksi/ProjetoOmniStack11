
//importando modulos necessarios
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

//Inicializando
const app = express();

app.use(cors());
app.use(routes);


//necessario para utilizacao do formato json
app.use(express.json());

app.listen(3333);