define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, _){

	var ProjectView = Backbone.View.extend({

		events: {
			'click .project-window-close-btn': 'closeProject'
		},

		path: null,

		initialize: function(options) {
			// console.log('Project View Triggered');
			this.getProject(options);
		},

		getProject: function(options) {
			this.path = '/project/' + options.projectSlug;

			var self = this;

			$.get(this.path, function(data){
				$(self.el).append(data);
			});
		},

		closeProject: function(e) {
			$('.fancy-article').remove();
			$('#project-window-overlay').remove();
		}


	});

	return ProjectView;
});