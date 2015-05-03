define([], function() {
  var ContactFormModel = Backbone.Model.extend({

    initialize: function() {
      console.log("CONTACT FORM MODEL INITIZLIZED!!!", this);
    }
  });
  return ContactFormModel;
});