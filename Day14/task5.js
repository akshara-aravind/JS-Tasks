// 5. Write a program which takes an 2D array as input like a matrix. If an element is 0, set its entire row and column to 0's and return the updated array.
function matrixTransform(matrix){
 let row = []
 let column = []
 for(let i=0;i<matrix.length;i++){
    for(let j=0; j<matrix[i].length;j++){
    if(matrix[i][j] === 0){
        row.push(i)
        column.push(j)
    }
 }
}
 for(let item of row){
    for(let i=0; i<matrix[0].length;i++){
        matrix[item][i] = 0
    }
 }
 for(let item of column){
    for(let i =0; i<matrix.length;i++){
        matrix[i][item] = 0
    }
 }
 return matrix
}
console.log(matrixTransform([
    [1,1,1],
    [1,0,1],
    [1,1,1]
]))