//6.  Remove All Falsy Values from an Array (Falsy values: false, 0, "", null, undefined, NaN )
export function removeFalsy(arr:any){
    let result = []
    for(let i=0; i< arr.length;i++){
        if(arr[i] !== false && arr[i] !== 0 && arr[i] !== null && arr[i] !== undefined && !isNaN(arr[i]) && arr[i] !== ''){
           result.push(arr[i])
        }
    }
    return result
}
console.log(removeFalsy([1,0,2,'',3,null,4]))
