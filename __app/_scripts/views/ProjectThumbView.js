define([
  './MobileProjectView',
  'models/ProjectWindowModel'
  ], function (MobileProjectView, ProjectWindowModel){

	var ProjectThumbView = Backbone.View.extend({

		projectSlug: null,
    isDesktop: $(window).innerWidth() >= 768,

		events: {
			'click': 'onThumbClick'
		},

		initialize: function () {
			this.template = _.template(ProjectThumbTemplate);
			this.$el.html(this.template(this.model.attributes));
      if ( !this.isDesktop ) {
        this.initMobileProjectView();
      }
		},

		onThumbClick: function(e) {
			e.preventDefault();
			e.stopPropagation();
      if ( this.isDesktop ) {
        CkD.EventHub.trigger('project-window:on-project-thumb-click', this.model.attributes);
      } else {
        CkD.EventHub.trigger('mobile-project:on-project-thumb-click', this.model.get('slug'));
      }
		},

    initMobileProjectView: function() {
      var mobileProjectView = new MobileProjectView({
        el: $('.mobileProjectWrapper.' + this.model.get('slug')),
        model: new ProjectWindowModel(this.model.toJSON())
      });
    }

	});

	var ProjectThumbTemplate = '<a class="galThumb" href="#">' +
      '<div class="thumbWrap">' +
        '<div class="hoverWrap">' +
          '<span><%= title %></span>' +
        '</div>' +
        '<img src="<%= mainImage.lowRes %>">' +
      '</div>' +
  '</a>';

	return ProjectThumbView;
});