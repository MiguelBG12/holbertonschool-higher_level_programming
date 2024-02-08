// JavaScript script that toggles the class of the header element when the user clicks on the tag id
document.addEventListener("DOMContentLoaded", function() {
    const updateButton = document.getElementById('update_header');
    const header = document.querySelector('header');

    updateButton.addEventListener('click', function() {
        header.textContent = 'New Header!!!';
    });
});