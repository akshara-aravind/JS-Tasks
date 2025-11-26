import { commonKeys } from "./qn6.ts";

const testCases = [
    {
        input1:{name: "Brad", age: "25"},
        input2:{name: "Titan", place: "mars"},
        expected:['name']
    },
    {
        input1:{name: "Brad", age: "25"},
        input2:{name: "Alexa", age: "20"},
        expected:['name','age']
    },
    {
        input1:{name: "Brad", age: "25"},
        input2:{product:'phone',price:'25000'},
        expected:'There is no common keys'
    },
    {
        input1:{name: "Brad", age: "25"},
        input2:{name: "Alexa", age: "20",place:'mars'},
        expected:['name','age']
    },
]
testCases.forEach((item,index)=>{
    const output = commonKeys(item.input1,item.input2)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`-----${index+1}-----`)
    console.log(`Test ${index+1}:`,pass ?'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})