'use strict';

var express = require('express');
var app = express();
var config = require('./app/config/config');
var bodyParser = require('body-parser');
var compression = require('compression');
var morgan = require('morgan');
var helmet = require('helmet');
var nconf = require('nconf');
var winston = require('winston');

winston.add(winston.transports.File, {"filename": "error.log", "level": nconf.get("logger")});

var routes = require('./app/routes');
var server = require('http').Server(app);

nconf.argv({
  'p': {
    'alias': 'http:port',
    'describe': 'The port to listen on'
  }
});

nconf.file("./app/config/config.json")
nconf.defaults({
  "http": {
    "port": 3000
  },
  "logger": {
    "fileLevel": "error"
  }
});

winston.info('Initialized nconf');
winston.info('HTTP Config: ', nconf.get("http"));

//used to gzip contents to send more info to client
app.use(compression());
//used to prevent downgrade attacks if the site switches to https
app.use(helmet());

app.use('/', express.static(__dirname));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/', routes);

server.listen(nconf.get('http:port'));

exports.closeServer = function() {
  server.close();
};
