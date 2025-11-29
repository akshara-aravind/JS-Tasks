import { differenceOfObj } from "./qn9.ts";

const testCases = [
    {
        input1:{ x:1, y:2, z:3 },
        input2:{ x:1, y:4, w:5 },
        expected:{ changed: { y: [ 2, 4 ] }, added: { w: [ 5 ] }, removed: [ 'z' ] }
    },
    {
        input1:{x:1,y:2,z:3},
        input2:{x:1, w:3, c:1},
        expected:{changed: 'No changes',added: { 'w,c': [ 3, 1 ] },removed: [ 'y', 'z' ]}
    },
    {
        input1:{x:1,y:2,z:3},
        input2:{x:1, w:3},
        expected:'Invalid'   
    },
    {
        input1:{x:1},
        input2:{y:2},
        expected:{ changed: 'No changes', added: { y: [ 2 ] }, removed: [ 'x' ] }
    }
]
testCases.forEach((item,index)=>{
    const output = differenceOfObj(item.input1,item.input2)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
})