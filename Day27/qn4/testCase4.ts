import { converSecondsToText } from "./qn4.ts";

const testCases = [
    {
        input:9000,
        expected:'2 hours 30 minutes 0 seconds'
    },
    {
        input:7000,
        expected:'1 hours 56 minutes 40 seconds'
    },
    {
        input:172900,
        expected:'48 hours 1 minutes 40 seconds'
    },
    {
        input:9000.95,
        expected:'2 hours 30 minutes 0 seconds'
    },
    {
        input:-12000,
        expected:'Invalid input'
    },
    {
        input:0,
        expected:'0 hours 0 minutes 0 seconds'
    }
]
testCases.forEach((item,index)=>{
    const output = converSecondsToText(item.input)
    const pass = output === item.expected

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass ?'Passed':'Failed')
    console.log(`Expected:${item.expected}`)
    console.log(`Output:${output}`)
})