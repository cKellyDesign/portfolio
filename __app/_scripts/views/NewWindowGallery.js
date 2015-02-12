define([],function(){

	var WindowGalleryModel = Backbone.Model.extend({});

	var WindowGalleryView = Backbone.View.extend({

		model: null,

		initialize: function(options) {
			this.model = options.model;
			this.viewModel = this.model.attributes;
			this.model.on('change', this.initInit());
			this.initInit();
		},

		initInit: function() {
			// console.log('hello world', this.viewModel);
		}
	});

	return {
		WindowGalleryModel: WindowGalleryModel,
		WindowGalleryView: WindowGalleryView
	};
});