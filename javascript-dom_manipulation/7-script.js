// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Select the "ul" element with id "list_movies"
    const movieList = document.getElementById("list_movies");
  
    // URL to fetch the list of movies
    const apiUrl = "https://swapi-api.hbtn.io/api/films/?format=json";
  
    // Make a Fetch request to the API
    fetch(apiUrl)
      .then(response => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        // Get the list of movies from the data
        const movies = data.results;
  
        // Iterate through the list of movies and add their titles to the "ul" element
        movies.forEach(movie => {
          const listItem = document.createElement("li");
          listItem.textContent = movie.title;
          movieList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error("Error:", error);
        movieList.textContent = "Error fetching data";
      });
});  