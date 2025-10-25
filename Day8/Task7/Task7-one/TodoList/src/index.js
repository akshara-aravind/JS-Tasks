var inputBox = document.querySelector('.inputBox');
var btn = document.querySelector('.btn');
var list = document.querySelector('.list');
// list.innerHTML = localStorage.getItem('linsts') || ''
btn.addEventListener('click', function () {
    var li = document.createElement('li');
    li.textContent = inputBox.value;
    list.appendChild(li);
});
list.addEventListener('click', function (event) {
    var li = event.target;
    if (li.tagName === 'LI') {
        li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    }
});
