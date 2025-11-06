// 5. Write a program which takes an 2D array as input like a matrix. If an element is 0, set its entire row and column to 0's and return the updated array.
function matrixTransform(matrix){
    for(let i=0; i< matrix.length;i++){
        // console.log(matrix[i])
        for(let j=0; j<=i;j++){
            console.log(matrix[j])
           if(matrix[j] === 0){
            console.log(matrix[j])
           }
        }
        // console.log(matrix[i])
    }
}
console.log(matrixTransform([[1,1,1],[1,0,1],[1,1,1]]))