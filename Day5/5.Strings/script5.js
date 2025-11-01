// 5 Write a function  countVowels(str)  that counts vowels in a given string
function countVowels(str){
  if(typeof(str) !== 'string' || str === '') return 'Invalid'
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
const testCases = [
  {
    input:'javascript',
    expected:3
  },
  {
    input:'aeiou',
    expected:5
  },
  {
    input:'123',
    expected:0
  },
  {
    input:123,
    expected:'Invalid'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:['js'],
    expected:'Invalid'
  },
  {
    input:'aaaaaa',
    expected:6
  },
  {
    input:'hello',
    expected:2
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:true,
    expected:'Invlaid'
  },
  {
    input:'10 is a number',
    expected:4
  },
  {
    input:{},
    expected:'Invalid'
  },
]
testCases.forEach((item,index) => {
  const outPut = countVowels(item.input)
  const pass = outPut === item.expected

  console.log(`-------${index+1}--------`)
  console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})