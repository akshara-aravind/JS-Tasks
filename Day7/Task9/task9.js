const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click',() =>{
    const li = document.createElement('li')
    li.textContent = input.value
    result.appendChild(li)
    input.value = ''
})