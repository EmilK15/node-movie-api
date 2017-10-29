'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var config = require('./app/config/config');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');
var routes = require('./app/routes');
var server = require('http').Server(app);

//used to gzip contents to send more info to client
app.use(compression());
//used to prevent downgrade attacks if the site switches to https
app.use(helmet());

app.use('/', express.static(__dirname));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/', routes);

server.listen(port);
