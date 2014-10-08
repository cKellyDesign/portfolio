define([
	'jquery',
	'backbone',
	'underscore',
	'../views/NavView'
], function ($, Backbone, __, Hand, NavView){

	var Index = Backbone.Collection.extend({
		el: 'body',

		initialize: function() {
			console.log('Index Collection Triggered');

			var navView = new NavView({ el: $('#deskNav') });
		}
	});

	return Index;
});