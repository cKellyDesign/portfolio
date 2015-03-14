define([
	'./ProjectView'
], function (ProjectView){

	var ProjectThumbView = Backbone.View.extend({

		projectSlug: null,

		events: {
			'click': 'onThumbClick'
		},

		initialize: function() {
			console.log('Project Thumb View Triggered: ', this);
			// this.projectSlug = $(this.el).attr('data-project-slug');
		},

		onThumbClick: function(e) {
			e.preventDefault();
			e.stopPropagation();
			console.log("onThumbClick: slug:", this.model.get('slug'));
			CkD.EventHub.trigger('project-window:on-project-thumb-click', this.model.attributes);
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