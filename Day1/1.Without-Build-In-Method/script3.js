//myReduce
import { arrayEquality } from "../../util.js"
function myReduce(array,callback,intialValue){
  if(!Array.isArray(array)) return 'Invalid'
  let acc = intialValue
  for(let i =0; i< array.length; i++){
    if(typeof(array[i]) !=='number') return 'Invalid'
  if(acc === undefined){
    acc = array[0]
  }else{
    acc = callback(acc,array[i])
  }
}
return acc
}
console.log('---myReduce---')
// console.log(myReduce([0,2,3,4],(acc,curr) => acc*curr))
// console.log(myReduce([1,2,3,4],(acc,curr) => acc+curr))
// console.log(myReduce([1,2,4],((acc,curr) => acc*curr)))

const testCases = [
    {
        input:[1,2,3,4,5],
        callback: (acc,curr) => acc+curr,
        intialValue: 0,
        expected:15
    },
    {
        input:[1,2,3,5,6],
        callback:(acc,curr) => acc*curr,
        expected:180
    },
    {
        input:[0,2,4],
        callback:(acc,curr) => acc* curr,
        intialValue:1,
        expected:0
    },
    {
      input:[1,2,3,''],
      callback:(acc,curr) => acc*curr,
      expected:'Invalid'
    },
    {
      input:'',
      callback:(acc,curr) => acc+curr,
      expected:'Invalid'
    },
    {
      input:[0,0,0,0],
      callback:(acc,curr) => acc*curr,
      intialValue:1,
      expected:0
    }
]
testCases.forEach((item,index) => {
    let outPut = myReduce(item.input, item.callback,item.intialValue)
    let pass = arrayEquality(outPut,item.expected)

    console.log(`--------${index+1}---------`)
    console.log(`Test ${index+1}:`, pass)
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})