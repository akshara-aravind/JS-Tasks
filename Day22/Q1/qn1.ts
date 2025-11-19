//1. Write a program to rotate an matrix by 90deg (clockwise)
export function rotateMatrix(matrix:number[][]){
    if(matrix.length !== matrix[0].length) return 'Not square matrix'
    if(!Array.isArray(matrix)) return 'Invalid'
    let result:number[][] = []
    for(let i=0; i<matrix.length;i++){
        if(matrix[i].length !== matrix[0].length) return 'Not square matrix'
        let row:number[] =[]
        for(let j=matrix.length-1; j>=0;j--){
            // console.log(j,i)
          row.push(matrix[j][i])
        }
        result.push(row)
    }
return result
}
// console.log(rotateMatrix([
//     [1,2,0],
//     [4,5,8],
// ]))
