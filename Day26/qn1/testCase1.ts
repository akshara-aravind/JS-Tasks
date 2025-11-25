import { removeDuplication } from "./qn1.ts"
const testCases = [
    {
        input:[1,2,2,3,3,3,4],
        expected:[1,2,3,4]
    },
    {
        input:[1,1.0,1.2,3,5],
        expected:[1,3,5,1.2]
    },
    {
        input:[],
        expected:[]
    },
    {
        input:[1,1,1],
        expected:[1]
    },
    {
        input:[1,-1,-1.0],
        expected:[1,-1]
    }
]
testCases.forEach((item,index)=>{
    const output = removeDuplication(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)
    
    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`, pass ? 'Passed': 'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})