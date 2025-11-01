// 3 Write a function  capitalize(sentence)  that capitalizes the first letter of every word.
function capitalizeFirst(str){
  if(typeof(str) !== 'string' || str === '') return 'Invalid'
  let capitalize = str.split(' ').map(el => el.charAt(0).toUpperCase()+el.slice(1)).join(' ')
  return capitalize
}
// console.log(capitalizeFirst('javascript is fun'))
const testCases = [
  {
    input:'javascript is fun',
    expected:'Javascript Is Fun'
  },
  {
    input:'a b c d',
    expected:'A B C D'
  },
  {
    input:'bEd',
    expected:'BEd'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:['java'],
    expected:'Invalid'
  },
  {
    input:' 1 is a number',
    expected:' 1 Is A Number'
  },
  {
    input:213,
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
    input:'CAKE',
    expected:'CAKE'
  },
  {
    input:'javaScript',
    expected:'JavaScript'
  },
  {
    input:'myFunction',
    expected:'MyFunction'
  },
  {
    input:'2+3 = five',
    expected:'2+3 = Five'
  },
  {
    input:'Hello',
    expected:'Hello'
  },
  {
    input:'!wow',
    expected:'!wow'
  }
]
testCases.forEach((item,index) => {
  const outPut = capitalizeFirst(item.input)
  const pass = outPut === item.expected

  console.log(`--------${index+1}--------`)
  console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output:${outPut}`)
})