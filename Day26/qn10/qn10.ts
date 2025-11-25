//10. Deep Object Comparison (without JSON.stringify) Write a function deepEqual(a, b) that returns true if two values are deeply equal.
function deepEqual(a,b){
    let result;
    if((Array.isArray(a)) || Array.isArray(b)){
    let aFlatten = a.flat(Infinity)
    let bFlatten = b.flat(Infinity)
    console.log(aFlatten,bFlatten)
    if(Array.isArray(aFlatten) === Array.isArray(bFlatten)){
        if(aFlatten.length === bFlatten.length){
            for(let i=0; i<aFlatten.length;i++){
                if(aFlatten[i] === bFlatten[i]){
                     result = true
                }
            }
        }else{
            result = false
        }
    }
}
return result
}
console.log(deepEqual([1,[2]],[1,[2]]))
console.log(deepEqual([1,[2]],[1,[2,3]]))
console.log(deepEqual({a:1, b:{c:2}}, {a:1, b:{c:2}}))