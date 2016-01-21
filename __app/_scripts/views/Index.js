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

		events: {
			'click #project-window-overlay' : 'onOverlayClick'
		},

		initialize: function() {
			this.initNavView();
			this.initProjectThumbnailsView();
			this.initContactForm();
		},

		initProjectThumbnailsView: function() {
			var projectThumbsView = new ProjectThumbsView({
				el: $('.galleryList').get(0),
				collection: new ProjectThumbsCollection(this.model.get("Projects"))
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