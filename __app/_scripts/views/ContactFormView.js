define([], function(){
  var ContactFormView = Backbone.View.extend({

    nameInput: this.$('.j-name-input'),
    emailInput: this.$('.j-email-input'),
    messageInput: this.$('.j-message-input'),
    submitInput: this.$('.j-submit-input'),

    events: {
      'click .j-submit-input': 'onSumbitClick'
    },

    initialize: function() {
      console.log("CONTACT FORM VIEW INITIALIZED!!!!");
    },

    onSumbitClick: function(e) {
      e.preventDefault();
      e.stopPropagation();

      console.log("~~~~~ SUMBIT CLICK!!!");
    }

  });

  return ContactFormView;
});