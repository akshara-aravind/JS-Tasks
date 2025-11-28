import { euclideanAlgorithm } from "./qn1.ts"

const testCases = [
    {
        input1:28,
        input2:34,
        expected:2
    },
    {
        input1:120,
        input2:25,
        expected:5
    },
    {
        input1:120,
        input2:120,
        expected:120
    },
    {
        input1:-120,
        input2:25,
        expected:5
    }
]
testCases.forEach((item,index)=>{
    const output = euclideanAlgorithm(item.input1,item.input2)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`-----${index+1}-----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
    console.log(`Expected:${item.expected}`)
    console.log(`Output:${output}`)
})