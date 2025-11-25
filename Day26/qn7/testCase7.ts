import { countVowels } from "./qn7.ts";

const testCase = [
    {
        input:'javascript',
        expected:3
    },
    {
        input:'hello world',
        expected:3
    },
    {
        input:'123',
        expected:0
    },
    {
        input:'',
        expected:0
    },
    {
        input:'aeiou',
        expected:5
    }
]
testCase.forEach((item,index)=>{
    const output = countVowels(item.input)
    const pass = output === item.expected

    console.log(`-----${index+1}------`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output:${output}`)
})