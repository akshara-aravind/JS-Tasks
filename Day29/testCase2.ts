import { primeNumbers } from "./qn2.ts";

const testCases = [
    {
        input:10,
        expected:[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    },
    {
        input:0,
        expected:[]
    },
    {
        input:-10,
        expected:'Invalid'
    },
    {
        input:12.3,
        expected:'Invalid'
    },
    {
        input:10.0,
        expected:[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    },
    {
        input:1,
        expected:[2]
    }
]
testCases.forEach((item,index)=>{
    const output = primeNumbers(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
    console.log(`Expected:${item.expected}`)
    console.log(`Output:${output}`)
})