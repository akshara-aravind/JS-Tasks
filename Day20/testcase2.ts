import { seatArrangement } from "./qn2.ts";
const testcase = [
    {
        input:'ABC',
        expected:[ 'ABC', 'BCA', 'CAB' ]
    },
    {
        input:123,
        expected:'Invalid'
    },
    {
        input:'ABCD',
        expected:['ABCD','BCDA','CDAB','DABC']
    },
    {
        input:'A,B,C',
        expected:['ABC','BCA','CAB']
    },
    {
        input:['abc'],
        expected:'Invalid'
    },
    {
        input:null,
        expected:'Invalid'
    },
    {
        input:true,
        expected:'Invalid'
    },
    {
        input:undefined,
        expected:'Invalid'
    },
    {
        input:'123',
        expected:['123','231','312']
    }
]
testcase.forEach((item,index)=>{
    const output = seatArrangement(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`------${index+1}------`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})