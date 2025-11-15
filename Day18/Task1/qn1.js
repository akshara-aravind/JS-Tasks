"use strict";
//1. Write a function DetectSymmetry(matrix) that checks if a given 2D matrix is symmetric horizontally, vertically, or diagonally.
/*
Return an object with three boolean properties:
horizontal — true if the matrix reads the same top-to-bottom
vertical — true if the matrix reads the same left-to-right
diagonal — true if the matrix equals its diagonal mirror
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.delectSymmetry = delectSymmetry;
// export function delectSymmetry(matrix:number[][]){
//     if(!Array.isArray(matrix)) return 'Invalid'
//     let result = []
//     let horizontal:boolean;
//     let vertical:boolean;
//     let diagonal:boolean = true;
//     let left = 0, right = matrix.length-1
//     if(matrix.length !== matrix[0].length) return 'Invalid not an square matrix'
//     for(let i=0; i< matrix.length;i++){
//         if(!Array.isArray(matrix[i])) return 'Invalid'
//         if(matrix[left][i] !== matrix[right][i]){
//             horizontal = false
//             break;
//         }else{
//             horizontal = true
//         }
//     }
//     for(let i=0; i< matrix.length;i++){
//         if(matrix[i][left] !== matrix[i][right]){
//             vertical = false
//             break;
//         }else{
//             vertical = true
//         }
//     }
//     for(let i=0; i< matrix.length;i++){
//         for(let j =i+1; j< matrix.length; j++){
//         if(matrix[i][j] !== matrix[j][i]){
//                 diagonal = false
//                 break;
//         }
//     }
//     if (!diagonal) break;
// }
// result.push({horizontal:horizontal,vertical:vertical,diagonal:diagonal})
// console.log(result)
// return result
// }
function delectSymmetry(matrix) {
    if (!Array.isArray(matrix))
        return 'Invalid';
    if (matrix.length === 0)
        return { horizontal: true, vertical: true, diagonal: true };
    if (matrix.length !== matrix[0].length)
        return 'Invalid: not a square matrix';
    var horizontal = true;
    var vertical = true;
    var diagonal = true;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[i][j] !== matrix[matrix.length - 1 - i][j])
                horizontal = false;
            if (matrix[i][j] !== matrix[i][matrix.length - 1 - j])
                vertical = false;
            if (matrix[i][j] !== matrix[j][i])
                diagonal = false;
        }
    }
    console.log({ horizontal: horizontal, vertical: vertical, diagonal: diagonal });
    return { horizontal: horizontal, vertical: vertical, diagonal: diagonal };
}
// console.log(delectSymmetry([
//     [1,2,1],
//     [2,7,2],
//     [1,2,1],
// ]))
