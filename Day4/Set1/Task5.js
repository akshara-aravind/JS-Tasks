//5. Write a function to convert text from camelCase to kebab-case.
function kababCase(str){
  if(typeof(str) !== 'string' || str === '' || str.includes(' ')) return 'Invalid'
  const newCase = str.replace(/[A-Z]/g, '-' + '$&').toLowerCase()
  return newCase
}
// console.log(kababCase('myFunction'))

const testCases = [
  {
    input:'myFunction',
    expected:'my-function'
  },
  {
    input:'iHere',
    expected:'i-here'
  },
  {
    input:'Hello',
    expected:'-hello'
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
    expected:'-hey-world'
  },
  {
    input:'  helloWorld',
    expected:'Invalid'
  },
  {
    input:'123Number',
    expected:'123-number'
  },
  {
    input:undefined,
    expected:'Invalid'
  }
]
testCases.forEach((item,index) => {
  const outPut = kababCase(item.input)
  const pass = outPut === item.expected

  console.log(`---------${index+1}-----------`)
  console.log(`Test ${index+1}:`, pass? 'Passed':'Failed')
  console.log(`
    Expected: ${item.expected}
    Output: ${outPut}`)
})