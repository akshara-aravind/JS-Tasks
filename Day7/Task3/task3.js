//3. Create a box which changes it's border colour randomly when user makes a double-click inside the box.
const box = document.querySelector('.box')
box.addEventListener('dblclick',() =>{
    // console.log('double clicked')
  const random = '#'+Math.round(Math.random() * 16777215).toString(16)
  box.style.borderColor = random
})