const show = document.querySelector('.show')
const display = document.querySelectorAll('.display')
const first = document.querySelector('.notificationBox1')
const second = document.querySelector('.notificationBox2')
const third = document.querySelector('.notificationBox3')
const close1 = document.querySelector('.closeImg1')
const close2 = document.querySelector('.closeImg2')
const close3 = document.querySelector('.closeImg3')

show.addEventListener('click',()=>{
  display.forEach(item =>{
    if(item.style.right === '-521px'){
    item.style.right = '10px'
    }else{
      item.style.right = '-521px'
    }
  })
})

close1.addEventListener('click',()=>{
    first.style.display = 'none'
})
close2.addEventListener('click',()=>{
    second.style.display = 'none'
})
close3.addEventListener('click',()=>{
    third.style.display = 'none'
})