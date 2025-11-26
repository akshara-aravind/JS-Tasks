// 2. Write a function that rotates an array by k steps. 
export function rotateByk(arr:number[],k:number){
    if(k === 0) return arr
    if(k > arr.length) return 'Invalid'
    let result = []
    result.push(arr.slice(-k))
    result.push(arr.slice(0,arr.length-k))
    return result.flat(Infinity)
}
console.log(rotateByk([1,2,3,4,5],2))

