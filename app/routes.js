'use strict';

var express = require('express');

var apiRoutes = express.Router();
var app = express();

var controllers = require('./controllers/');

app.use('/api', apiRoutes);

app.all('/*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-type, Accept, X-Access-Token, X-Key');
	next();
});

app.get('/', function(req, res) {
  res.render('index');
});

apiRoutes.route('/:url')
	.get(controllers.descriptionController.read_movie);


app.use(function(req, res) {
    res.status(404).redirect('/');
});

module.exports = app;
