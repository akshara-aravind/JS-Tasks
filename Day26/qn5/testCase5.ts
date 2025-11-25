import { interSection } from "./qn5.ts";

const testCases = [
    {
        input1:[1,2,3],
        input2:[2,3,4],
        expected:[2,3]
    },
    {
        input1:[1,2,3],
        input2:[4,5,6],
        expected:'No element is common'
    },
    {
        input1:[1,2,3],
        input2:[1,2,3],
        expected:[1,2,3]
    },
    {
        input1:[1,1,2,3],
        input2:[1,2,2,3,3],
        expected:[1,2,3]
    }
]
testCases.forEach((item,index)=>{
    const output = interSection(item.input1,item.input2)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`----${index+1}-----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
    console.log(`Expected : ${item.expected}`)
    console.log(`Output: ${output}`)
})