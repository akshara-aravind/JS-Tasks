//15. Write a program that takes a string as input and returns the reverse of each word in the string while preserving the word order.
function reverseWord(str){
  return str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
}
console.log(reverseWord('Hello world'))
console.log(reverseWord('Programming are awesome'))
console.log(reverseWord('Programming is fun'))
