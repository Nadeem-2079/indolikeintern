// You can add JavaScript for dynamic functionality or interactivity, such as a search function
document.querySelector('.header .search-bar button').addEventListener('click', function() {
    let searchQuery = document.querySelector('.header .search-bar input').value;
    alert('You searched for: ' + searchQuery);
});
