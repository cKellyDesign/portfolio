define([], function() {
  var ContactFormModel = Backbone.Model.extend({

    name: null,
    email: null,
    message: null,

    initialize: function() {
      console.log("CONTACT FORM MODEL INITIZLIZED!!!");
    }
  });
  return ContactFormModel;
});