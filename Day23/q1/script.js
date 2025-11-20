//1. Develop a UI with showing user posts, fetched from this api endpoint: https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10. This endpoint returns only ten items. When the user scrolls the page and reached the bottom, re-fetch next 10 items (by updating page in query param) and show it. Show loader indicating data fetching.
const result = document.querySelector('.result')
const wait = document.querySelector('.wait')
let count = 1
function fetchData(){
wait.style.visibility = 'visible'
fetch(`https://jsonplaceholder.typicode.com/posts?_page=${count}&_limit=10`)
.then(response => response.json())
.then(data =>{
data.forEach(item =>{
    console.log(item)
    let li = document.createElement('li')
    li.style.listStyleType = 'none'
    li.style.border = '1px solid'
    li.style.paddingLeft= '15px'
    li.innerHTML = `
    <h4> UserId: ${item.userId}</h4>
    <h4> Id : ${item.id}</h4>
    <span> title: <b>${item.title}</b></span>
    <p>${item.body}</p>
    `
    result.appendChild(li)
})
})
.catch((err)=>{
    console.log('ERROR',err)
})
}
fetchData()    
document.addEventListener('scrollend',()=>{
 count++
fetchData()
})