//3.matrix order like zic-zac
function matrixTransform(nums,rows,cols){
   let matrix = []
   for(let i = 0; i<rows;i++){
      let row = []
      for(let j=0; j<cols;j++){
         row.push(0)
      }
      matrix.push(row)
   }
    let count = 0
    for(let i=0; i< cols;i++){
      if(i % 2 === 0){
         for(let j=0; j<rows;j++){
            matrix[j][i] = nums[count++]
         }
      }else{
         for(let j=rows-1; j>=0;j--){
            matrix[j][i] = nums[count++]
         }
      }
    }
    return matrix
}
console.log(matrixTransform([19,10,3,7,9,8,5,2,1,17,16,14,12,18,6,13,11,20,4,15],5,4))