var expressHandlebars = require('express-hbs');
var appModel = require('./__app/_models/model.json');

var projectWindowViewBuilder = require('./__server/_builders/ProjectModelBuilder').window;

exports.setRoutes = function(app){

	app.get('/', function(req, res){
		res.sendfile('./index.html');
	});	

	app.get('/project/:projectSlug', function(req, res){
		var projectSlug = req.params.projectSlug;
		// console.log("PROJECT ENDPOINT HIT: ", projectSlug);
		res.render('partials/project-window', {layout: false, model: projectWindowViewBuilder(projectSlug) });
	});

};
