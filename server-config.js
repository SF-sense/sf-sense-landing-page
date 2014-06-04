var express = require('express');
var logger = require('morgan');
var app = express();

app.configure(function(){
	app.use(logger());
	app.use(express.compress());
	app.use(express.static(__dirname + '/public', { maxAge : 86400000}));
	app.use(express.static(__dirname + '/bower_components'));
});

module.exports = app;
