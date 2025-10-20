//14. Write a program that checks if a given string is a palindrome, ignoring spaces and punctuation.

function isPalindrome(str){
  let remove = str.replace(/[,!]|\s+/g,'').trim().toLowerCase()
  let reverse = remove.split('').reverse().join('')
  return reverse === remove
}
console.log(isPalindrome('A man, a plan, a canal, Panama!'))
console.log(isPalindrome('Racecar'))
console.log(isPalindrome('Hello, world!'))