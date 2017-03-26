define([
	'jquery',
	'backbone',
	'underscore',
	'./NavView',
	'./ProjectThumbView',
	'./ProjectThumbsView',
	'./ProjectWindowView',
	'models/ProjectWindowModel',
	'collections/ProjectThumbsCollection',
	'./ContactFormView'
], function ($, Backbone, _, NavView, ProjectThumbView, ProjectThumbsView, ProjectWindowView, ProjectWindowModel, ProjectThumbsCollection, ContactFormView){

	var Index = Backbone.View.extend({

		sectionsKey : ["Work", "Projects"],
		isDesktop: $(window).innerWidth() >= 768,

		events: {
			'click #project-window-overlay' : 'onOverlayClick'
		},

		initialize: function() {
			this.initNavView();
			this.initProjectThumbnailsView();
			this.initContactForm();
			if ( this.isDesktop ) this.initProjectWindowView();
		},

		initProjectThumbnailsView: function() {
			for (var i = 0; i < $('.galleryList').length; i++) {
				if (i <= this.sectionsKey.length) {

					new ProjectThumbsView({
						el: $('.galleryList').get(i),
						collection: new ProjectThumbsCollection(this.model.get(this.sectionsKey[i]))
					});
				}
			}
		},

		initProjectWindowView: function() {
			var projectWindowView = new ProjectWindowView({
				el: $('.project-window'),
				model: new ProjectWindowModel()
			});
		},

		initNavView: function() {
			var navView = new NavView({ el: $('.j-nav') });
		},

		initContactForm: function() {
			var contactForm = new ContactFormView({
				el: $('#contact-form')
			});
		},

		onOverlayClick: function() {
			CkD.EventHub.trigger('project-window:on-close-window');
		}
		
	});

	return Index;
});