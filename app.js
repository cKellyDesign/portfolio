var http = require('http');
var express = require('express');
var router = require('./router');

var app = express();

router.setRoutes(app);

app.set('port', 8080);


if (app.get('env') == 'development') {
	var server = app.listen(app.get('port'), function(){
		console.log("Server started on port " + server.address().port);
	});
} else {
	var server = app.listen(app.get('port'));
}

