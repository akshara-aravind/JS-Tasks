//3.Write a program to convert a given matrix into its transpose.

function matrixTranspose(matrix){
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