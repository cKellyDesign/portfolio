define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, _){

	var NavView = Backbone.View.extend({
		

		initialize: function() {
			console.log('Nav View Triggered');
		}
	});

	return NavView;
});