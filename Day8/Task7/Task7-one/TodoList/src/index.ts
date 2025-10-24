const inputBox = document.querySelector('.inputBox') as HTMLInputElement;
const btn = document.querySelector('.btn') as HTMLButtonElement;
const list = document.querySelector('.list')as HTMLUListElement;

// list.innerHTML = localStorage.getItem('linsts') || ''

btn.addEventListener('click',()=>{
  let li = document.createElement('li')
  li.textContent = inputBox.value
  list.appendChild(li);
})

list.addEventListener('click',(event)=>{
const li = event.target as HTMLLIElement;

if(li.tagName === 'LI'){
    li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through'
}
})