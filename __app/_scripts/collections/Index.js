define([
	'jquery',
	'backbone',
	'underscore',
	'views/NavView',
	'views/ProjectThumbView'
], function ($, Backbone, _, NavView, ProjectThumbView){

	var Index = Backbone.Collection.extend({
		el: 'body',

		events: {
			'click .galThumb': 'whatsThis'
		},

		initialize: function() {
			console.log('Index Collection Triggered');

			var navView = new NavView({ el: $('#deskNav') });
			this.initProjectView();
		},

		initProjectView: function() {
			$('.galThumb').each(function (i, thisObj) {
				var projectThumbView = new ProjectThumbView({ el: thisObj });
			});			
		}
	});

	return Index;
});