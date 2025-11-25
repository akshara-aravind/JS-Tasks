//1. Write a function DetectSymmetry(matrix) that checks if a given 2D matrix is symmetric horizontally, vertically, or diagonally.
/*
Return an object with three boolean properties:
horizontal — true if the matrix reads the same top-to-bottom
vertical — true if the matrix reads the same left-to-right
diagonal — true if the matrix equals its diagonal mirror
*/
export function delectSymmetry(matrix:number[][]):boolean | string | object{
    if(!Array.isArray(matrix)) return 'Invalid';
    if(matrix.length === 0) return {horizontal:true,vertical:true,diagonal:true};
    if(matrix.length !== matrix[0].length ) return 'Invalid: not a square matrix'
    let horizontal:boolean = true
    let vertical:boolean = true
    let diagonal:boolean = true
    for(let i=0;i<matrix.length;i++){
        for(let j=0; j<matrix.length;j++){
            if(matrix[i][j] !== matrix[matrix.length-1-i][j]) horizontal = false
            if(matrix[i][j] !== matrix[i][matrix.length-1-j]) vertical = false
            if(matrix[i][j] !== matrix[j][i]) diagonal = false
        }
    }
    console.log({horizontal,vertical,diagonal})
    return {horizontal,vertical,diagonal}
}
// console.log(delectSymmetry([
//     [1,2,1],
//     [2,7,2],
//     [1,2,1],
// ]))