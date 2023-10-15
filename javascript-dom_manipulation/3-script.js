// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Select the "header" element
    const header = document.querySelector('header');
  
    // Select the element with id "toggle_header"
    const toggleButton = document.getElementById('toggle_header');
  
    // Add a click event listener to the "toggle_header" element
    toggleButton.addEventListener('click', function () {
      // Toggle the class of the "header" element between "red" and "green"
      if (header.classList.contains('red')) {
        header.classList.remove('red');
        header.classList.add('green');
      } else {
        header.classList.remove('green');
        header.classList.add('red');
      }
    });
  });