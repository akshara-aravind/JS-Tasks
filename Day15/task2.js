//2. Write a function that takes a array of integers where every element appears exactly twice, except for one element which appears only once. The function should find and return that single unique number.
import { arrayEquality } from "../util.js"
function uniqueValue(arr){
    let unique;
    if(!Array.isArray(arr)) return 'Invalid'
    for(let i=0; i<arr.length;i++){
        if(typeof(arr[i]) !== 'number' || isNaN(arr[i])) return 'Invalid'

       unique = arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el))
    //    console.log(unique)
      if(unique === undefined) return 'Not exist unique value'
    }
    return unique
}
console.log(uniqueValue([2,4,2,4,5]))

const testCases =[
    {
        input:[2,4,5,2,4],
        expected:5
    },
    {
        input:[1,2,1,2],
        expected:'Not exist unique value'
    },
    {
        input:123,
        expected:'Invalid'
    },
    {
        input:[2,4,5,'4'],
        expected:'Invalid'
    },
    {
        input:[2,3,5,0/0],
        expected:'Invalid'
    },
    {
        input:[1,2,{}],
        expected:'Invalid'
    },
    {
        input:[-1,-3,-4,-4,-3],
        expected:-1
    },
    {
        input:[1,3,null],
        expected:'Invalid'
    },
    {
        input:[1,2,3,1],
        expected:2
    },
    {
        input:'1 2 3',
        expected:'Invalid'
    },
    {
        input:[1.0,2,4,2,1],
        expected:4
    },
    {
        input:[1,2,+'1'],
        expected:2
    },
    {
        input:[1/2,10,5-4.5],
        expected:10
    },
    {
        input:[1,3,4,true],
        expected:'Invalid'
    },
    {
        input:[4,6,undefined],
        expected:'Invalid'
    },
    {
        input:[1,1,1,2,2,3],
        expected:3
    },
]
testCases.forEach((item,index)=>{
    const outPut = uniqueValue(item.input)
    const pass = arrayEquality(outPut,item.expected)

    console.log(`-----${index+1}-----`)
    console.log(`Test ${index+1}:`,pass)
    console.log(`Expected:${item.expected}`)
    console.log(`Output: ${outPut}`)
 })