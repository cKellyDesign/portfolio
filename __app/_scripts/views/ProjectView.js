define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, _){

	var ProjectView = Backbone.View.extend({

		path: '/project/hardcoded',

		initialize: function() {
			// console.log('Project View Triggered');
			var self = this;
			$.get(this.path, function(data){
				$(self.el).append(data);
			});
		}
	});

	return ProjectView;
});