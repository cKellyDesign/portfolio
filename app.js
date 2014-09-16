var express = require('express');
var http = require('http');
var handlebars = require('express-hbs');
var compression = require('compression');
var router = require('./router');
var registerViewHelpers = require('./__app/_views/handlebarsViewHelper');

var app = express();

app.set('port', process.env.PORT || 8888);
app.set('views', __dirname + '/__app/_templates');
app.engine('hbs', handlebars.express3({
	defaultLayout: __dirname + '/__app/_templates/index',
	layoutsDir: __dirname + '/__app/_templates/layouts',
	partialsDir: __dirname + '/__app/_templates/partials',
	extname: '.hbs'
}));
registerViewHelpers(handlebars);
app.set('view engine', 'hbs');
app.set('view cache', false);
app.set('case sensitive routing', false);
// app.use(compression());

router.setRoutes(app);