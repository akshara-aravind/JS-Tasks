const inputBox = document.querySelector('.inputBox');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click',()=>{
  let li = document.createElement('li')
  li.textContent = inputBox.value
  list.appendChild(li);
})

list.addEventListener('click',(event)=>{
const li = event.target
console.log(li, 'clicked')
  if(li.style.textDecoration === 'line-through'){
    li.style.textDecoration = 'none'
  }else{
    li.style.textDecoration = 'line-through'
  }
  localStorage.setItem('lists',list)
})