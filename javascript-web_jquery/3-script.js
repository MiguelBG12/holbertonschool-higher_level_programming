$(document).ready(function() {
    // Attach a click event handler to the #red_header element
    $('#red_header').click(function() {
      // Use jQuery to select the <header> element and add the "red" class
      $('header').addClass('red');
    });
});
  