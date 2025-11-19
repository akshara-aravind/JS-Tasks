//4. Write a program to find the intersection of two arrays.
export function intersectnOfTwoArray(arr:number[][]):string | number[]{
    if(arr.length >2 || arr.length <=0) return 'Invalid'
    let arr1:Set<unknown>;
    let arr2:Set<unknown>;
    let result:string  | number[];
    for(let i=0; i<arr.length;i++){
        arr1 = new Set(arr[0])
        arr2 = new Set(arr[1])
        // console.log(arr1,arr2)
    }
    let inter= arr1.intersection(arr2)
    // console.log(inter)
    result = Array.from(inter)
    if(result.length === 0) return 'No element is common'
    return result
}
console.log(intersectnOfTwoArray([[1,2,3],[3,4,6]]))