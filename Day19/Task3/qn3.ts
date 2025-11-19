// //3.Write a function SortMixedNested(arr) that takes an array of mixed types and nested arrays, and sorts all numbers in ascending order recursively, keeping the same nested structure.
type MyArray = (number | MyArray)[];
function sortMixedNested(arr:MyArray):MyArray{
  let flatten = arr.flat(Infinity).sort((a,b)=> a-b)
  let index = 0;
  function mapFlatten(array:MyArray):MyArray{
    let result:MyArray = []
    for(let item of array){
      if(Array.isArray(item)){
        result.push(mapFlatten(item))
      }else{
        result.push(flatten[index++])
      }
    }
    return result
  }
  return mapFlatten(arr)
}
console.log(sortMixedNested([3,[2,[5,1]],4]))