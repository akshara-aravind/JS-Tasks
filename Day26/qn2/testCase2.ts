import { mostFreq } from "./qn2.ts"

const testCases = [
    {
        input:[1,2,2,3,3,3,4],
        expected:3
    },
    {
      input:[]
    }
]
testCases.forEach((item,index)=>{
  const output = mostFreq(item.input)
  const pass = JSON.stringify(output) === JSON.stringify(item.expected)

  console.log(`---${index+1}---`)
  console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${output}`)
})