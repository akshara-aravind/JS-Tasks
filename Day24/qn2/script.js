const menuBar = document.querySelector('.menu')
const close = document.querySelector('.close')
const list = document.querySelector('.items')
const list1 = document.querySelector('.list1')
const list2 = document.querySelector('.list2')
const list3 = document.querySelector('.list3')
const panel1 = document.querySelector('#panel1')
const panel2 = document.querySelector('#panel2')
const panel3 = document.querySelector('#panel3')
menuBar.addEventListener('click',()=>{
menuBar.style.display = 'none'
close.style.display = 'block'
list.style.display = 'flex'
})

close.addEventListener('click',()=>{
    close.style.display = 'none'
    menuBar.style.display = 'block'
    list.style.display = 'none'
    panel1.style.display = 'none'
    panel2.style.display = 'none'
    panel3.style.display = 'none'
})
list1.addEventListener('click',()=>{
    if(panel1.style.display === 'none'){
        panel1.style.display = 'block'
    }else{
        panel1.style.display = 'none'
    }
})
list2.addEventListener('click',()=>{
    panel1.style.display = 'none'
    panel3.style.display = 'none'
    if(panel2.style.display === 'none'){
        panel2.style.display = 'block'
    }else{
        panel2.style.display = 'none'
    }
})
list3.addEventListener('click',()=>{
    panel1.style.display = 'none'
    panel2.style.display = 'none'
    if(panel3.style.display === 'none'){
        panel3.style.display = 'block'
    }else{
        panel3.style.display = 'none'
    }
})