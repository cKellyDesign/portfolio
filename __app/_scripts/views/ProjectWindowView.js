define([], function(){
  var ProjectWindowView = Backbone.View.extend({

    events: {
      'click .project-window-close-btn': 'clearModel'
    },

    initialize: function() {
      console.log('ProjectWindowView: ', this.$el);
      this.getTemplate();
      this.subscribeEvents();
      // _.tempate(this.$el);
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
      }
      this.toggleProjectWindow();
    },

    clearModel: function() {
      this.model.clear();
    },

    toggleProjectWindow: function() {
      this.$el.toggle();
      $('#project-window-overlay').toggle();
    }

  });
  return ProjectWindowView;
});