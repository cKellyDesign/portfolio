define([
  'models/ProjectThumbModel',
  './ProjectThumbView',
  './ProjectWindowView',
  'models/ProjectWindowModel'
  ], function (ProjectThumbModel, ProjectThumbView, ProjectWindowView, ProjectWindowModel){

  var ProjectThumbsView = Backbone.View.extend({

    initialize: function(){
      console.log('ProjectThumbsView: \n', this);
      this.initThumbViews();
      this.initProjectVWindow();
      
    },

    initThumbViews: function() {
      var self = this;
      _.each($('.galThumb', this.$el), function(galThumbEle) {

        var thisSlug = $(galThumbEle).data('project-slug');
        var thisModel = _.findWhere(self.collection.toJSON(), { slug: thisSlug });

        var projectThumbView = new ProjectThumbView({
          el: $(galThumbEle),
          model: new ProjectThumbModel(thisModel)
        });
      });
    },

    initProjectVWindow: function() {
      var projectWindowView = new ProjectWindowView({
        el: $('.project-window'),
        model: new ProjectWindowModel()
      });
    }
  });

  return ProjectThumbsView;
})