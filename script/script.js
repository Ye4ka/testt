let slider = document.querySelector('.slides')
let slides = document.querySelectorAll('.slide')
let index = 0
let next = document.querySelector('.next')
next.addEventListener('click', function(){
    index = (index + 1) % slides.length
    slider.style.transform = 'translateX(' + (-index * 25) + '%)'
})

let prev = document.querySelector('.prev')
prev.addEventListener('click', function(){
    index = (index - 1 + slides.length) % slides.length
    slider.style.transform = 'translateX(' + (-index * 25) + '%)'
}) 