//9. Write a function to remove duplicate characters from the given string.
function removeDuplication(str){
    if(typeof(str) !== 'string' || str === '') return 'Invalid'
    let newSet = [...new Set(str)].join('')
    return newSet
}

const testCases = [
  {
    input:'apple',
    expected:'aple'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:['apple'],
    expected:'Invalid'
  },
  {
    input:'1231',
    expected:'123'
  },
  {
    input:'laptop',
    expected:'lapto'
  },
  {
    input:'box',
    expected:'box'
  },
  {
    input:'maLl',
    expected:'maLl'
  },
  {
    input:123,
    expected:'Invalid'
  },
  {
    input:{},
    expected:'Invalid'
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:true,
    expected:'Invalid'
  },
  {
    input:'11-10',
    expected:'1-0'
  },
  {
    input:'####',
    expected:'#'
  },
  {
    input:null,
    expected:'Invalid'
  },
  {
    input:'  aple',
    expected:' aple'
  }
]
testCases.forEach((item,index) => {
  const outPut = removeDuplication(item.input)
  const pass = outPut === item.expected

  console.log(`-------${index+1}-------`)
  console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
  console.log(`
    Expected: ${item.expected}
    Output: ${outPut}`)
})