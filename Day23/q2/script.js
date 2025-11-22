const images = document.querySelector('.images')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

let count = 0;
const total = document.querySelectorAll('.images img').length
const width = 900;

function showSlide(){
    images.style.transform = `translateX(-${count * width}px)`;
}
nextBtn.addEventListener('click',()=>{
    count = (count+1) % total
    showSlide()
})

prevBtn.addEventListener('click',()=>{
    count = (count-1+total)%total
    showSlide()
})
let interval = setInterval(()=>{
    count = (count+1) % total
    showSlide()
},3000)
images.addEventListener('mouseover',()=>{
    clearInterval(interval)
})
images.addEventListener('mouseleave',()=>{
    interval = setInterval(()=>{
        count = (count+1) % total
        showSlide()
    },3000)
})