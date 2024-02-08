// JavaScript script that fetches an URL and displays the value of hello from that fetch in the HTML element with id hello
document.addEventListener("DOMContentLoaded", function() {
    const helloElement = document.getElementById('hello');

    fetch('https://hellosalut.stefanbohacek.dev/?lang=fr')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            helloElement.textContent = data.hello;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
