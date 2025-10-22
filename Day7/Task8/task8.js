const likeBtn = document.querySelector('.like_btn')
const redLike = document.querySelector('.like_btns')
likeBtn.addEventListener('click',() =>{
    redLike.style.display = 'block'
    likeBtn.style.display = 'none'      
})
redLike.addEventListener('click',() =>{
    likeBtn.style.display = 'block'
    redLike.style.display = 'none'
})