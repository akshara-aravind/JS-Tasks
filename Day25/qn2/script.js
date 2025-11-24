const home = document.querySelector('.home')
const homePage = document.querySelector('.homePage')
const about = document.querySelector('.about')
const aboutPage = document.querySelector('.aboutPage')
const explore = document.querySelector('.explore')
const explorePage = document.querySelector('.explorePage')
const review = document.querySelector('.review')
const reviewPage = document.querySelector('.reviewPage')


home.addEventListener('click',()=>{
homePage.style.display = 'block'
aboutPage.style.display = 'none'   
explorePage.style.display = 'none'   
})
about.addEventListener('click',()=>{
homePage.style.display = 'none'
aboutPage.style.display = 'block'   
explorePage.style.display = 'none'
})
explore.addEventListener('click',()=>{
homePage.style.display = 'none'
aboutPage.style.display = 'none'
explorePage.style.display = 'block' 
reviewPage.style.display = 'none'   
})
review.addEventListener('click',()=>{
homePage.style.display = 'none'
aboutPage.style.display = 'none'
explorePage.style.display = 'none'
reviewPage.style.display = 'block'   
})