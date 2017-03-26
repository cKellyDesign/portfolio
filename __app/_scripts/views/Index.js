define([
	'jquery',
	'backbone',
	'underscore',
	'./NavView',
	'./ProjectThumbView',
	'./ProjectThumbsView',
	'collections/ProjectThumbsCollection',
	'./ContactFormView'
], function ($, Backbone, _, NavView, ProjectThumbView, ProjectThumbsView, ProjectThumbsCollection, ContactFormView){

	var Index = Backbone.View.extend({

		sectionsKey : ["Work", "Projects"],

		events: {
			'click #project-window-overlay' : 'onOverlayClick'
		},

		initialize: function() {
			this.initNavView();
			this.initProjectThumbnailsView();
			this.initContactForm();
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