// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Select the element with id "add_item"
    const addItemButton = document.getElementById("add_item");
  
    // Select the "ul" element with class "my_list"
    const myList = document.querySelector(".my_list");
  
    // Add a click event listener to the "add_item" element
    addItemButton.addEventListener("click", function () {
      // Create a new "li" element
      const newItem = document.createElement("li");
      newItem.textContent = "Item"; // Set the text content of the new "li" element
  
      // Append the new "li" element to the "my_list" ul
      myList.appendChild(newItem);
    });
});  