define([
	'jquery',
	'backbone',
	'underscore',
	'./NavView',
	'./ProjectThumbView',
	'./ProjectThumbsView',
	'collections/ProjectThumbsCollection'
], function ($, Backbone, _, NavView, ProjectThumbView, ProjectThumbsView, ProjectThumbsCollection){

	var Index = Backbone.View.extend({

		initialize: function() {
			this.initNavView();
			this.initProjectThumbnailsView();
		},

		initProjectThumbnailsView: function() {
			var projectThumbsView = new ProjectThumbsView({
				el: $('.galleryList').get(0),
				collection: new ProjectThumbsCollection(this.model.get("Projects"))
			});
		},

		initNavView: function() {
			var navView = new NavView({ el: $('.j-nav') });
		}
		
	});

	return Index;
});