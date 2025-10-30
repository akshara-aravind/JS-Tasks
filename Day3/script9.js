//9. Write a function to remove duplicate characters from the given string.
function removeDuplication(str){
  let newSet = [...new Set(str)].join('')
 console.log(newSet)
}
removeDuplication('apple')

const testCases = [
  {
    input:'apple',
    expected:'aple'
  },
]
testCases.forEach((item,index) => {
  const outPut = item.input
  const pass = outPut === item.expected

  console.log(`-------${index+1}-------`)
  console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
  console.log(`
    Expected: ${item.expected}
    Output: ${outPut}`)
})
