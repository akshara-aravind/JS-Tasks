// //5. Write a program to sort a given array of numbers in ascending order. Don't use in-built functions.
// function sort(arr){
//     let array = []
//     let largest = -Infinity
//     for(let i=0; i< arr.length;i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//             array.push(largest)
//         }
//     }
//     return array
// }
import { arrayEquality } from "../util.js"
function sort(arr){
    if(!Array.isArray(arr)) return 'Invalid'
    for(let i=0; i< arr.length;i++){
        if(typeof(arr[i]) !== 'number') return 'Invalid'
        // console.log(i)
        for(let j=0; j<arr.length; j++){
            // console.log(j)
            if(arr[j] > arr[j+1]){
               let temp = arr[j]
               arr[j] = arr[j+1]
               arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(sort([5,4,1,2,3]))

const testCases = [
    {
        input:[5,4,1,2,3],
        expected:[1,2,3,4,5]
    },
    {
        input:[-3,-4,0,2,-12],
        expected:[-12,-4,-3,0,2]
    },
    {
        input:[2,5,0,'2',-2],
        expected:'Invalid'
    },
    {
        input:[{},{}],
        expected:'Invalid'
    },
    {
        input:'',
        expected:'Invalid'
    },
    {
        input:123,
        expected:'Invalid'
    },
    {
        input:[-1.2,3.0,5.9,-12.3],
        expected:[-12.3,-1.2,3.0,5.9]
    },
    {
        input:[''],
        expected:'Invalid'
    },
    {
        input:null,
        expected:'Invalid'
    },
    {
        input:[1,2,8,4,[2,6]],
        expected:'Invalid'
    }
]
testCases.forEach((item,index)=>{
    const outPut = sort(item.input)
    const pass = arrayEquality(outPut,item.expected)

    console.log(`-------${index+1}-------`)
    console.log(`Test ${index+1}:`,pass)
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})