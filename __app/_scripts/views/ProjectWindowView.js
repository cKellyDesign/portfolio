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
      this.getTemplate();
      this.subscribeEvents();
    }, 

    subscribeEvents: function() {
      this.model.on('change', this.render, this);
      CkD.EventHub.on('project-window:on-project-thumb-click', this.setModel, this);
    },

    getTemplate: function() {
      var self = this;
      $.get('/project/default', function(templateMarkup){
        self.template = _.template(templateMarkup);
      });
    },

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
  return ProjectWindowView;
});