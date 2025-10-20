/**
Create a counter that:
Has “+”, “–”, and “Reset” buttons
Changes color:
Green when > 0
Red when < 0
Grey when 0
Prevent value from going below –10 or above 10
*/
const add = document.querySelector('.add');
const substract = document.querySelector('.substract');
const reset = document.querySelector('.reset');
const number = document.querySelector('.start')

let count = 0;
  if(count === 0){
    document.body.style.backgroundColor ='grey'
  }

add.addEventListener('click',() =>{
  count++;
  number.textContent = count
   if(count === 0){
    document.body.style.backgroundColor ='grey'
  }else if(count > 0 ){
    document.body.style.backgroundColor = 'green'
  }
  if(count <= -10 || count >= 10){
  count = 0
}
})
//
substract.addEventListener('click',() =>{
  count--;
  number.textContent = count
  if(count === 0){
    document.body.style.backgroundColor ='grey'  
  }else if(count < 0){
    document.body.style.backgroundColor = 'red'
  } 
  if(count <= -10 || count >= 10){
  count = 0
}
})
reset.addEventListener('click',()=>{
  number.textContent = ''
  document.body.style.backgroundColor = 'grey'
})