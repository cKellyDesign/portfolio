define([
	'jquery',
	'backbone',
	'underscore',
	'./ProjectView'
], function ($, Backbone, _, ProjectView){

	var ProjectThumbView = Backbone.View.extend({

		projectSlug: null,

		events: {
			'click': 'initProjectView'
		},

		initialize: function() {
			// console.log('Project Thumb View Triggered: ', this.el);
			this.projectSlug = $(this.el).attr('data-project-slug');
		},

		initProjectView: function(e) {
			e.preventDefault();
			e.stopPropagation();

			$('body').append("<div id='project-window-overlay'></div>" +
							 "<article class='container project-window fancy-article' data-project-slug='" + this.projectSlug + "'></article>");
			var projectView = new ProjectView({ el: $('.project-window'), projectSlug: this.projectSlug });
		}
	});

	return ProjectThumbView;
});