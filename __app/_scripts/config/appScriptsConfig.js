require.config({

	baseUrl: '../main',
	deps: ['require.js'],
	shim: {
		'jquery': {
			exports: '$'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'transition': {
			exports: 'transition'
		},
		'bootstrapValidator': {
			exports: 'bootstrapValidator'
		}
	},
	paths: {
		'jquery': '../../_components/jquery/jquery',
		'backbone': '../../_components/backbone/backbone',
		'underscore': '../../_components/underscore/underscore',
		'transition': '../../_components/transition/jquery.transit.min',
		'bootstrapValidator':'../../_components/bootstrapValidator/bootstrapValidator',
		'main': '../main',
		'collections': '../collections',
		'views': '../views',
		'models': '../models'
	}
});