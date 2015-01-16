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
			'click .galThumb': 'whatsThis'
		},

		initialize: function() {
			// console.log('Index Collection Triggered: ', this.el);

			var navView = new NavView({ el: $('#deskNav') });
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