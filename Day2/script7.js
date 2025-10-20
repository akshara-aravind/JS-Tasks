//7. Write a program that takes a sentence as input and returns the longest word in the sentence.
function longestWord(str){
  let word = str.split(' ')
  let maxLen = 0;
  let longest = []
  for(let i=0; i< word.length; i++){
    if(word[i].length > maxLen){
     maxLen = word[i].length
     longest = [word[i]]
    }else if(word[i].length === maxLen){
      longest.push(word[i])
    }
  }
  return longest;
}
console.log(longestWord('Hello world of programming'))
console.log(longestWord('The quick brown fox jumps over the lazy dog'))
console.log(longestWord('I love coding'))