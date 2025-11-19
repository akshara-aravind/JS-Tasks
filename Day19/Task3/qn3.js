// //3.Write a function SortMixedNested(arr) that takes an array of mixed types and nested arrays, and sorts all numbers in ascending order recursively, keeping the same nested structure.
// type MyArray = (number | MyArray)[];
// function sortMixedNested(arr:MyArray):MyArray{
//   let flatten = arr.flat(Infinity).sort((a,b)=> a-b)
//   let index = 0;
//   function mapFlatten(array:MyArray):MyArray{
//     let result:MyArray = []
//     for(let item of array){
//       if(Array.isArray(item)){
//         result.push(mapFlatten(item))
//       }else{
//         result.push(flatten[index++])
//       }
//     }
//     return result
//   }
//   return mapFlatten(arr)
// }
function sortMixedNested(arr) {
    var flatten = arr.flat(Infinity).sort(function (a, b) { return a - b; });
    var count = 0;
    function mapFlatten(array) {
        var result = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            if (Array.isArray(item)) {
                result.push(mapFlatten(item));
            }
            else {
                result.push(flatten[count++]);
            }
        }
        return result;
    }
    return mapFlatten(arr);
}
console.log(sortMixedNested([3, [2, [5, 1]], 4]));
