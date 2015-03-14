define([
	'./NewWindowGallery'
], function (NewWindowGallery){

	var ProjectView = Backbone.View.extend({

		events: {
			'click .project-window-close-btn': 'closeProject'
		},

		path: null,

		initialize: function(options) {
			// this.bindEvents();
			this.getProject(options);
		},

		bindEvents: function() {
			var self = this;
			$(window).on('project-window-loaded', function(e, projectViewModel){
				self.initGallery(projectViewModel);
			});
		},

		initGallery: function(projectViewModel) {

			var windowGalleryModel = new NewWindowGallery.WindowGalleryModel(projectViewModel);

			var windowGalleryView = new NewWindowGallery.WindowGalleryView({
				el: $('.window-gallery'),
				model: windowGalleryModel
			});
		},

		getProject: function(options) {
			this.path = '/project/' + options.projectSlug;
			var self = this;
			$.get(this.path, function(data){
				$(self.el).append(data);
			});
		},

		closeProject: function(e) {
			// $(window).unbind('project-window-loaded');
			// this.undelegateEvents();
			// this.$el.removeData().unbind();
			this.$el.css('display', 'none');
			$('#project-window-overlay').css('display', 'none');
			// Backbone.View.prototype.remove.call(this);	
		}


	});

	return ProjectView;
});