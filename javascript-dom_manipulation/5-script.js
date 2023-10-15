// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Select the element with id "update_header"
    const updateHeaderButton = document.getElementById("update_header");
  
    // Select the "header" element
    const header = document.querySelector("header");
  
    // Add a click event listener to the "update_header" element
    updateHeaderButton.addEventListener("click", function () {
      // Update the text content of the "header" element
      header.textContent = "New Header!!!";
    });
});