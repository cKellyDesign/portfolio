var http = require('http');
var path = require('path');
var express = require('express');
var expressHandlebars = require('express-hbs');
var registerHandlebarHelpers = require('./__server/_helpers/handleBarHelpers');
var router = require('./router');
var requirejs = require('requirejs');

var app = express();

requirejs.config({
	nodeRequire: require
});

// Set Routes
router.setRoutes(app);

// Set/Config View Engine
app.set('port', 8080);
app.set('views', __dirname + '/__app/_templates');
app.engine('hbs', expressHandlebars.express3({
	defaultLayout: __dirname + '/index',
	layoutsDir: __dirname + '/__app/_templates/layouts',
	partialsDir: __dirname + '/__app/_templates/partials',
	extname: '.hbs'
}));
registerHandlebarHelpers(expressHandlebars);
app.set('view engine', 'hbs');
app.set('case sensitive routing', false);

// Set Asset Paths
app.use('/assets/scripts', express.static(path.join(__dirname, '/__build/_scripts')));
app.use('/assets/styles', express.static(path.join(__dirname, '/__build/_styles')));
app.use('/assets/images', express.static(path.join(__dirname, '/__build/_images')));
app.use('/assets/gfx', express.static(path.join(__dirname, '/__build/_gfx')));

// Listen
if (app.get('env') == 'development') {
	var server = app.listen(app.get('port'), function(){
		console.log("Server started on port " + server.address().port);
	});
} else {
	var server = app.listen(app.get('port'));
}

