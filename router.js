var expressHandlebars = require('express-hbs');
var appModel = require('./__app/_models/model.json');

exports.setRoutes = function(app){

	app.get('/', function(req, res){
		//res.send('hello world');
		res.render('index', { title: 'Home', model: appModel });
	});	

	app.get('/project/:projectSlug', function(req, res){
		var projectSlug = req.params.projectSlug;
		console.log("PROJECT ENDPOING HIT: ", projectSlug);
		res.render('partials/project-window', {layout: false, title: projectSlug});
	});

};
