import { mostFreq } from "./qn2.ts"

const testCases = [
    {
        input:[1,2,2,3,3,3,4],
        expected:[3]
    },
    {
        input:[1,2,2,2,2,3,3,3,3,4,4,4,4],
        expected:[2,3,4]
    },
    {
        input:[1,1,1],
        expected:[1]
    },
    {
      input:[1,2,3,4],
      expected:[1,2,3,4]
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