define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, __, Hand){

	var Nav = Backbone.Collection.extend({
		

		initialize: function() {
			console.log('Nav View Triggered');
			console.log(this.el);
		}
	});

	return Nav;
});