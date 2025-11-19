import { teamSelection } from "./qn1.ts";

const testCase = [
    {
        input:['a','b','c','d','e'],
        size:3,
        expected:[[ 'a', 'b', 'c' ],[ 'a', 'b', 'd' ],[ 'a', 'b', 'e' ],[ 'a', 'c', 'd' ],[ 'a', 'c', 'e' ],[ 'a', 'd', 'e' ] ,[ 'b', 'c', 'd' ],  [ 'b', 'c', 'e' ],[ 'b', 'd', 'e' ],  [ 'c', 'd', 'e' ]]
    },
    {
        input:['a','b','c','d','e'],
        size:6,
        expected:'Not enough space to form a team'
    },
    {
        input:['a,','b','c'],
        size:0,
        expected:'Team size must be > 0'
    }
]
testCase.forEach((item,index)=>{
    const output = teamSelection(item.input,item.size)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`----${index+1}-----`)
    console.log(`Test ${index+1}:`,pass ?'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})