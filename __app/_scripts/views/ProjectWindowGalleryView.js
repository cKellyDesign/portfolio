define([
  'transition'
], function (transition){

  var ProjectWindowGalleryView = Backbone.View.extend({
    nav: null,
    thumbs: null,
    scrollDist: null,
    leftDist: 0,
    arrowL: null,
    arrowR: null,

    events: {
      'click .gallery-nav-item': 'navLinkClicked',
      'click .scrollThumbsBut.Right': 'clickRightNavBtn',
      'click .scrollThumbsBut.Left': 'clickLeftNavBtn'
    },

    initialize: function(){
      // console.log("ProjectWindowGalleryView: el - ", $(this.el));
      this.initGalNav();
      this.initArrows();
      this.setTemplate();

      this.model.on('change', this.handleModelChange, this);
    },

    handleModelChange: function() {
      this.render();
      this.toggleElements();
      this.updateActiveThumbs();
    },

    setTemplate: function() {
      this.templateEl = this.$('.window-gallery-slides');
      this.template = _.template('<a class="gallery-slide-link" href="<%= fullRes %>" target="_blank"><img src="<%= gal %>"></a>');
    },

    navLinkClicked: function(e) {
      e.preventDefault();
      e.stopPropagation();

      var parent = $(e.target).parents('.gallery-nav-item');
      var index = parent.index();

      if ( this.model.get('currentIndex') !== index ) {
        this.model.set({ currentIndex: index, currentImage: this.collection.toJSON()[index], isOpen: true });
      } else {
        this.model.set({ currentImage: null, currentIndex: null, isOpen: false });
      }
    },

    render: function() {
      if ( this.model.get('isOpen') ) {
        this.templateEl.html(this.template(this.model.get('currentImage')));
      }
    },

    updateActiveThumbs: function() {
      $('.current.gallery-nav-item').removeClass('current');
      var thisIndex = this.model.get('currentIndex');
      if ( thisIndex || thisIndex === 0 ) {
        $(this.thumbs[thisIndex]).addClass('current');
      } 
    },

    toggleElements: function(trigger){
      if ( this.model.get('isOpen') ) {
        this.$el.removeClass('collapsed');
        $('.window-toggle-area').hide();
      } else {
        this.$el.addClass('collapsed');
        $('.window-toggle-area').show();
      }
    },

    initGalNav: function() {
      this.nav = this.$('.window-gallery-nav');
      this.nav.css('left', '0px');
      this.thumbs = this.$('.gallery-nav-item');

      this.setNavWidth();
    },

    setNavWidth: function() {
      var thumbWidth = $(this.thumbs[0]).outerWidth();
      var thumbCount = this.thumbs.length;
      this.nav.css('width', (thumbCount * thumbWidth) + "px");
    },

    initArrows: function() {
      this.arrowR = this.$('.scrollThumbsBut.Right');
      this.arrowL = this.$('.scrollThumbsBut.Left');
      if ( this.collection.models.length > 5) {
        this.arrowR.show();
        this.scrollDist = -1 * (this.nav.outerWidth() - this.$el.outerWidth());
      }
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
    }

  });

  return ProjectWindowGalleryView;
});