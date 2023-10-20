$(document).ready(function() {
    // Attach a click event handler to the #update_header element
    $('#update_header').click(function() {
      // Use jQuery to select the <header> element and update its text
      $('header').text('New Header!!!');
    });
});
  