$(document).ready(function() {
    // Perform an AJAX GET request to the API URL
    $.get("https://swapi-api.hbtn.io/api/films/?format=json", function(data) {
      // Iterate through the list of movies
      data.results.forEach(function(movie) {
        // Extract the movie title
        let movieTitle = movie.title;
  
        // Create a new list item with the movie title
        let listItem = $('<li>').text(movieTitle);
  
        // Use jQuery to select the #list_movies element and append the list item
        $('#list_movies').append(listItem);
      });
    });
});
  