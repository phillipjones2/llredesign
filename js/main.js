var expandNavButton = document.getElementById('expand-icon')
var navLinks = document.getElementById('nav-links')
var expandButtons = document.getElementsByClassName('expand-button')

expandNavButton.addEventListener("click", function (e) {
  if (navLinks.classList.contains('hidden')) {
    navLinks.classList.remove('hidden')
  } else {
    navLinks.classList.add('hidden')
  }
})
