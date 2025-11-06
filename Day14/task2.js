//2. Write a function, given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
import { arrayEquality } from "../util.js"
function targetIndex(arr,target){
    if(!Array.isArray(arr) || typeof(target) !== 'number') return 'Invalid'
    let first = arr[0]
    let last = arr[arr.length-1]
    let full = []
    for(let i=first; i<=last;i++){
        full.push(i)
    }
    for(let i=0; i<arr.length;i++){
        if(typeof(arr[i]) !== 'number') return 'Invalid'
    }
    // console.log(full)
    for(let i=0; i< full.length;i++){
        if(arr[i] === target){
            return i
        }else if(arr[i] !== target){
            if(full[i] === target){
                return i
            }
        }
    }
   return 'No number is found' 
}
// console.log(targetIndex([1,3,5,9],7))
const testCases = [
    {
        input:[1,3,5,6],
        target:5,
        expected:2
    },
    {
        input:[1,3,5,6],
        target:2,
        expected:1
    },
    {
        input:'1 2 3',
        target:4,
        expected:'Invalid'
    },
    {
        input:[1,2,3,8],
        target:7,
        expected:6
    },
    {
        input:[1,3,5,'4'],
        target:6,
        expected:'Invalid'
    },
    {
        input:[1,23,{}],
        expected:'Invalid'
    },
    {
        input:[1,2,4,[5,6]],
        target:6,
        expected:'Invalid'
    },
    {
        input:'',
        expected:'Invalid'
    },
    {
        input:[1,2,3,4,5],
        target:6,
        expected:'No number is found'
    },
    {
        input:[2,3,4,null],
        target:4,
        expected:'Invalid'
    },
    {
        input:[2,4,5,6],
        target:undefined,
        expected:'Invalid'
    },
    {
        input:[''],
        target:1,
        expected:'Invalid'
    },
    {
        input:[1,2,4,false],
        target:4,
        expected:'Invalid'
    },
    {
        input:[0,0,0,0],
        target:0,
        expected:0
    },
    {
        input:[1,2,4,9,4],
        target:4,
        expected:2
    }
]
testCases.forEach((item,index)=>{
    const outPut = targetIndex(item.input,item.target)
    const pass = arrayEquality(outPut,item.expected)

    console.log(`-----${index+1}------`)
    console.log(`Test ${index+1}:`,pass)
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
    })