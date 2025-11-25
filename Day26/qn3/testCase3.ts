import { isArmstrong } from "./qn3.ts";

const testCase = [
    {
        input:153,
        expected:true
    },
    {
        input:1247,
        expected:false
    },
    {
        input:-153,
        expected:false
    },
    {
        input:'123',
        expected:'Invalid'
    },
    {
        input:+'153',
        expected:true
    }
]
testCase.forEach((item,index)=>{
    const output = isArmstrong(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})