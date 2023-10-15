// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Select the element with id "red_header"
    const redHeader = document.querySelector("#red_header");

    // Select the header element by its tag name
    const headerElement = document.querySelector("header");

    // Add a click event listener to the "red_header" element
    redHeader.addEventListener("click", function () {
        // Add the "red" class to the header element
        headerElement.classList.add("red");
    });
});