//REQUIRES
var express = require('express');
var app = express();
var middleware = require('./middleware.js');
var _port = process.env.PORT || 3000;

//APP SETUP
app.use(middleware.logger);
app.use(express.static(__dirname + '/public'));

//ROUTER
app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send("About us.");
});

app.listen(_port, function(){
	console.log("Starting server on port " + _port + ".");
});