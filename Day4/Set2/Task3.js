//3.Write a program to convert a given matrix into its transpose.
import { arrayEquality } from "../../util.js";
function matrixTranspose(matrix){
  if(!Array.isArray(matrix)) return 'Invalid'
  let row = matrix.length;
  let col = matrix[0].length
  let result = []

  for(let i=0; i< col; i++){
    let arr = []
    for(let j=0; j < row; j++){
      arr.push(matrix[j][i])
    }
    result.push(arr)
  }
  return result
}
console.log(matrixTranspose([[2,9,0],[7,1,5]]))

const testCases = [
  {
    input:[[2,9,0],[7,1,5]],
    expected:[ [ 2, 7 ], [ 9, 1 ], [ 0, 5 ] ]
  },
]
testCases.forEach((item,index) => {
  const outPut = matrixTranspose(item.input)
  const pass = arrayEquality(outPut,item.expected)
  
  console.log(`------${index+1}------`)
  console.log(`Test ${index+1}:`,pass)
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})