define([
	'jquery',
	'backbone',
	'underscore',
	'./NavView',
	'./ProjectThumbView'
], function ($, Backbone, _, NavView, ProjectThumbView){

	var Index = Backbone.View.extend({

		initialize: function() {
			// this.subscribe();
			this.initChildViews();
			// console.log('Index Collection Triggered: ', this);
		},

		subscribe: function() {
			// this.model.on('change', this.initChildViews, this);
		},

		initChildViews: function() {
			this.initNavView();
			this.initProjectView();
		},

		initProjectView: function() {
			_.each($('.galThumb'), function (thisObj) {
				var projectThumbView = new ProjectThumbView({ el: $(thisObj) });
			});			
		},

		initNavView: function() {
			var navView = new NavView({ el: $('.j-nav') });
		}
	});

	return Index;
});