//1. Write a function to flatten an array of arbitrarily nested arrays into a flat array.

function flatten(arr){
return arr.flat(Infinity)
}
console.log(flatten([1,[2,[3,[4],5]]]))

// function flatten(arr){
//   if(Array.isArray(arr)){
//     return 
//   }
// }