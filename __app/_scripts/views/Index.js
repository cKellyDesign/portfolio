define([
	'jquery',
	'backbone',
	'underscore',
	'./NavView',
	'./ProjectThumbView',
	'./ProjectThumbsView',
	'collections/ProjectThumbsCollection',
	'./ContactFormView',
	'models/ContactFormModel'
], function ($, Backbone, _, NavView, ProjectThumbView, ProjectThumbsView, ProjectThumbsCollection, ContactFormView, ContactFormModel){

	var Index = Backbone.View.extend({

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
				el: $('#contact-form'), 
				model: new ContactFormModel({
					name: 'Name',
					email: 'Email',
					message: 'Message'
				}) 
			});
		}
		
	});

	return Index;
});