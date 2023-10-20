$(document).ready(function() {
    // Attach a click event handler to the #toggle_header element
    $('#toggle_header').click(function() {
      // Use jQuery to select the <header> element
      var header = $('header');
  
      // Toggle the class between "red" and "green"
      if (header.hasClass('red')) {
        header.removeClass('red');
        header.addClass('green');
      } else {
        header.removeClass('green');
        header.addClass('red');
      }
    });
});
  