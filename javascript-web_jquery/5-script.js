$(document).ready(function() {
    // Attach a click event handler to the #add_item element
    $('#add_item').click(function() {
      // Create a new <li> element with the content "Item"
      let newItem = $('<li>Item</li>');
  
      // Append the new <li> element to the UL with the class "my_list"
      $('.my_list').append(newItem);
    });
  });
  