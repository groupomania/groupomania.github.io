const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const dataRoute = require('./Routes/user');
const messageRoute = require('./Routes/message');
    

app.use((req, res, next) => { // configuration des CORS, pour permettre à différentes adresse localhost de communiquer entre elles
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());//body parser pour convertir les objets JSON des requêtes POST
app.use(express.json());


app.use('/api/', dataRoute);
app.use('/api/message/', messageRoute);


module.exports = app;