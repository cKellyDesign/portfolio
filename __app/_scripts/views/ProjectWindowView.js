define([], function(){
  var ProjectWindowView = Backbone.View.extend({

    events: {
      'click .project-window-close-btn': 'unsetModel'
    },

    initialize: function() {
      console.log('ProjectWindowView: ', this);
      this.subscribeEvents();
    }, 

    subscribeEvents: function() {
      this.model.on('change', this.toggleProjectWindow, this);
      CkD.EventHub.on('project-window:on-project-thumb-click', this.setModel, this);
    },

    setModel: function(data) {
      console.log(data);
      this.model.set(data);
      console.log('new model: ',this.model);
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