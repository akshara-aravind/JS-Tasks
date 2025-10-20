//9. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.
function anagram(str1,str2){
  let normal = str => str.split('').sort().join('')
  return normal(str1) === normal(str2)
}
console.log(anagram('listen','silent'))
console.log(anagram('restful','fluster'))
console.log(anagram('hello','world'))