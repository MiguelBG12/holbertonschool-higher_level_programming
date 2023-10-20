$(document).ready(function() {
    // Perform an AJAX GET request to the API URL
    $.get("https://swapi-api.hbtn.io/api/people/5/?format=json", function(data) {
      // Extract the character's name from the response data
      let characterName = data.name;
      
      // Use jQuery to select the #character element and set its text to the character's name
      $('#character').text(characterName);
    });
});
  