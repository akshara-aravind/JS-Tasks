const close = document.querySelector('.content')
const closeImg = document.querySelector('.closeImg')

closeImg.addEventListener('click',()=>{
close.style.display = 'none'
})
window.addEventListener('click',(e)=>{
    if(!close.contains(e.target)){
    close.style.display = 'none'
    }
})
window.addEventListener('keydown',(e)=>{
if(e.code === 'Escape'){
    close.style.display = 'none'
}
})