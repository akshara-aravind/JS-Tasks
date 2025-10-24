/**
 7. Fetch data from two APIs sequentially:
    1. https://jsonplaceholder.typicode.com/posts
    2. https://jsonplaceholder.typicode.com/users
  Then merge both so that each post includes its author's name and email.

Don't use libraries like axios — only fetch and async/await.
*/
const container = document.querySelector('.container')

async function data(){
    const firstApi = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const json1 = await firstApi.json()
    console.log(json1)
    const secondApi = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
    const json2 = await secondApi.json()
    console.log(json2)

    json2.forEach((post) => {
        if(json1.userId === json2.id){
            json1.forEach((user) => {
            let li = document.createElement('li')
            li.style.listStyleType = 'none'
            li.style.paddingLeft = '10px'
            li.style.border = '1px solid'
            li.style.marginBottom = '10px'
            li.innerHTML = `
            <h3>Id: ${post.id}</h3>
            <h4>Title: ${user.title}</h4>
            <h5>Body: ${user.body}</h5>
            <p>Author: ${post.name}</p>
            <p>Email: ${post.email}</p>`
            container.appendChild(li)            
            })
        }
    })
    }
 data()