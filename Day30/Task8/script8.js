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

// const inputBox = document.querySelector('.inputBox');
// const textElement = document.querySelector('.text');
// const original = textElement.textContent; // store pure text

// inputBox.addEventListener('input', (e) => {
//   const word = e.target.value.trim();

//   // if no search word → reset
//   if (!word) {
//     textElement.textContent = original;
//     return;
//   }

//   // split text by spaces
//   const words = original.split(" ");

//   // wrap exact matches
//   const updated = words.map(w => {
//     if (w.toLowerCase().includes(word.toLowerCase())) {
//       return `<span style="background:red; color:white;">${w}</span>`;
//     }
//     return w;
//   });

//   // join back into text
//   textElement.innerHTML = updated.join(" ");
// });
