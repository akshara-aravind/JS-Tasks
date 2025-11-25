// 1 Remove Duplicates from an Array Without Using Set  Return a new array with unique values.
export function removeDuplication(arr:number[]){
    if(!Array.isArray(arr)) return 'Invalid'
    let dupli:string[];
    let result:number[] =[]
    let freq = {}
    for(let char of arr){
        if(typeof(char) !== 'number') return 'Invalid'
        freq[char] = (freq[char] || 0) + 1
    }
    dupli = Object.keys(freq)
    for(let i=0; i< dupli.length;i++){
        result.push(+(dupli[i]))
    }
    return result
}
console.log(removeDuplication([1,2,2,3,3,3,4]))