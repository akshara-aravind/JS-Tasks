//14. Write a program that checks if a given string is a palindrome, ignoring spaces and punctuation.

function isPalindrome(str){
  if(typeof(str) !== 'string' || str === '') return 'Invalid' 
  let remove = str.replace(/[,!]|\s+/g,'').trim().toLowerCase()
  let reverse = remove.split('').reverse().join('')
  return reverse === remove
}
console.log(isPalindrome('A man, a plan, a canal, Panama!'))
console.log(isPalindrome('Racecar'))
console.log(isPalindrome('Hello, world!'))

const testCases = [
 {
  input:'A man, a plan, a canal, Panama!',
  expected:true
 },
 {
  input:'Racecar',
  expected:true
 },
 {
  input:'Hello world!',
  expected:false
 },
 {
  input:123,
  expected:'Invalid'
 },
 {
  input:[],
  expected:'Invalid'
 },
 {
  input:null,
  expected:'Invalid'
 },
 {
  input:undefined,
  expected:'Invalid'
 },
 {
  input:'  racecar',
  expected:true
 },
 {
  input:'',
  expected:'Invalid'
 },
 {
  input:true,
  expected:'Invalid'
 },
 {
  input:'123',
  expected:false
 },
 {
  input:'!!!!',
  expected:true
 },
 {
  input:'!*!*',
  expected:true
 },
 {
  input:'r a c a r',
  expected:true
 },
 {
  input:'   ',
  expected:'Invalid'
 }
]
testCases.forEach((item,index) => {
  const outPut = isPalindrome(item.input)
  const press = outPut === item.expected

  console.log(`Test ${index+1}:`, press? 'Passed':'Failed')
})