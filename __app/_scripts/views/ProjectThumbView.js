define([], function (){

	var ProjectThumbView = Backbone.View.extend({

		projectSlug: null,

		events: {
			'click': 'onThumbClick'
		},

		initialize: function () {
			this.template = _.template(ProjectThumbTemplate);
			this.$el.html(this.template(this.model.attributes));
		},

		onThumbClick: function(e) {
			e.preventDefault();
			e.stopPropagation();
			CkD.EventHub.trigger('project-window:on-project-thumb-click', this.model.attributes);
		}

	});

	var ProjectThumbTemplate = '<a class="galThumb" href="#">' +
      '<div class="thumbWrap">' +
          '<span><%= title %></span>' +
          '<img src="assets/images/<%= mainImage.lowRes %>">' +
      '</div>' +
  '</a>';

	return ProjectThumbView;
});