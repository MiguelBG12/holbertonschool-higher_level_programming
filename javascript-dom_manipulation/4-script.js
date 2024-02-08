// JavaScript script that adds a li element to a list when the user clicks on the element with id add_item
document.addEventListener("DOMContentLoaded", function(){
    const additem = document.querySelector('#add_item');
    additem.addEventListener('click', function(){
        const ulelement = document.querySelector('.my_list');
        const li = document.createElement('li');
        li.textContent = 'Item';
        ulelement.appendChild(li)
    })
})