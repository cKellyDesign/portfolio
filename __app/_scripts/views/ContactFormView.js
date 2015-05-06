define([], function(){


  var ContactFormView = Backbone.View.extend({

    nameInput: this.$('.j-name-input').get(0),
    emailInput: this.$('.j-email-input').get(0),
    messageInput: this.$('.j-message-input').get(0),
    submitInput: this.$('.j-submit-input'),
    validationIndex: {
      'name': {
        'pattern': /[a-zA-Z]+/g,
        'exlcude': "Name"
      },
      'email': {
        'pattern': /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
        'exlcude': "Email"
      },
      'message': {
        'pattern': null,
        'exlcude': "Message"
      }
    },

    events: {
      'click .j-submit-input': 'onSumbitClick'
    },

    initialize: function() {
      // console.log("CONTACT FORM VIEW INITIALIZED!!!!"));
    },

    onSumbitClick: function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$('.invalid').removeClass('invalid');
      return this.validateForm() && this.sendEmail(this.nameInput.value, this.emailInput.value, this.messageInput.value);
    },

    validateForm: function() {
      if ( !this.validateField('name', this.nameInput.value) ) {

        $(this.nameInput).addClass('invalid');
        alert('Please enter your name so I know who you are!');
        return false;

      } else if ( !this.validateField('email', this.emailInput.value) ) {

        $(this.emailInput).addClass('invalid');
        alert('Please enter your email so I know how to contact you!');
        return false;

      } else if ( !this.validateField('message', this.messageInput.value) ) {

        $(this.messageInput).addClass('invalid');
        alert('While I\'m pleased you feel so inclined as to reach out to me, please include a message so I know how I might be of assistance!');
        return false;

      } else {
        return true;
      }
    },

    validateField: function(type, input){
      if (!type || !input || input === '') { return false; }

      if ( input === this.validationIndex[type].exlcude ) {
        return false;
      } 

      switch (type) {
        case 'email':
          return this.validationIndex[type].pattern.test(input);
          break;
        default:
          return true;
      }
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
      console.log('Sending Email:', newMessage);
      this.newMessage = newMessage;

      $.ajax({
        type: 'POST',
        url: 'http://www.cKellyDesign.net/contact.php',
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
      alert('I apologize, though it seems you did everything correct, it seems something went wrong! Please try again or reach out to me at ckelly@ckellydesign.net!\n\nThank you!\nConor');
    }

  });

  return ContactFormView;
});