//3. Create a input field which shows entered character count and the bottom right end. Which turns red if exceeds limit.
const inputBox = document.querySelector('.input')
const result = document.querySelector('.result')

inputBox.addEventListener('input',(e)=>{
    let value = e.target.value
        result.textContent = 'Count(limit:20) :' + value.length
        result.style.fontSize = '20px'
        result.style.fontWeight = 'bold'
    if(value.length >20){
        result.style.color = 'red'
    }else{
    result.style.color = '#000'
    }
})