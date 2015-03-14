require([
  '../../_models/model',
	'views/Index',
  'models/IndexModel'
], function (LoadedModel, Index, IndexModel) {
  CkD = window.CkD || {}; // Create cKellyDesign window object
  CkD.EventHub = {}; // Create object for event pub / sub
  _.extend(CkD.EventHub, Backbone.Events); // Extend Backbone Events to EventHub
  CkD.Index = new Index({ // Init Index
    el: $('body'),
    model: new IndexModel(CkD.loadedModel)
  });
});