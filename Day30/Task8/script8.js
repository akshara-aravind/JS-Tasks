const inpuBox = document.querySelector('.inputBox')
const text = document.querySelector('.text')
 let words = text.innerHTML.split(' ')
 for(let i=0; i<words.length;i++){
     for(let j=0; j<words[i].length;j++){
inpuBox.addEventListener('input',(e)=>{
if(e.target.value === words[i][j]){
  console.log(words[i])
  words[i].style.backgroundColor = 'red'
}
})    
     }

 }