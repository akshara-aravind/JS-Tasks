//1. Write a function DetectSymmetry(matrix) that checks if a given 2D matrix is symmetric horizontally, vertically, or diagonally.
/*
Return an object with three boolean properties:
horizontal — true if the matrix reads the same top-to-bottom
vertical — true if the matrix reads the same left-to-right
diagonal — true if the matrix equals its diagonal mirror
*/

export function delectSymmetry(matrix:number[][]){
    if(!Array.isArray(matrix)) return 'Invalid'
    let result = []
    let horizontal:boolean;
    let vertical:boolean;
    let diagonal:boolean;
    let left = 0, right = matrix.length-1
    if(matrix.length !== matrix[0].length) return 'Invalid not an squre matrix'
    for(let i=0; i< matrix.length;i++){
        if(!Array.isArray(matrix[i])) return 'Invalid'
        if(matrix[left][i] !== matrix[right][i]){
            horizontal = false
            break;
        }else{
            horizontal = true
        }
    }
    for(let i=0; i< matrix.length;i++){
        if(matrix[i][left] !== matrix[i][right]){
            vertical = false
            break;
        }else{
            vertical = true
        }
    }
    for(let i=0; i< matrix.length;i++){
        if(matrix[i][right] !== matrix[right][i]){
                diagonal = false
                break
        }else{
                diagonal = true
            }
    }

result.push({horizontal:horizontal,vertical:vertical,diagonal:diagonal})
console.log(result)
return result
}
// console.log(delectSymmetry([
//     [1,2,1],
//     [2,7,2],
//     [1,2,1],
// ]))
