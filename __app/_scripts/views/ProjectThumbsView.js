define([
  'models/ProjectThumbModel',
  './ProjectThumbView'
  ], function (ProjectThumbModel, ProjectThumbView){

  var ProjectThumbsView = Backbone.View.extend({

    initialize: function(){
      // console.log('ProjectThumbsView: collection -  \n', this.collection);
      this.initThumbViews();
      
      
    },

    initThumbViews: function() {
      var self = this;
      _.each(self.collection.toJSON(), function(project) {

        self.$el.append('<li class="one-third column" id="' + project.slug + '"></li>' + 
          '<div class="mobileProjectWrapper ' + project.slug + '"></div>');
        // var thisSlug = $(galThumbEle).data('project-slug');
        // var thisModel = _.findWhere(self.collection.toJSON(), { slug: thisSlug });

        var projectThumbView = new ProjectThumbView({
          el: $('#' + project.slug),
          model: new ProjectThumbModel(project)
        });
      });
    }
  });

  return ProjectThumbsView;
})