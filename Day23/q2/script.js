const image = document.querySelector('.image')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let images = [
    'img/img1.webp',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.webp'
]
let count = 0
let mouseoverInterval = setInterval(imageSlide,3000)
let mouseLeaveInterval = setInterval(imageSlide,3000)
function imageSlide(){
   count = (count+1) % images.length
    image.src = images[count]
}
imageSlide()
next.addEventListener('click',()=>{
    // console.log('clicked')
    count = (count+1) % images.length
    image.src = images[count]
})
prev.addEventListener('click',()=>{
    count = (count-1+images.length)%images.length
    image.src = images[count]
})

image.addEventListener('mouseover',()=>{
    // console.log('mouseover')
    clearInterval(mouseoverInterval)
    clearInterval(mouseLeaveInterval)
})
image.addEventListener('mouseleave',()=>{
  mouseoverInterval = setInterval(imageSlide,3000)
})