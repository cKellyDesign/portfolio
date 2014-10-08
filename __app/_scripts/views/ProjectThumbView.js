define([
	'jquery',
	'backbone',
	'underscore',
	'./ProjectView'
], function ($, Backbone, _, ProjectView){

	var ProjectThumbView = Backbone.View.extend({
		
		events: {
			'click': 'clickAlert'
		},

		initialize: function() {
			console.log('Project Thumb View Triggered');
		},

		clickAlert: function(e) {
			e.preventDefault();
			e.stopPropagation();

			$('body').append("<div id='project-window-overlay'></div>" +
							 "<article class='container project-window'></article>");
			var projectView = new ProjectView({ el: $('.project-window') });
		}
	});

	return ProjectThumbView;
});