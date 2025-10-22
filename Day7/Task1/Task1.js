// 1. Create a box which shows a random background colour when user hovers over it. The colour should be cleared when mouse is taken out of the box.
const box = document.querySelector('.box')
box.addEventListener('mouseover',() =>{
    // console.log('clicked')
    // let randoms = ('red','green','blue','yellow','black','white','grey')
    let random = "#"+Math.round(Math.random()*16777215).toString(16);
      box.style.backgroundColor = random    
})
box.addEventListener('mouseout',() =>{
    box.style.backgroundColor = '#fff'
})