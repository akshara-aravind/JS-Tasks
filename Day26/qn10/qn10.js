//10. Deep Object Comparison (without JSON.stringify) Write a function deepEqual(a, b) that returns true if two values are deeply equal.
function deepEqual(a, b) {
    var result;
    if ((Array.isArray(a)) || Array.isArray(b)) {
        var aFlatten = a.flat(Infinity);
        var bFlatten = b.flat(Infinity);
        console.log(aFlatten, bFlatten);
        if (Array.isArray(aFlatten) === Array.isArray(bFlatten)) {
            if (aFlatten.length === bFlatten.length) {
                for (var i = 0; i < aFlatten.length; i++) {
                    if (aFlatten[i] === bFlatten[i]) {
                        result = true;
                    }
                }
            }
            else {
                result = false;
            }
        }
    }
    return result;
}
console.log(deepEqual([1, [2]], [1, [2]]));
console.log(deepEqual([1, [2]], [1, [2, 3]]));
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
// function flattenObj(obj,parentKey = '', result = {}){
// for(let key in obj){
//  let newKey = parentKey ? parentKey + '.'+key:key
//  if(typeof obj[key] === 'object' && obj[key] !== null){
//     flattenObj(obj[key],newKey,result)
//  }else{
//     result[newKey] = obj[key]
//  }
// }
// return result
// }
// console.log(flattenObj({a:{b:{c:1}},d:2}))
