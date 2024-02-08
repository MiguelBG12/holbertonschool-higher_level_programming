// JavaScript script that adds the class element when the user clicks on the tag with id
document.addEventListener("DOMContentLoaded", function(){
    const redheader = document.querySelector("#red_header");
    redheader.addEventListener("click", function(){
        const headerElement = document.querySelector("header");
        headerElement.setAttribute('class', 'red');
    });
});
