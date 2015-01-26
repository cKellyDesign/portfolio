define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, _){

	var NavView = Backbone.View.extend({

		events: {
			'click .nav-link': 'onNavItemClick',
			'click #logo-link a': 'onLogoClick'
		},
		
		initialize: function() {
			var self = this;
			$(document).ready(function(){
				self.navItems = $('.nav-item', this.$el);
				self.determineScrollTop(this);
				self.bindScrollEvent();
				self.handleNavLayout();
			});
			
		}, 

		bindScrollEvent: function() {
			var self = this;
      this.debounceScroll = _.debounce(self.handleNavLayout, 10);
      $(window).bind('scroll', function() {
        self.debounceScroll();
      });
		},

		handleNavLayout: function() {
			this.determineScrollTop($(document));
			if( this.scrollTop > 475 ) {
				this.$el.addClass('stickToTop');
				$('#logo-container').addClass('bufferBottom');
			} else {
				this.$el.removeClass('stickToTop');
				$('#logo-container').removeClass('bufferBottom');
			}
		},

		determineScrollTop: function(obj){
			this.scrollTop = $(obj).scrollTop();
		},

		determineOffsetTop: function(obj){
			return $(obj).offset().top;
		},

		scrollToPosition: function(pos){
			var px = pos + "px";
			$('body, html').animate({ scrollTop: px });
		},

		onLogoClick: function(e){
			e.preventDefault();
			e.stopPropagation();

			this.scrollToPosition(0);
		},

		onNavItemClick: function(e) {
			e.preventDefault();
			e.stopPropagation();

			this.scrollTop = $(document).scrollTop();
			var clickedLink = $(e.target);
			var slug = clickedLink.attr('id').replace('link', 'container');
			var targetContainer = $('#' + slug);
			var targetTopBuffer = parseInt(targetContainer.css('margin-top'), 10) + parseInt(targetContainer.css('padding-top'), 10);
			var targetTop = this.determineOffsetTop(targetContainer) - ( 131 - targetTopBuffer );

			if ( $(document).scrollTop() < 475 ) {
				targetTop = targetTop - 131;
				this.scrollToPosition(targetTop);
			} else {
				this.scrollToPosition(targetTop);
			}			
		}
	});

	return NavView;
});