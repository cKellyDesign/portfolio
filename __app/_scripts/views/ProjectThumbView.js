define([
	'jquery',
	'backbone',
	'underscore',
	'./ProjectView'
], function ($, Backbone, __, ProjectView){

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

			var projectView = new ProjectView();
		}
	});

	return ProjectThumbView;
});