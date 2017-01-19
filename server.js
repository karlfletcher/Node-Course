var express = require('express');
var app = express();
var _port = 3000;

var middleware = {
	requireAuthentication	: function(req, res, next){
		console.log("Private route hit.");
		next();
	},
	logger: function(req, res, next){
		console.log(new Date().toString() + " - " + req.method + " " + req.originalUrl);
		next();
	}
}

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send("About us");
});

app.use(express.static(__dirname + '/public'));

app.listen(_port, function(){
	console.log("Starting server on port " + _port + ".");
});