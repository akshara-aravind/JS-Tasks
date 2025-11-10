//Write a function DeepEqual(a, b) that checks whether two values (objects, arrays, or primitives) are deeply equal.
function DeepEqual(a:number | number[] | string , b:number | number[] | string):boolean{
    if(JSON.stringify(a) === JSON.stringify(b)){
        return true
    }
    return false
}
console.log(DeepEqual({x:1,y:{z:2}},{x:1,y:{z:2}}))
console.log(DeepEqual([1,2,3],[1,2,3])),
console.log(DeepEqual(1,'1'))