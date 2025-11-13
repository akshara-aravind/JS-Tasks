//3.Write a function SortMixedNested(arr) that takes an array of mixed types and nested arrays, and sorts all numbers in ascending order recursively, keeping the same nested structure.
function sortMixedNested(arr){
    let flatten = arr.flat(Infinity).sort((a,b)=> a-b)
    // console.log(flatten)
    let result = []
    for(let i=0; i< flatten.length;i++){
     for(let item of arr){
      if(Array.isArray(item)){
        // console.log(item)
        result.push(flatten[i])
      }else{
        result.push(flatten[i])
      }
     }
    }
    return result.slice(0,1)
    // function mapFlatten(arr:number[]){
    //     for(let item of arr){
    //         if(Array.isArray(item)){
    //             flatten(item)
    //         }else{
    //             result.push(item)
    //         }
    //     }
    //     return result.sort((a,b)=>a-b)
    // }
    // return flatten(arr)
}
console.log(sortMixedNested([3,[2,[5,1]],4]))

// NOT COMPLETED