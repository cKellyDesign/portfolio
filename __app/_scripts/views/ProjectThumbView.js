define([], function (){

	var ProjectThumbView = Backbone.View.extend({

		projectSlug: null,

		events: {
			'click': 'onThumbClick'
		},

		onThumbClick: function(e) {
			e.preventDefault();
			e.stopPropagation();
			CkD.EventHub.trigger('project-window:on-project-thumb-click', this.model.attributes);
		}

	});

	return ProjectThumbView;
});