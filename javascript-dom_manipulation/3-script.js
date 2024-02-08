// JavaScript script that toggles the class of the header element when the user clicks on the tag id
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle_header');
    const header = document.querySelector('header');

    toggleButton.addEventListener('click', function() {
        if (header.classList.contains('red')) {
            header.classList.remove('red');
            header.classList.add('green');
        } else {
            header.classList.remove('green');
            header.classList.add('red');
        }
    });
});