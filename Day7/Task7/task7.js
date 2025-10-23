//7. Create a container with random text and should be scrollable. Show a progress bar below, that fills as the user scrolls down the page.
const color =document.querySelector('.color')
window.addEventListener('scroll',() =>{
const scrollTop = document.documentElement.scrollTop;
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const percent = (scrollTop / scrollHeight) * 100
color.style.width = percent + '%'
})