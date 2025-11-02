// 4 Generate a random number between 50 and 100.
function randomNum(min,max){
  if(typeof(max,min) !== 'number') return 'Invalid'
  return Math.trunc(Math.random()*((max-min)+1)+ min)
}
console.log(randomNum(50,100))

const testCases = [
  {
    start:[],
    end:100,
    expected:'Invalid'
  },
  {
    start:null,
    expected:'Invalid'
  }
]
testCases.forEach((item,index) => {
  const outPut = randomNum(item.start, item.end)
  const pass = outPut === item.expected

  console.log(`------${index+1}------`)
  console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})