define([
	'./WindowGallery'
], function (WindowGallery){

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
			$(window).unbind('project-window-loaded');
			this.undelegateEvents();
			this.$el.removeData().unbind();
			this.remove();
			$('#project-window-overlay').remove()
			Backbone.View.prototype.remove.call(this);	
		}


	});

	return ProjectView;
});