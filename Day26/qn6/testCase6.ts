import { removeFalsy } from "./qn6.ts";

const testCases = [
    {
        input:[1,0,2,'',3,null,4],
        expected:[1,2,3,4]
    },
    {
        input:[0/0,5],
        expected:[5]
    },
    {
        input:[null,undefined,0/0,false,'',0],
        expected:[]
    },
    {
        input:[2,3,true,5, false],
        expected:[2,3,true,5]
    },
    {
        input:[],
        expected:[]
    }
]
testCases.forEach((item,index)=>{
    const output = removeFalsy(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})