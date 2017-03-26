define([], function (){

  var MobileProjectView = Backbone.View.extend({

    isOpen: false,

    initialize: function() {
      this.template = _.template(mobileProjectViewTemplate);
      this.render();
      this.subscribeEvents();
    },

    subscribeEvents: function() {
      CkD.EventHub.on('mobile-project:on-project-thumb-click', this.toggleProject, this);
    },

    setModel: function(data) {
      this.model.set(data);
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
    },

    toggleProject: function(slug) {
      if ( slug && this.model.get('slug') === slug ) {
        if ( !this.isOpen ) {
          this.$el.slideDown();
          this.isOpen = true;
        } else {
          this.$el.slideUp();
          this.isOpen = false;
        }
      } else if ( this.isOpen ) {
        this.$el.slideUp();
        this.isOpen = false;
      }
    }
  });

  var mobileProjectViewTemplate = '<p><%= description %></p>' + 
    '<ol class="mobile-gallery">' +
      '<% _.each(gallery, function(galItem){ %>' +
      '<li class="gallery-nav-item">' +
        '<a class="gallery-nav-link" href="<%= galItem.fullRes %>" target="_blank">' +
          '<img src="<%= galItem.thumb %>">' +
        '</a>' +
      '</li>' +
      '<% }); %>' +
    '</ol>' +
    '<ul class="fancy-gallery-highlights">' +
      '<% _.each(bullets, function(bullet){ %>' +
        '<li><h6><%= bullet %></h6></li>' +
      '<% }); %>' +
    '</ul>';

  return MobileProjectView;
});