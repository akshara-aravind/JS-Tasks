// 9. Check if Array is Sorted (Ascending or Descending or unsorted)
export function isSorted(array:number[]):string{
    let result:string;
    let original = [...array]
    let asc = array.sort((a,b)=>a-b)
    let originalAsc = [...asc]
    let des = array.sort((a,b)=>b-a)
    let originalDes = [...des]
    // console.log(originalDes)
    // console.log(originalAsc)
    // console.log(original)
    for(let i=0; i<original.length;i++){
    if(original[i] === originalAsc[i]){
        result = 'ascending'
    }else if(original[i] === originalDes[i]){
        result = 'descending'
    }else{
        result = 'unsorted'
    }
    if(original[i] === originalAsc[i] && original[i] === originalDes[i]){
        result = 'Both ascending and descending'
    }
}
return result
}
// console.log(isSorted([3,7,1]))