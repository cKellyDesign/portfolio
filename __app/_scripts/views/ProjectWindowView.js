define([
  './ProjectWindowGalleryView',
  'models/WindowGalleryModel',
  'collections/WindowGalleryCollection'
  ], function (ProjectWindowGalleryView, WindowGalleryModel, WindowGalleryCollection){
  var ProjectWindowView = Backbone.View.extend({

    events: {
      'click .project-window-close-btn': 'clearModel'
    },

    initialize: function() {
      // console.log('ProjectWindowView: ', this.$el);
      this.template = _.template(projectWindowTemplate);
      this.subscribeEvents();
    }, 

    subscribeEvents: function() {
      var self = this;
      this.model.on('change', this.render, this);
      CkD.EventHub.on('project-window:on-project-thumb-click', this.setModel, this);
      CkD.EventHub.on('project-window:on-close-window', this.clearModel, this);
      $(document).keyup(function(e){
        switch (e.keyCode) {
          case 27:
            self.clearModel();
            break;
        }
      });
    },

    // Someday i'll get an API together!
    // getTemplate: function() {
    //   var self = this;
    //   $.get('/project/default', function(templateMarkup){
    //     self.template = _.template(templateMarkup);
    //   });
    // },

    setModel: function(data) {
      this.model.set(data);
    },

    render: function() {
      if (this.model.get('title')) {
        this.$el.html(this.template(this.model.attributes));
        this.initWindowGallery();
      }
      this.toggleProjectWindow();
    },

    onKeyUp: function (e) {
      switch (e.keyCode) {
        case 27:
          this.clearModel();
          break;
      }
    },

    clearModel: function() {
      this.model.clear();
    },

    toggleProjectWindow: function() {
      this.$el.toggle();
      $('#project-window-overlay').toggle();
    },

    initWindowGallery: function() {
      var projectWindowGallery = new ProjectWindowGalleryView({
        el: $('.window-gallery', this.$el),
        model: new WindowGalleryModel({ isOpen: false, currentIndex: null, currentImage: null }),
        collection: new WindowGalleryCollection(this.model.get('gallery'))
      });
    }

  });

  var projectWindowTemplate = '<div class="BB_template">' +
    '<div class="window-toggle-area">' +
      '<h4 class="fancy-gallery-header sixteen columns"><%= title %></h4>' +
      
      '<div class="four columns fancy-gallery-desc">' +
        '<p><%= description %></p>' +
      '</div>' +
      
      '<ul class="four columns fancy-gallery-highlights">' +
        '<% _.each(bullets, function(bullet){ %>' +
          '<li><h6><%= bullet %></h6></li>' +
        '<% }); %>' +
      '</ul>' +
      
      '<div class="eight columns fancy-gallery-image">' +
        '<img src="assets/images/<%= mainImage.feature %>" />' +
      '</div>' +
    '</div>' +
    '<i class="project-window-close-btn"><span>X</span></i>' +
    '<div class="sixteen columns window-gallery collapsed">' +
      '<nav class="sixteen columns alpha omega">' +
        '<ol class="window-gallery-nav">' +
          '<% _.each(gallery, function(galItem){ %>' +
          '<li class="gallery-nav-item three columns">' +
            // href checks if galItem.fullRes is a relative path
            '<a class="gallery-nav-link" href="<% if (galItem.fullRes.indexOf("http") === -1) { %>assets/images/<% } %><%= galItem.fullRes %>" target="_blank">' +
              '<img src="assets/images/<%= galItem.thumb %>">' +
            '</a>' +
          '</li>' +
          '<% }); %>' +
        '</ol>' +
        '<i class="scrollThumbsBut Left"></i>' +
        '<i class="scrollThumbsBut Right"></i>' +
      '</nav>' +

      '<div class="window-gallery-slides sixteen columns alpha omega"></div>' +
    '</div>'
  '</div>';

  return ProjectWindowView;
});