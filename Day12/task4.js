//4. Write a function which takes an array of integers and size values. It should return back sub-arrays where each contains elements in the given size. The last sub-array length can be less than given size.
function subArray(arr,size){
    let result = []
    for(let i=0; i< arr.length;i++){
        let subArray = []
        if(i+1 === size){
            subArray.push(arr[i],)
            // console.log(subArray)
        }
        if(i+1 !== size){
            subArray.push(arr[i])
        }
        result.push(subArray)
    //    if(i+1 === size){
    //     subArray.push(arr[i])
    //     result.push(subArray)
    //     // console.log(subArray)
    //    }
}
return result
}
console.log(subArray([1,2,3,4,5],1))

// function subArray(arr,size){
//     let result = []
//     for(let i=0; i< arr.length;i++){
//         if(i+1 === size){
//             console.log(arr[i])
//         }
//     }
// }
// console.log(subArray([1,2,3],1))
