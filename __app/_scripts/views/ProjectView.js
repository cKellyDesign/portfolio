define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, _){

	var ProjectView = Backbone.View.extend({

		path: null,

		initialize: function(options) {
			// console.log('Project View Triggered');
			this.path = '/project/' + options.projectSlug;

			var self = this;

			$.get(this.path, function(data){
				$(self.el).append(data);
			});
		}
	});

	return ProjectView;
});