define([
	'jquery',
	'backbone',
	'underscore',
	'views/NavView',
	'views/ProjectThumbView'
], function ($, Backbone, _, NavView, ProjectThumbView){

	var Index = Backbone.Collection.extend({
		el: $('body'),

		events: {
			'click #project-window-overlay': 'triggerProjectWindowClose'
		},

		initialize: function() {
			// console.log('Index Collection Triggered: ', this.el);

			var navView = new NavView({ el: $('.j-nav') });
			this.initProjectView();
		},

		initProjectView: function() {
			_.each($('.galThumb'), function (thisObj) {
				var projectThumbView = new ProjectThumbView({ el: $(thisObj) });
			});			
		}
	});

	return Index;
});