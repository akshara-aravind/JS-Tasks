//2. Create a UI which shows some text which is entered by a user using text-area, and a toggle button which controls the visibility of the text shown.
const inputBox = document.querySelector('.inputBox')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click',() =>{
    result.textContent = inputBox.value
    if(result.style.display === 'none'){
        result.style.display = 'block'
        inputBox.value = ''
    }else{
        result.style.display = 'none'
        
    }
})