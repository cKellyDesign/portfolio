define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, _){

	var ProjectView = Backbone.View.extend({
		
		initialize: function() {
			console.log('Project View Triggered');
			$(this.el).append("<h1>Hello World</h1>");
		}
	});

	return ProjectView;
});