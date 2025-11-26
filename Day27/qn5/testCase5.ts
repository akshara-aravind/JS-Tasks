import { uniqueSum } from "./qn5.ts";

const testCases = [
    {
        input:[1,2,3,2],
        expected:4
    },
    {
        input:[1,1,1],
        expected:0
    },
    {
        input:[-3,-2,-3,-1],
        expected:-3
    },
    {
        input:[0,12.3,0,0.7],
        expected:13
    }
]
testCases.forEach((item,index)=>{
    const output = uniqueSum(item.input)
    const pass = output === item.expected

    console.log(`-----${index+1}-----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})