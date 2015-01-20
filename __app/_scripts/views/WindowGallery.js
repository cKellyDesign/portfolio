define([

], function (){

	var WindowGallery = Backbone.View.extend({

		nav: null,
		thumbs: null,
		scrollDist: null,
		leftDist: 0,
		arrowL: null,
		arrowR: null,
		openGal: false,
	
		events: {
			'click .gallery-nav-item': 'navLinkClicked',
			'click .scrollThumbsBut.Right': 'clickRightNavBtn',
			'click .scrollThumbsBut.Left': 'clickLeftNavBtn'
		},


		initialize: function() {
			var transition = require(['http://localhost:8080/assets/scripts/jquery.transit.min.js']); // This needs to be moved into RequireJS
			// console.log("WindowGallery initialized: ", this);
			this.initGalNav();
			this.initArrows();
		},

		initGalNav: function(){
			this.nav = $('.window-gallery-nav', this.$el);
			this.nav.css('left', '0px');
			this.thumbs = $('.gallery-nav-item', this.$el);

			// Callbacks
			this.setNavWidth();
		},

		initArrows: function(){
			
			this.arrowR = $('.scrollThumbsBut.Right', this.$el);
			this.arrowL = $('.scrollThumbsBut.Left', this.$el);
			if(this.thumbs.length > 4) {
				this.arrowR.show();
				this.scrollDist = -1 * (this.nav.outerWidth() - this.$el.outerWidth());
			}
		},

		setNavWidth: function() {
			var thumbWidth = this.thumbs[0].offsetWidth;
			var thumbCount = this.thumbs.length;
			this.nav.css('width', (thumbCount * thumbWidth) + "px");
		},

		clickRightNavBtn: function() {
			this.nav.transition({x:'-=200'});
			this.leftDist -= 200;
			if(this.leftDist < this.scrollDist) {
				this.arrowR.hide();
			}
			this.arrowL.show();
		},

		clickLeftNavBtn: function() {
			this.nav.transition({x:'+=200'});
			this.leftDist += 200;
			if(this.leftDist >= 0){
				this.arrowL.hide();
			}
			this.arrowR.show();
		},

		navLinkClicked: function(e) {
			e.preventDefault();
			e.stopPropagation();

			var parent = $(e.target).parents('.gallery-nav-item');
			
			if(!this.openGal){ // If gallery is closed
				this.openGal = true;
				$('.current.gallery-nav-item').removeClass('current');
				parent.addClass('current');
				this.toggleGalleryView(); // Open gallery
			} else { // Else the gallery is open
				if( parent.hasClass('current') ) { // if clicked on current
					$('.current.gallery-nav-item').removeClass('current');
					this.openGal = false;
					this.toggleGalleryView(); // Close gallery
				} else {
					$('.current.gallery-nav-item').removeClass('current');
					parent.addClass('current'); // else Update current
				}
			}
		},

		toggleGalleryView: function() {
			this.$el.toggleClass('collapsed');
			$('.window-toggle-area').toggle();
		}



	});

	return WindowGallery;
});