//1. Write a program which prints like a square matrix of given size. The matrix should be filled with natural numbers, starting from 1 in the top-left corner, increasing in an inward, clockwise spiral order.


// function squareMatrix(n){
//   let arr =[]
//   for(let i=1; i <= n; i++){
//     let first = i
//     arr.push(first)
//   }
//   for(let i = arr.length; i >=1; i--){
//     let row =''
//     for(let k =0; k < (n-i); k++){
//      row += '_ '
//     }
//     for(let j=0; j<i; j++){
//       row += arr[j] + ' '
//     }
//     console.log(row)
//   }
// }
// squareMatrix(3)