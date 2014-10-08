define([
	'jquery',
	'backbone',
	'underscore',
	'views/NavView'
], function ($, Backbone, __, NavView){

	var Index = Backbone.Collection.extend({
		el: 'body',

		initialize: function() {
			console.log('Index Collection Triggered');

			var navView = new NavView({ el: $('#deskNav') });

			// var navView = new NavView();
		}
	});

	return Index;
});