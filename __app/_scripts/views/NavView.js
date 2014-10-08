define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, __){

	var NavView = Backbone.View.extend({
		

		initialize: function() {
			console.log('Nav View Triggered');
			console.log(this.el);
		}
	});

	return NavView;
});