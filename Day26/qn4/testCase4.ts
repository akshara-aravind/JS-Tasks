import { camelCase } from "./qn4.ts";

const testCases =[
    {
        input:'hello_world_from_js',
        expected:'helloWorldFromJs'
    },
    {
        input:'_hello_world',
        expected:'HelloWorld'
    },
    {
        input:'__hello',
        expected:'Hello'
    },
    {
        input:'hello_World',
        expected:'helloWorld'
    },
    {
        input:'_w',
        expected:'W'
    }
]
testCases.forEach((item,index)=>{
    const output = camelCase(item.input)
    const pass = output === item.expected

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})