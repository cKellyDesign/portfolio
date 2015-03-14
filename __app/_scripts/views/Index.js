define([
	'jquery',
	'backbone',
	'underscore',
	'./NavView',
	'./ProjectThumbView'
], function ($, Backbone, _, NavView, ProjectThumbView){

	var Index = Backbone.View.extend({
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