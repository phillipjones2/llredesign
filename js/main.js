var expandNavButton = document.getElementById('expand-icon')
var navLinks = document.getElementById('nav-links')
var expandButton = document.getElementsByClassName('expand-button')[0];

expandButton.addEventListener("click", function (e) {
  navLinks.classList.toggle('toggle-top')
})
