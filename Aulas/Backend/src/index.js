const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();       //modulo de rotas

app.use(cors());
app.use(express.json());      //Define que o body das requisições virá em json
app.use(routes);

app.listen(3333);
