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
      var newEmail = '~~~ cKellyDesign Form Submition ~~~' + 
      '\nFrom: ' + (name|| '00ps') +
      '\nAt: ' + (email || '00ps') + 
      '\nMessage: ' + (message || '00ps');

      console.log(newEmail);
    },

    initForm: function(){
      // this.$('form').bootstrapValidator({
      //   // live: 'disabled',
      //   message: 'This value is not valid',
      //   feedbackIcons: {
      //       valid: 'glyphicon glyphicon-ok',
      //       invalid: 'glyphicon glyphicon-remove',
      //       validating: 'glyphicon glyphicon-refresh'
      //   },
      //   fields: {
      //       Name: {
      //           validators: {
      //               notEmpty: {
      //                   message: 'The Name is required and cannot be empty'
      //               }
      //           }
      //       },
      //       Email: {
      //           validators: {
      //               notEmpty: {
      //                   message: 'The email address is required'
      //               },
      //               emailAddress: {
      //                   message: 'The email address is not valid'
      //               }
      //           }
      //       },
      //       Message: {
      //           validators: {
      //               notEmpty: {
      //                   message: 'The Message is required and cannot be empty'
      //               }
      //           }
      //       }
      //   }
      // });
      // console.log("~~~~ bootstrapValidator initted!!");
    }

  });

  // _.extend(ContactFormView, Backbone.Validation.mixin);

  return ContactFormView;
});