import { intersectnOfTwoArray } from "./q4.ts";

const testcases = [
   {
    input:[[1,2,3],[2,3,4]],
    expected:[2,3]
   },
   {
    input:[[1,2,4],[3,5,7]],
    expected:'No element is common'
   },
   {
    input:[[1,2,3]],
    expected:'No element is common'
   },
   {
    input:[[1,2,3],[3,5,7],[2,3,5]],
    expected:'Invalid'
   },
   {
    input:[[]],
    expected:'No element is common'
   },
   {
    input:[[1,1,2,2],[1,2]],
    expected:[1,2]
   },
   {
    input:[[1,1,1],[1,1,1]],
    expected:[1]
   }
]
testcases.forEach((item,index)=>{
    const output = intersectnOfTwoArray(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`-------${index+1}-------`)
    console.log(`Test ${index+1}:`,pass ?'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`output: ${output}`)
})