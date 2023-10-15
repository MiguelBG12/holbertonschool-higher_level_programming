// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Select the element with id "red_header"
    const redHeader = document.querySelector("#red_header");

    // Add a click event listener to it
    redHeader.addEventListener("click", function () {
        // Select the header element by its tag name
        const headerElement = document.querySelector("header");

        // Update the text color to red (#FF0000)
        headerElement.style.color = "#FF0000";
    });
});