//10. Deep Object Comparison (without JSON.stringify) Write a function deepEqual(a, b) that returns true if two values are deeply equal.
function deepEqual(a:any,b:any){
if(a === b) return true;

if(typeof a !== typeof b) return false;

if(a === null || b === null) return false;

if(Array.isArray(a) && Array.isArray(b)) {
    if(a.length !== b.length) return false;

    for(let i=0; i<a.length; i++){
        if(!deepEqual(a[i],b[i])) return false
    }
    return true
}
if(Array.isArray(a) || Array.isArray(b)) return false;

if(typeof a=== 'object' && typeof b === 'object'){
    const keysA = Object.keys(a)
}
}
console.log(deepEqual([1,[2]],[1,[2]]))
console.log(deepEqual([1,[2]],[1,[2,3]]))
console.log(deepEqual({a:1, b:{c:2}}, {a:1, b:{c:2}}))