//5.  Find Intersection of Two Array
export function interSection(arr1:number[],arr2:number[]){ 
  let result:number[];
  let inter:Set<number>;
  let array1 = new Set(arr1)
  let array2 = new Set(arr2) 
  inter = array1.intersection(array2)
  result = Array.from(inter)
  if(result.length === 0) return 'No element is common'
  return result
}
// console.log(interSection([1,2,3],[2,3,4]))

