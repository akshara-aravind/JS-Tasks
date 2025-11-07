//3.matrix order like zic-zac
function matrixTransform(arr,rowCount,colCount){
 let row = rowCount
 let col = colCount
 let result = []
 for(let i=0; i<arr.length;i++){
    if(arr.length = row){
       result.push(arr[i])
    }
 }
 return result
}
console.log(matrixTransform([19,10,3,7,9,8,5,2,1,17,16,14,12,18,6,13,11,20,4,15],5,4))