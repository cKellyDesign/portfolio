require([
	'collections/Index'
], function (Index) {
	window.Index = new Index(); // Init Index
  CkD = window.CkD || {}; // Create cKellyDesign window object
  CkD.EventHub = {}; // Create object for event pub / sub
  _.extend(CkD.EventHub, Backbone.Events); // Extend Backbone Events to EventHub
});