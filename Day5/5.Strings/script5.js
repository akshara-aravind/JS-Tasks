// 5 Write a function  countVowels(str)  that counts vowels in a given string
function countVowels(str){
  let count =0;
  let vowels = 'aeiou'
  for(let i =0; i< str.length; i++){ 
    if(vowels.includes(str[i])){
      count++
    }
  }
  return count
}
console.log(countVowels('javascript'))