$(document).ready(function() {
    // Perform an AJAX GET request to the API URL
    $.get("https://hellosalut.stefanbohacek.dev/?lang=fr", function(data) {
      // Extract the translation of "hello"
      let helloTranslation = data.hello;
  
      // Use jQuery to select the #hello element and set its text to the translation
      $('#hello').text(helloTranslation);
    });
});
