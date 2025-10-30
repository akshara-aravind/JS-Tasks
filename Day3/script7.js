//7. Write a function to convert text from camelCase to snake_case.
let word ='myFunction'
function snakeCase(word){
  if(typeof(word) !== 'string' || word === '' || word.includes(' ')) return 'Invalid'
  const newStr =word.replace(/[A-Z]/g, "_" + "$&").toLowerCase()
 return newStr;
}
console.log(snakeCase(word))
// console.log(snakeCase('heyWorld'))

const testCases = [
  {
    input:'myFunction',
    expected:'my_function'
  },
  {
    input:'iHere',
    expected:'i_here'
  },
  {
    input:'Hello',
    expected:'_hello'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:123,
    expected:'Invalid'
  },
  {
    input:+'23',
    expected:'Invalid'
  },
  {
    input:null,
    expected:'Invalid'
  },
  {
    input:true,
    expected:'Invalid'
  },
  {
    input:[],
    expected:'Invalid'
  },
  {
    input:{},
    expected:'Invalid'
  },
  {
    input:'m yFunction',
    expected:'Invalid'
  },
  {
    input:'HeyWorld',
    expected:'_hey_world'
  },
  {
    input:'  helloWorld',
    expected:'Invalid'
  },
  {
    input:'123Number',
    expected:'123_number'
  },
  {
    input:undefined,
    expected:'Invalid'
  }
]
testCases.forEach((item,index) => {
  const outPut = snakeCase(item.input)
  const pass = outPut === item.expected

  console.log(`------${index+1}--------`)
  console.log(`Test ${index+1}:`, pass?'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})