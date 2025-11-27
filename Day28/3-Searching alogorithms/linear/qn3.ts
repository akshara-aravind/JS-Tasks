// 3. Implement below searching algorithms:
// * Linear search
export function linearSearch(arr:number[],targetValue:number){
    if(!Array.isArray(arr)) return 'Invalid'
    for(let i=0; i<arr.length;i++){
        if(typeof(arr[i]) !== 'number') return 'Invalid'
        if(arr[i] === targetValue){
            return `Found value ${targetValue} at index ${i}!`
        }else{
            return 'Value not found'
        }
    }
}
// console.log(linearSearch([12,8,9,11,5,11],11))