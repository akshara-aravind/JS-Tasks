//4. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.
function isAnagram(str1,str2){
  let forNormal = str => str.toLowerCase().split('').sort().join('')
  return forNormal(str1) === forNormal(str2)
}
console.log(isAnagram('listen','silent'));
console.log(isAnagram('restful','fluster'));
console.log(isAnagram('hello','world'));