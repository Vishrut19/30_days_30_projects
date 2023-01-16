const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// Open the Navbar
open.addEventListener('click', () => container.classList.add('show-nav'))

// Close the Navbar
close.addEventListener('click', () => container.classList.remove('show-nav'))