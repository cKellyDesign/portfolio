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
        alert('Please enter your name so I know who you are!');
        return;
      } else if (!this.emailInput.value || this.emailInput.value === '' || this.emailInput.value === 'Email') {
        alert('Please enter your email so I know how to contact you!');
        return;
      } else if (!this.messageInput.value || this.messageInput.value === '' || this.messageInput.value === 'Message') {
        alert('While I\'m pleased you feel so inclined as to reach out to me, please include a message so I know how I might be of assistance!');
        return;
      }

      this.sendEmail(this.nameInput.value, this.emailInput.value, this.messageInput.value);
    },

    sendEmail: function(name, email, message) {
      var newMessage = '\n\n~~~ cKellyDesign Form Submition ~~~' + 
      '\nFrom: ' + (name || '00ps') +
      '\nAt: ' + (email || '00ps') + 
      '\nMessage: ' + (message || '00ps');

      var newData = {
        name: name || '00ps',
        email: email || '00ps',
        message: newMessage
      };

      $.ajax({
        type: 'POST',
        url: 'http://www.cKellyDesign.net/contact.php',
        dataType: 'jsonp',
        data: newData,
        beforeSend: setHeader
      }).done(function(responseData){
        console.log('AJAX COMPLETE....from this end...');
      });
    }

  });

  // _.extend(ContactFormView, Backbone.Validation.mixin);

  return ContactFormView;
});