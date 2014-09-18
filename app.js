var http = require('http');
var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('hello world');
});
app.set('port', 8080);


if (app.get('env') == 'development') {
	var server = app.listen(app.get('port'), function(){
		console.log("Server started on port " + server.address().port);
	});
} else {
	var server = app.listen(app.get('port'));
}

