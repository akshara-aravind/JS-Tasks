//list of items

const list = document.querySelector('.list')
window.addEventListener('keypress', (e) =>{
    if(e.shiftKey === true && e.key === 'a' && list.style.display === 'block'){
        list.style.display = 'none'
    }else if(e.shiftKey === true && e.key === 'a' && list.style.display === 'none'){
        list.style.display = 'block'
    }
    })