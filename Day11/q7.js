// // 2. Create a UI with some list items, which has equal width for all the items. If the text isn't able to fit in the given width, we can truncate it and add ... (triple dots) at the end. When hovering over the list item, the whole text needs to be shown for text which is truncated using triple dots as a tooltip. Like shown in the given image. The tooltip should move along with the cursor.
// const item1 = document.querySelector('.item1')
// const item2 = document.querySelector('.item2')
// const item3 = document.querySelector('.item3')
// const btn = document.querySelector('.btn')
// const result1 = document.querySelector('.result1')
// const result2 = document.querySelector('.result2')
// const result3 = document.querySelector('.result3')

// item1.addEventListener('mouseover',mouseOver1)
// function mouseOver1(){
//     let box1 = document.createElement('div')
//     result1.style.backgroundColor = 'rgb(90, 78, 78)'
//     result1.style.borderRadius = '10px'
//     result1.style.padding = '10px'
//     result1.style.margin = '10px'
//     result1.style.color ='#fff'
//     box1.textContent = item1.textContent
//     result1.appendChild(box1)
//     // item1.removeEventListener('mouseover',mouseOver1)   
//     item1.addEventListener('mouseout',() =>{
//         result1.style.display = 'none'     
//     })
// }

// item2.addEventListener('mouseover',mouseOver2)
// function mouseOver2(){
//     let box2 = document.createElement('div')
//     result2.style.backgroundColor = 'rgb(90, 78, 78)'
//     result2.style.borderRadius = '10px'
//     result2.style.padding = '10px'
//     result2.style.margin = '10px'
//     result2.style.color ='#fff'
//     box2.textContent = item2.textContent
//     result2.appendChild(box2)
//     // item2.removeEventListener('mouseover',mouseOver2)   
//     item2.addEventListener('mouseout',() =>{
//      result2.style.display = 'none'
//     })
// }

// item3.addEventListener('mouseover',mouseOver3)
// function mouseOver3(){
//     let box3 = document.createElement('div')
//     result3.style.backgroundColor = 'rgb(90, 78, 78)'
//     result3.style.borderRadius = '10px'
//     result3.style.padding = '10px'
//     result3.style.margin = '10px'
//     result3.style.color ='#fff'
//     box3.textContent = item3.textContent
//     result3.appendChild(box3)
//     // item3.removeEventListener('mouseover',mouseOver3) 
//     item3.addEventListener('mouseout',() =>{
//         result3.style.display = 'none'
//     })
// }