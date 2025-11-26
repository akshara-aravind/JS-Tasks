//5. Write a function which calculates sum of unique numbers in an array.
export function uniqueSum(arr:number[]){
    if(!Array.isArray(arr)) return 'Invalid'
    let unique = []
    let repeat:number;
    for(let i=0; i<arr.length;i++){
       for(let j=i+1; j<arr.length;j++){
        if(arr[i] === arr[j]){
            repeat = arr[i]
        }
       }
     if(arr[i] !== repeat){
        unique.push(arr[i])
     }
    }
    let sum = unique.reduce((acc,curr)=>acc+curr,0)
    return sum
}
// console.log(uniqueSum([1,2,3,2]))
