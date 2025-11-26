import { replacesNum } from "./qn8.ts";

const testCases = [
    {
        input:'Room 42 on floor 3',
        expected:'Room ## on floor #'
    },
    {
        input:'Room 2 on floor 01',
        expected:'Room # on floor ##'
    },
    {
        input:'password: 12345',
        expected:'password: #####'
    },
    {
        input:'temperature -12 °C',
        expected:'temperature ### °C'
    }
]
testCases.forEach((item,index)=>{
    const output = replacesNum(item.input)
    const pass = output === item.expected

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
    console.log(`Expected:${item.expected}`)
    console.log(`Output:${output}`)
})