var http = require('http');
var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('hello world');
});

var server = app.listen(8080, function(){
	console.log("Server started on port " + server.address().port);
})

