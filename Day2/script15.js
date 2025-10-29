//15. Write a program that takes a string as input and returns the reverse of each word in the string while preserving the word order.
function reverseWord(str){
  if(typeof(str) !== 'string' || str === '') return 'Invalid'
  return str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
  
}
// console.log(reverseWord('Hello world'))
// console.log(reverseWord('Programming are awesome'))
// console.log(reverseWord('Programming is fun'))
// console.log(reverseWord(' p   r   gramming'))

const testCases = [
 {
  input:'Hello world',
  expected:'olleH dlrow'
 },
 {
  input:'Programming are awesome',
  expected:'gnimmargorP era emosewa'
 },
 {
  input:'Programming is fun',
  expected:'gnimmargorP si nuf'
 },
 {
  input:['Hello'],
  expected:'Invalid'
 },
 {
  input:'',
  expected:'Invalid'
 },
 {
  input:{},
  expected:'Invalid'
 },
 {
  input:123,
  expected:'Invalid'
 },
 {
  input:' p   r   gramming',
  expected:' p   r   gnimmarg'
 },
 {
  input:'123',
  expected:'321'
 },
 {
  input:NaN,
  expected:'Invalid'
 },
 {
  input:undefined,
  expected:'Invalid'
 },
 {
  input:false,
  expected:'Invalid'
 },
 {
  input:'',
  expected:'Invalid'
 },
 {
  input:null,
  expected:'Invalid'
 },
 {
  input:'123 is a number',
  expected:'321 si a rebmun'
 }
]
testCases.forEach((item,index) => {
  const outPut = reverseWord(item.input)
  const pass = outPut === item.expected

  console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
})
