// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Select the element with id "character"
    const characterElement = document.getElementById('character');
  
    // URL to fetch the character's name
    const apiUrl = "https://swapi-api.hbtn.io/api/people/5/?format=json";
  
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
        // Get the character's name from the data
        const characterName = data.name;
  
        // Display the character's name in the "character" element
        characterElement.textContent = characterName;
      })
      .catch(error => {
        console.error("Error:", error);
        characterElement.textContent = "Error fetching data";
      });
});