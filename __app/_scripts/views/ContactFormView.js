define([], function(){


  var ContactFormView = Backbone.View.extend({

    nameInput: this.$('.j-name-input').get(0),
    emailInput: this.$('.j-email-input').get(0),
    messageInput: this.$('.j-message-input').get(0),
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
      var self = this;
      this.model.set({
        name: self.nameInput.value,
        email: self.emailInput.value,
        message: self.messageInput.value
      });


    }

  });

  _.extend(ContactFormView, Backbone.Validation.mixin);

  return ContactFormView;
});