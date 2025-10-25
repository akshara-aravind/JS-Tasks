"use strict";
const inputBox = document.querySelector('.inputBox');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
// list.innerHTML = localStorage.getItem('linsts') || ''
btn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = inputBox.value;
    list.appendChild(li);
});
list.addEventListener('click', (event) => {
    const li = event.target;
    if (li.tagName === 'LI') {
        li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    }
});
