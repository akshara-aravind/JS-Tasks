// //4. Write a program which takes an array of numbers as input and interprets it as a number, adds one to it, returns back as an array of numbers.
import { arrayEquality } from "../util.js"
function anotherNum(arr){
  if(!Array.isArray(arr)) return 'Invalid'
  for(let i=0; i<arr.length;i++){
    if(typeof(arr[i]) !== 'number' || arr[i] < 0 || Math.round(arr[i]) !== arr[i] || isNaN(arr[i])) return 'Invalid'
  }
  let result = []
  let newArr = []
    let together = arr.toString().split(',').join('')
    let another = +(together) + 1
  result.push(String(another))
  // console.log(result)
  for(let i=0; i<result.length;i++){
  //  console.log(result[i])
   for(let j=0; j<result[i].length;j++){
     newArr.push(Number((result[i][j])))
   }
  }
  return newArr
}
// console.log(anotherNum([9]))

const testCases =[
    {
        input:[1,2,3],
        expected:[1,2,4]
    },
    {
        input:[9],
        expected:[1,0]
    },
    {
      input:[8,8,9],
      expected:[8,9,0]
    },
    {
      input:123,
      expected:'Invalid'
    },
    {
      input:[1,2,3,'9'],
      expected:'Invalid'
    },
    {
      input:[1,2,null],
      expected:'Invalid'
    },
    {
      input:[''],
      expected:'Invalid'
    },
    {
      input:[-1,2,3],
      expected:'Invalid'
    },
    {
      input:[1,0.2,5],
      expected:'Invalid'
    },
    {
      input:[-1,4,-0.9],
      expected:'Invalid'
    },
    {
      input:[1,12/6],
      expected:[1,3]
    },
    {
      input:[1,2,4,0/0],
      expected: 'Invalid'
    },
    {
      input:[1,2,3,+'2'],
      expected:[1,2,3,3]
    },
    {
      input:[0.2,1/3],
      expected:'Invalid'
    },
    {
      input:[1,3,true],
      expected:'Invalid'
    }
]
testCases.forEach((item,index)=>{
    const outPut = anotherNum(item.input)
    const pass = arrayEquality(outPut,item.expected)

    console.log(`-------${index+1}--------`)
    console.log(`Test ${index+1}:`,pass)
    console.log(`Expected: ${item.expected}`)
    console.log(`Output : ${outPut}`)
  })