// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Select the element with id "hello"
    const helloElement = document.getElementById('hello');
  
    // URL to fetch the translation
    const apiUrl = 'https://hellosalut.stefanbohacek.dev/?lang=fr';
  
    // Make a Fetch request to the API
    fetch(apiUrl)
      .then(response => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        // Get the translation of "hello" from the data
        const translation = data.hello;
  
        // Display the translation in the "hello" element
        helloElement.textContent = translation;
      })
      .catch(error => {
        console.error('Error:', error);
        helloElement.textContent = 'Error fetching translation';
      });
});
  