//1 Write a function to remove all the falsy values from the given array
import { arrayEquality } from "../util.js"
function removeFalsy(arr){
  if(!Array.isArray(arr)) return 'Invalid'
  let trueValues = arr.filter((el) => el !=false && el !== 0 && el !== null && el !== undefined && el !== NaN && el !=='' )
    return trueValues
}
console.log(removeFalsy([54,false,null,9,'Hi']))
const testCases = [
    {
        input:[54,false,null,9,'Hi',0],
        expected:[54,9,'Hi']
    },
    {
        input:[false,undefined,null],
        expected:[]
    },
    {
        input:'34 ,true',
        expected:'Invalid'
    },
    {
        input:[true,0],
        expected:[true]
    },
    {
        input:[2,6.9,-4,null,true],
        expected:[2,6.9,-4,true]
    },
    {
        input:{},
        expected:'Invalid'
    },
    {
        input:124,
        expected:'Invalid'
    },
    {
        input:'',
        expected:'Invalid'
    },
    {
        input:[1,2,3],
        expected:[1,2,3]
    },
    {
        input:[1,2,'','Hi'],
        expected:[1,2,'Hi']
    },
    {
        input:[''],
        expected:[]
    },
    {
        input:['1','',' '],
        expected:['1']
    },
]
testCases.forEach((item,index)=>{
    const outPut = removeFalsy(item.input)
    const pass = arrayEquality(outPut,item.expected)

    console.log(`-------${index+1}-------`)
    console.log(`Test ${index+1}:`, pass)
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})
