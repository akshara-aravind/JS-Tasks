//4. Write a function which takes an array of integers and size values. It should return back sub-arrays where each contains elements in the given size. The last sub-array length can be less than given size.
// function subArray(arr,size){
//     let result = []
//     for(let i=0; i< arr.length;i++){
//         let subArray = []
//         if(i+1 === size){
//             subArray.push(arr[i],)
//             // console.log(subArray)
//         }
//         if(i+1 !== size){
//             subArray.push(arr[i])
//         }
//         result.push(subArray)
// }
// return result
// }
function subArray(arr,size){
    if(size<0) return 'Invalid'
    if(!Array.isArray(arr)) return 'Invalid'
    let result = []
    let temp = []

    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i]) !== 'number') return 'Invalid'
        temp.push(arr[i])
        // console.log(temp)
        if(temp.length === size){
            result.push(temp)
            temp = []
        }
    }
    if(temp.length >0){
        result.push(temp)
    }
    return result
}
console.log(subArray([1,2,3,4,5],1))

const testCases = [
    {
        input:[1,2,3,4,5],
        size:1,
        expected:[[1],[2],[3],[4],[5]]
    },
    {
        input:[1,2,3,4,5],
        size:3,
        expected:[[1,2,3],[4,5]]
    },
    {
        input:[1,2,3,4,5],
        size:0,
        expected:[[1,2,3,4,5]]
    },
    {
        input:[1,2,3,4,5],
        size:-3,
        expected:'Invalid'
    },
    {
        input:[1,2,'3',5],
        size:1,
        expected:'Invalid'
    },
    {
        input:'1,3,6',
        size:2,
        expected:'Invalid'
    },
    {
        input:123,
        expected:'Invalid'
    },
    {
        input:undefined,
        expected:'Invalid'
    },
    {
        input:NaN,
        expected:'Invalid'
    },
]
testCases.forEach((item,index)=>{
    const outPut = subArray(item.input,item.size)
    const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)
//    console.log(outPut)
//    console.log(pass)
    console.log(`-------${index+1}-------`)
    console.log(`Test ${index+1}:`,pass)
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})