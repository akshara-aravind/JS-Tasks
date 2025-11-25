import { isSorted } from "./qn9.ts";

const testCases = [
    {
        input:[1,2,3],
        expected:'ascending'
    },
    {
        input:[3,2,1],
        expected:'descending'
    },
    {
        input:[1,4,2],
        expected:'unsorted'
    },
    {
        input:[-3,-2,-1],
        expected:'ascending'
    },
    {
        input:[1,1,1],
        expected:'Both ascending and descending'
    },
    {
        input:[0],
        expected:'Both ascending and descending'
    }
]
testCases.forEach((item,index)=>{
    const output = isSorted(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`---${index+1}---`)
    console.log(`Test ${index+1}:`, pass ?'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})