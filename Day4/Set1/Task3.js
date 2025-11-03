//3. Invert Keys and Values in an Object
let obj = {a:1,b:2}

import { objectEquality } from "../../utilObj.js"
function convertValue(obj){
  if(typeof(obj) !== 'object') return 'Invalid'
  let result = {}
  for(const[key,value] of Object.entries(obj)){
    // console.log(`${value}:"${key}"`)
    result[value] = key
  }
  return result
}
// console.log(convertValue(obj))

const testCases = [
  {
    input:{a:1,b:2},
    expected: {'1':'a','2':'b'}
  },
  {
    input:{1:'a',2:'b'},
    expected:{'a':'1', 'b':'2'}
  }
]
testCases.forEach((item,index)=>{
  const outPut = convertValue(item.input)
  const pass = objectEquality(outPut,item.expected)
  console.log(outPut, item.expected)
  console.log(`------${index+1}------`)
  console.log(`Test ${index+1}:`,pass)
})