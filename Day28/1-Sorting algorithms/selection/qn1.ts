//  * Selection Sort
export function selectionSort(array:number[]){
    if(!Array.isArray(array)) return 'Invalid'
    let arr = [...array]
    let result = []
    for(let i=0;i<array.length;i++){
        let min = Math.min(...arr)
      result.push(min)
      arr.splice(arr.indexOf(min),1)
    }
    return result
}
// console.log(selectionSort([ 7, 12, 9, 11, 3]))