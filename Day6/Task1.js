//1 Write a function that takes an array of integers and returns a new array where all even numbers appear first, followed by all odd numbers, while maintaining their relative order.
import { arrayEquality } from "../util.js"
function arrInteger(arr){

  if(!Array.isArray(arr)) return 'Invalid'
    let array =[]
    for(let i=0; i< arr.length; i++){
      if(typeof(arr[i]) !== 'number') return 'Invalid'
        if(arr[i]%2 === 0){
         array.push(arr[i])
        }
    }
    for(let i=0; i< arr.length; i++){
      if(arr[i]%2 !== 0){
        array.push(arr[i])
       }
    }
    return array
}
console.log(arrInteger([3,2,4,1,5,8]))

const testCases =[
  {
    input:[3,2,4,1,5,8],
    expected:[2,4,8,3,1,5]
  },
  {
    input:[0,1,3,5,7,8],
    expected:[0,8,1,3,5,7]
  },
  {
    input:[0,0,0],
    expected:[0,0,0]
  },
  {
    input:[1,3,5,'3',8],
    expected:'Invalid'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:[{}],
    expected:'Invalid'
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:[4-2,3-1,5-3],
    expected:[2,2,2]
  },
  {
    input:[true],
    expected:'Invalid'
  },
  {
    input:[1,3,5],
    expected:[1,3,5]
  },
  {
    input:false,
    expected:'Invalid'
  },
  {
    input:[-5,-1,-2,-8,-10],
    expected:[-2,-8,-10,-5,-1]
  },
  {
    input:[],
    expected:[]
  },
  {
    input:123,
    expected:'Invalid'
  },
  {
    input:[10/10],
    expected:[1]
  }
]
testCases.forEach((item,index) => {
  const outPut = arrInteger(item.input)
  const pass = arrayEquality(outPut,item.expected)

  console.log(`-------${index+1}----------`)
  console.log(`Test ${index+1}:`, pass)
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})