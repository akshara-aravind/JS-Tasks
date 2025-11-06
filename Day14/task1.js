//1. Write a function which takes an array of integers and an target. Return indices of the two numbers such that they add up to target, -1 if not found.
import { arrayEquality } from "../util.js"
function twoTargetIndex(arr,target){
    if(!Array.isArray(arr) || typeof(target) !== 'number') return 'Invalid'
    for(let i=0; i<arr.length;i++){
        if(typeof(arr[i]) !== 'number') return 'Invalid'
    }
    for(let i=0; i< arr.length;i++){
        for(let j=i; j<arr.length;j++){
            if(arr[i]+arr[j] === target){
            return [i,j]
        }
    }
    return -1
}
}
console.log(twoTargetIndex([2,7,11,15],26))

const testCases = [
    {
        input:[2,7,11,15],
        target:9,
        expected:[0,1]
    },
    {
        input:[2,4,6,7],
        target:12,
        expected:-1
    },
    {
      input:'1 2 3',
      target:2,
      expected:'Invalid'
    },
    {
        input:[1,3,4],
        target:'4',
        expected:'Invalid'
    },
    {
        input:[{},{}],
        target:3,
        expected:'Invalid'
    },
    {
        input:[3,5,7,null],
        target:8,
        expected:'Invalid'
    },
    {
        input:[[5,7,[3]]],
        target:12,
        expected:'Invalid'
    },
    {
        input:[1,2,3,'9'],
        target:3,
        expected:'Invalid'
    },
    {
        input:[undefined],
        target:1,
        expected:'Invalid'
    },
    {
        input:[0/0],
        target:1,
        expected:-1
    },
    {
        input:[1,4,6,7,+'2'],
        target:5,
        expected:[0,1]
    },
    {
        input:[-2,0,-6,9],
        target:-6,
        expected:[1,2]
    },
    {
        input:[1,23,[4,6,[6]]],
        target:24,
        expected:'Invalid'
    },
    {
        input:123,
        target:123,
        expected:'Invalid'
    },
    {
        input:[0.01,-2,0/0,0.3,0.02],
        target:0.33,
        expected:-1
    },
]
testCases.forEach((item,index)=>{
    const outPut = twoTargetIndex(item.input,item.target)
    const pass = arrayEquality(outPut,item.expected)

    console.log(`------${index+1}------`)
    console.log(`Test ${index+1}:`,pass)
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
    })