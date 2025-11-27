// 1. Implement below sorting algorithms:
//* Bubble Sort 
export function bubbleSort(arr:number[]){
if(!Array.isArray(arr)) return 'Invalid'
for(let i=0; i<arr.length;i++){
    if(typeof(arr[i]) !== 'number') return 'Invalid'
    for(let j=0; j<arr.length;j++){
    if(arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
    }
}
}
return arr
}
// console.log(bubbleSort([1,12,3,5,6]))

