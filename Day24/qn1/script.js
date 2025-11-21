//2. Create a top navigation bar that contains several menu items. When the user hovers over any menu item, a floating drop-down panel should appear. Each drop-down should include sub-items, and those sub-items should only be visible when the user hovers over the corresponding drop-down menu.
const menuItems = document.querySelectorAll('.menuItems')
const items = document.querySelector('.items')
const list1 = document.querySelector('.list1')
const list2 = document.querySelector('.list2')
const list3 = document.querySelector('.list3')

menuItems.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        items.style.display = 'block'
    })
item.addEventListener('mouseleave',()=>{
    items.style.display = 'none'
})
})
