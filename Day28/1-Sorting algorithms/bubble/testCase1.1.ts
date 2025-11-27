import { bubbleSort } from "./qn1.ts";

const testCases = [
    {
        input:[1,12,3,5,6],
        expected:[1,3,5,6,12]
    },
    {
        input:[-12,7,-23,0,34,1],
        expected:[-23,-12,0,1,7,34]
    },
    {
        input:[1,1,1],
        expected:[1,1,1]
    },
    {
        input:[1,2,3,1],
        expected:[1,1,2,3]
    }
]
testCases.forEach((item,index)=>{
    const output = bubbleSort(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
    console.log(`Expected:${item.expected}`)
    console.log(`Output:${output}`)
})