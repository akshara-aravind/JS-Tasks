import { stringToObj } from "./qn7.ts";

const testCases = [
    {
        input:'?name=John&age=20&active=true',
        expected:{name: "John", age: "20", active: "true"}
    },
    {
        input:'?name=John&age=20&?active=true',
        expected:{name: "John", age: "20", active: "true"}
    },
    {
        input:'name:alexa&age=23',
        expected:'Invalid'
    },
    {
        input:'name=alexa&&age=23',
        expected:'Invalid'
    },
    {
        input:'?name?=John&age=20&active=true',
        expected:{name: "John", age: "20", active: "true"}
    }
]
testCases.forEach((item,index)=>{
    const output = stringToObj(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`----${index+1}-----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
})