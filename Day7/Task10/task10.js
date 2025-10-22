const list = document.querySelector('.list')
window.addEventListener('keypress',e =>{
    if(e.shiftKey === true && e.key === 'A'){
        list.style.display = 'block'
    }
}) 