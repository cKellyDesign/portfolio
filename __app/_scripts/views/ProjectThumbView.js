define([
	'./ProjectView'
], function (ProjectView){

	var ProjectThumbView = Backbone.View.extend({

		projectSlug: null,

		events: {
			'click': 'onThumbClick'
		},

		initialize: function() {
			// console.log('Project Thumb View Triggered: ', this);
			// this.projectSlug = $(this.el).attr('data-project-slug');
		},

		onThumbClick: function(e) {
			e.preventDefault();
			e.stopPropagation();
			console.log("onThumbClick: slug:", this.model.get('slug'));
			CkD.EventHub.trigger('project-window:on-project-thumb-click', this.model.attributes);
		}
		
	});

	return ProjectThumbView;
});