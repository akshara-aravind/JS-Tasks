//4. Write a function which accepts two arrays and a position value, where the values of the second array should be placed in the given position of the first array. The function should return an updated array.

/**
Test cases:
Input: [1, 2, 3], [4, 5, 6], 2
Expected output: [1, 2, 4, 5, 6, 3] 
*/
function indexPassing(arr1,arr2,index){
  let array =[]
  for(let i=0; i< arr1.length; i++){
    if(i < index){
      array.push(arr1[i])
    }else if(i === index){
    array.push(arr2,arr1[i])
    }
  }
  return array.flat()
}
console.log(indexPassing([1,2,3],[4,5,6],2))