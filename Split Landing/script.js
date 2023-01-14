const container = document.querySelector('.container')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

// For Left Section of the Page
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// For Right Section of the Page
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))