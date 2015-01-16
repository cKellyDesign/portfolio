define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, _){

	var WindowGallery = Backbone.View.extend({

	
		events: {
			'click .gallery-nav-link': 'navLinkClicked'
		},

		thumbs: null,

		initialize: function() {
			// console.log("WindowGallery initialized: ", this);
			this.thumbs = $('.gallery-nav-item');
			this.setWidth();
		},

		setWidth: function() {
			var thumbWidth = this.thumbs[0].offsetWidth;
			var thumbCount = this.thumbs.length;
			console.log("Width: " + thumbWidth + "px; Count: " + thumbCount);
			$(this.el).css('width', (thumbCount * thumbWidth) + "px");
		},

		navLinkClicked: function() {

		}


	});

	return WindowGallery;
});