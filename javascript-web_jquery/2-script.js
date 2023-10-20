$(document).ready(function() {
    // Attach a click event handler to the #red_header element
    $('#red_header').click(function() {
      // Use jQuery to select the <header> element and change its text color to red
      $('header').css('color', '#FF0000');
    });
  });
  