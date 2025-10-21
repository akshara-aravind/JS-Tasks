//3 Given an array containing numbers from 1 to n with one missing, find the missing number. You cannot use .includes() or .indexOf() directly.
function missingNum(arr){
    let first = arr[0]
    let second = arr[arr.length-1]
    let full = []
    for(let i = first; i<=second; i++){
        full.push(i)
    }
    for(let i=0; i< full.length; i++){
        if(arr[i] !== full[i]){
            return full[i]
        }
    }
}
console.log(missingNum([1,2,3,5,6]))