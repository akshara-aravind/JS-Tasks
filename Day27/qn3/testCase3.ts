import { singleObj } from "./qn3.ts";

const testCases = [
    {
        input:[{key: "a", value: 1}, {key: "b", value: 2}],
        expected:{'a':1,'b':2}
    },
    {
        input:[{key: "a", value: 1}, {key: "b", value: 2},{key: 'c',value:3}],
        expected:{'a':1,'b':2,'c':3}
    },
    {
        input:[{key:'a',value:1}],
        expected:{'a':1}
    }
]
testCases.forEach((item,index)=>{
    const output = singleObj(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
})