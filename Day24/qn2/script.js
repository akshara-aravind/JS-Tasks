const menuBar = document.querySelector('.menu')
const close = document.querySelector('.close')
const list = document.querySelector('.items')
const list1 = document.querySelector('.list1')
const list2 = document.querySelector('.list2')
const list3 = document.querySelector('.list3')
const right1 = document.querySelector('.right1')
const right2 = document.querySelector('.right2')
const right3 = document.querySelector('.right3')
menuBar.addEventListener('click',()=>{
menuBar.style.display = 'none'
close.style.display = 'block'
list.style.display = 'flex'
list1.addEventListener('click',()=>{
    right1.style.display = 'block'
    right2.style.display = 'none'
    right3.style.display = 'none'
})
list2.addEventListener('click',()=>{
    right1.style.display = 'none'
    right2.style.display = 'block'
    right3.style.display = 'none'
})
list3.addEventListener('click',()=>{
    right1.style.display = 'none'
    right2.style.display = 'none'
    right3.style.display = 'block'
})
})
close.addEventListener('click',()=>{
    close.style.display = 'none'
    menuBar.style.display = 'block'
    list.style.display = 'none'
    right1.style.display = 'none'
    right2.style.display = 'none'
    right3.style.display = 'none'
})