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
			// _.each($('.galThumb'), function (thisObj) {
			// 	var projectThumbView = new ProjectThumbView({ el: $(thisObj) });
			// });	

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