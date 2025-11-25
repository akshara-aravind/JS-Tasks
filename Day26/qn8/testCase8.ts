import { objToString } from "./qn8.ts";

const testCases = [
    {
        input:{name:"John", age:30},
        expected:'name=John&age=30'
    },
    {
        input:{a:1,b:2,c:3,d:4},
        expected:'a=1&b=2&c=3&d=4'
    },
    {
        input:{1:'a',2:'b'},
        expected:'1=a&2=b'
    },
    {
        input:{},
        expected:''
    },
    {
        input:{a:+'1',b:2},
        expected:'a=1&b=2'
    }
]
testCases.forEach((item,index)=>{
    const output = objToString(item.input)
    const pass = output === item.expected

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})