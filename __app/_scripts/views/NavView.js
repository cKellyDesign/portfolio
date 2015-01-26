define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, _){

	var NavView = Backbone.View.extend({

		events: {
			'click .nav-link': 'onNavItemClick'
		},
		
		initialize: function() {
			// console.log('Nav View Triggered: ', this.$el);
			var self = this;
			$(document).ready(function(){
				self.navItems = $('.nav-item', this.$el);
				self.determineScrollTop(this);
			});
			
		}, 

		determineScrollTop: function(obj){
			this.scrollTop = $(obj).scrollTop();
			console.log("ScrollTop Position: ", this.scrollTop);
		},

		determineOffsetTop: function(obj){
			return $(obj).offset().top;
		},

		scrollToPosition: function(pos){
			// $(document).scrollTop(pos);
			var px = pos + "px";
			$('body, html').animate({ scrollTop: px });
		},

		onNavItemClick: function(e) {
			e.preventDefault();
			e.stopPropagation();

			this.scrollTop = $(document).scrollTop();
			this.clickedLink = $(e.target);
			var slug = this.clickedLink.attr('id').replace('link', 'container');
			var targetContainer = $('#' + slug);
			this.scrollToPosition(this.determineOffsetTop(targetContainer));

		}
	});

	return NavView;
});