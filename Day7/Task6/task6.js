const height = document.querySelector('.height')
const width = document.querySelector('.width')

window.addEventListener('resize',() =>{
    height.textContent = window.innerHeight
    width.textContent = window.innerWidth
})