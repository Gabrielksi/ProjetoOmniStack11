const express = require('express');

const ongController = require('./controller/ongController');
const incidentsController = require('./controller/incidentController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController')

const routes = express.Router();
routes.use(express.json());

//Rota para criar ongs
routes.post('/ongs', ongController.create);

//Rota para listar todos os ongs
routes.get('/ongs', ongController.getAllOngs);



//Rota para criar incidents
routes.post('/incidents', incidentsController.create);

//Rota para listar todos os incidents
routes.get('/incidents', incidentsController.getAllIncidents);

//Rota para deletar incidents
routes.delete('/incidents/:id', incidentsController.deleteIncidents);


//Rota para listar incidents de uma ong
routes.get('/profile', profileController.getIncidentsByOng);


//Rota de login
routes.post('/session', sessionController.create);

//exportando modulo routes
module.exports = routes;