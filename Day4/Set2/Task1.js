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

function squareMatrix(n){
    let matrix = []
    for(let i=0;i<n;i++){
        matrix[i] = []
      for(let j=0; j<n; j++){
        matrix[i][j] = 0
      }
    }
    
    let value = 1;
    let left = 0, right = n-1;
    let top = 0, bottom = n-1;

    while(left <= right && top <= bottom){
        for(let i =left; i <= right; i++){
            matrix[top][i] = value++;
        }
        top++

        for(let i = top; i<= bottom; i++){
            matrix[i][right] = value++
        }
        right--;
        
        if(top <= bottom){
            for(let i=right; i>=left; i--){
                matrix[bottom][i] = value++;
            }
            bottom--
        }
        if(left <= right){
            for(let i=bottom; i >= top;i--){
                matrix[i][left] = value++
            }
            left++
        }
    }
return matrix
}

console.log(squareMatrix(3))