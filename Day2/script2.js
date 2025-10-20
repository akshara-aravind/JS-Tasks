//2. Write a program that takes a sentence as input and returns the word count.
function wordCount(str){
let count = 0;
let word = str.split(' ')

for(let i=0; i< word.length;i++){
  if(word[i].length > count){
    count++
  }else if(word[i].length < count){
    count++
  }
 }
 return count
}
console.log(wordCount('Hello world'));
console.log(wordCount('This is a sample sentence.')); 
console.log(wordCount('Program is fun!'));

