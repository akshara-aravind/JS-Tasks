// 7 Without using .flat(), write a recursive function to flatten an array of arbitrary depth.
// function flatten(arr){
//     for(let i=0; i<arr.length;i++){
//       if(Array.isArray[arr]){
//         return flatten(arr)
//       }
//     }
//     return 
// }

function flat(arr){
let result =[]
  function flatten(arr){
    for(item of arr){
      if(Array.isArray(item)){
    flatten(item)
  }else{
    result.push(item)
  }
 }
  return result
 }
  return flatten(arr)
}
console.log(flat([1,[2,[3,[4]],5]]))