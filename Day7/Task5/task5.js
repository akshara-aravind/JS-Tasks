//5. Add additional changes to 3rd question mentioned above by updating the border-colour only once. If the border colour is updated once, further double-click should not update the border colour. 
const box = document.querySelector('.box')
box.addEventListener('dblclick',doubleClick)
function doubleClick(){
    const random = '#'+Math.round(Math.random()*16777215).toString(16)
    box.style.borderColor = random
    box.removeEventListener('dblclick',doubleClick)
}
