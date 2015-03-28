define([
  'models/ProjectThumbModel',
  './ProjectThumbView',
  './ProjectWindowView',
  'models/ProjectWindowModel'
  ], function (ProjectThumbModel, ProjectThumbView, ProjectWindowView, ProjectWindowModel){

  var ProjectThumbsView = Backbone.View.extend({

    initialize: function(){
      console.log('ProjectThumbsView: collection -  \n', this.collection);
      this.initThumbViews();
      this.initProjectWindowView();
    },

    initThumbViews: function() {
      var self = this;
      _.each(self.collection.toJSON(), function(project) {

        self.$el.append('<li class="four columns" id="' + project.slug + '">');
        // var thisSlug = $(galThumbEle).data('project-slug');
        // var thisModel = _.findWhere(self.collection.toJSON(), { slug: thisSlug });

        var projectThumbView = new ProjectThumbView({
          el: $('#' + project.slug),
          model: new ProjectThumbModel(project)
        });
      });
    },

    initProjectWindowView: function() {
      var projectWindowView = new ProjectWindowView({
        el: $('.project-window'),
        model: new ProjectWindowModel()
      });
    }
  });

  return ProjectThumbsView;
})