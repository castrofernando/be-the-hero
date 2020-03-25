    //request.body  -> body da mensagem
    //request.params -> parametros de roda /user/1
    //request.query -> parametros da url /user?name=fernando

    //nodemon no package json para reiniciar automatico ambiente na mudanca npm install nodemom - D
    //knex Query builder Javascript -> 

const express = require('express');
const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');
const routes = express.Router();

//SESSIONS - Login / Logout
routes.post('/sessions',sessionController.create);

//PROFILE
routes.get('/profile',profileController.index);

//INCIDENTS
routes.get('/incidents',incidentController.index);
routes.post('/incidents',incidentController.create);
routes.delete('/incidents/:id',incidentController.delete);

//ONGS
routes.get('/ongs', ongController.index);
routes.post('/ongs',ongController.create);

module.exports = routes;