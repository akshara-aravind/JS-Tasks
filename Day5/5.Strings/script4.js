// 4 Write a function  reverseWords(sentence)  that reverses the order of words
let sentence = 'javascript is fun'
function reverseWords(sentence){
  return sentence.split(' ').reverse().join(' ')
}
console.log(reverseWords(sentence))