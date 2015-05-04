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
      // console.log("CONTACT FORM VIEW INITIALIZED!!!!", this.$('form'));
    },

    onSumbitClick: function(e) {
      e.preventDefault();
      e.stopPropagation();

      if (!this.nameInput.value || this.nameInput.value === '' || this.nameInput.value === 'Name') {
        $(this.nameInput).addClass('invalid');
        alert('Please enter your name so I know who you are!');
        return;
      } else if (!this.emailInput.value || this.emailInput.value === '' || this.emailInput.value === 'Email') {
        $(this.emailInput).addClass('invalid');
        alert('Please enter your email so I know how to contact you!');
        return;
      } else if (!this.messageInput.value || this.messageInput.value === '' || this.messageInput.value === 'Message') {
        $(this.messageInput).addClass('invalid');
        alert('While I\'m pleased you feel so inclined as to reach out to me, please include a message so I know how I might be of assistance!');
        return;
      }

      this.sendEmail(this.nameInput.value, this.emailInput.value, this.messageInput.value);
    },

    sendEmail: function(name, email, message) {
      var self = this;
      var newMessage = '\n\n~~~ cKellyDesign Form Submition ~~~' + 
      '\nFrom: ' + (name || '00ps') +
      '\nAt: ' + (email || '00ps') + 
      '\nMessage: ' + (message || '00ps');

      var newData = {
        name: name || '00ps',
        email: email || '00ps',
        message: newMessage
      };
      this.newMessage = newMessage;

      $.ajax({
        type: 'POST',
        url: 'http://www.cKellyDesign.net/contact.php',
        // contentType: 'application/jsonp',
        dataType: 'application/jsonp',
        crossDomain: true,
        data: newData,
        success: function() { self.resetForm(); },
        error: function() { self.handleError(); }
      }).done();
    },

    resetForm: function() {
      this.$('.invalid').removeClass('invalid');
      this.nameInput.value = 'Name';
      this.emailInput.value = 'Email';
      this.messageInput.value = 'Message';
      console.log('Contact Form Reset');
      alert('Thank you for your message, I will do my best to respond in a timely mannor!\n\nConor Kelly')

    },

    handleError: function() {
      // console.log('newMessage: \n', this.newMessage);
      alert('I apologize, though it seems you did everything correct, it seems something went wrong! Please try again or reach out to me at ckelly@ckellydesign.net!\n\nThank you!\nConor');
    }

  });

  // _.extend(ContactFormView, Backbone.Validation.mixin);

  return ContactFormView;
});