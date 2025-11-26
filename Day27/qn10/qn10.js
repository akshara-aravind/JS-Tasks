const container = document.querySelector('.content')
const scrollBtn = document.querySelector('.scrollBtn')
window.addEventListener('scroll',()=>{
 let top = document.documentElement.scrollTop
if(top === 0){
scrollBtn.style.display = 'none'
}else{
scrollBtn.style.display = 'block'
}
})
scrollBtn.addEventListener('click',()=>{
   document.documentElement.scrollTop=0
})