import { rotateByk } from "./qn2.ts";

const testCases = [
    {
        input:[1,2,3,4,5],
        k:2,
        expected:[4,5,1,2,3]
    },
    {
        input:[1,2,3,4,5],
        k:1,
        expected:[5,1,2,3,4]
    },
    {
        input:[1,2,3,4,5],
        k:5,
        expected:[1,2,3,4,5]
    },
    {
        input:[1,2,3,4,5],
        k:0,
        expected:[1,2,3,4,5]
    },
    {
        input:[1,2,3,4,5],
        k:7,
        expected:'Invalid'
    }
]
testCases.forEach((item,index)=>{
    const output = rotateByk(item.input,item.k)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output:${output}`)
})