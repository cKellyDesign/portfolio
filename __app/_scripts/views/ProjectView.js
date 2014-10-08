define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, __){

	var ProjectView = Backbone.View.extend({
		
		initialize: function() {
			console.log('Project View Triggered');
		}
	});

	return ProjectView;
});