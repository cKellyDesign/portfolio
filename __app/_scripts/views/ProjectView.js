define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, _){

	var ProjectView = Backbone.View.extend({
		
		initialize: function() {
			console.log('Project View Triggered');
			this.render();
			
		},

		render: function() {
			console.log("Starting Template");
			var compiled = _.template(
					"<h1>This is a Project Window!</h1>"
			);
			$(this.el).append(compiled({ projSlug: 'booYa'}));
			console.log("Template Appended");
		}
	});

	return ProjectView;
});