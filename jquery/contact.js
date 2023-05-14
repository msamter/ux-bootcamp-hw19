$(function() {
    // Intercept the form submission
    $('#contact-form').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the form data
      var formData = {
        'name': $('input[name=name]').val(),
        'email': $('input[name=email]').val(),
        'subject': $('input[name=subject]').val(),
        'message': $('textarea[name=message]').val()
      };
  
      // Send the form data to the server
      $.