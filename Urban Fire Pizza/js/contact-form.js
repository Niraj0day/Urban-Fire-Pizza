$(document).ready(function() {
    $('#contact-form').submit(function(e) {
      e.preventDefault();
      var formData = $(this).serialize();
  
      $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: formData,
        success: function(response) {
          // Check the response from the server
          if (response.success) {
            // Reset the contact form
            $('#contact-form')[0].reset();
  
            // Redirect to another page or perform other actions
            window.location.href = 'index.html';
          } else {
            // Display an error message if the server indicates a failure
            alert('An error occurred while submitting the form. Please try again.');
          }
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText); // Log the detailed error response from the server
            alert('An error occurred while submitting the form. Please try again.');
          
          
              
        }
      });
    });
  });
  