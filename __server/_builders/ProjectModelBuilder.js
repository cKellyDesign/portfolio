var ProjectsModel = require('./../../__app/_models/model.json').Projects;
var _ = require('underscore');

module.exports.window = function init(projectSlug) {
  if ( projectSlug === 'default') {
    return { BB_template: true };
  }
	var projectWindowModel = _.filter(ProjectsModel, function(project){
		return project.slug == projectSlug;
	});
	// console.log(projectSlug + " Project Window Model: ", projectWindowModel[0]);
	return projectWindowModel[0];
};