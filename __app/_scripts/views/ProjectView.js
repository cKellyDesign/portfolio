define([
	'jquery',
	'backbone',
	'underscore',
	'./WindowGallery'
], function ($, Backbone, _, WindowGallery){

	var ProjectView = Backbone.View.extend({

		events: {
			'click .project-window-close-btn': 'closeProject'
		},

		path: null,

		initialize: function(options) {
			// console.log('Project View Triggered: ', this);
			this.bindEvents();
			this.getProject(options);
		},

		bindEvents: function() {
			var self = this;
			$(window).on('project-window-loaded', function(e){
				self.initGallery();
			});
		},

		initGallery: function() {
			var windowGallery = new WindowGallery({ el: $('.window-gallery-nav') });
		},

		getProject: function(options) {
			this.path = '/project/' + options.projectSlug;

			var self = this;

			$.get(this.path, function(data){
				$(self.el).append(data);
			});
		},

		closeProject: function(e) {
			$('.fancy-article').remove();
			$('#project-window-overlay').remove();
		}


	});

	return ProjectView;
});