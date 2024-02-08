// JavaScript script that updates the text color of the header element
document.addEventListener("DOMContentLoaded", function(){
    const redheader = document.querySelector("#red_header");
    //When the user clicks on the tag with id
    redheader.addEventListener("click", function(){
        const headerElement = document.querySelector("header");
        headerElement.style.color = "#FF0000"
    });
});