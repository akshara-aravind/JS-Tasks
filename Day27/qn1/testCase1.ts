import { celsiusTofahrenheit } from "./qn1.ts";

const testCases = [
    {
        input:0,
        expected:32
    },
    {
        input:32,
        expected:89.6
    },
    {
        input:-20,
        expected:-4
    },
    {
        input:34.5,
        expected:94.1
    },
    {
        input:-0.001,
        expected:31.9982
    }
]
testCases.forEach((item,index)=>{
    const output = celsiusTofahrenheit(item.input)
    const pass = output === item.expected

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})