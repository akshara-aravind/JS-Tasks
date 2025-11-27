import { linearSearch } from "./qn3.ts";

const testCases = [
    {
        input:[12,8,9,11,5,11],
        value:11,
        expected:'Found value 11 at index 3!'
    },
    {
        input:[-1,-23,0,34,-9],
        value:0,
        expected:'Found value 0 at index 2!'
    },
    {
        input:[1,1,1],
        value:1,
        expected:'Found value 1 at index 0!'
    },
    {
        input:[1,2,3],
        value:4,
        expected:'Value not found'
    }
]
testCases.forEach((item,index)=>{
    const output = linearSearch(item.input,item.value)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`-----${index+1}------`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
    console.log(`Expected:${item.expected}`)
    console.log(`Output:${output}`)
})