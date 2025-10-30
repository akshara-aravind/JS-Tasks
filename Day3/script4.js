//4. Write a function which accepts two arrays and a position value, where the values of the second array should be placed in the given position of the first array. The function should return an updated array.

/**
Test cases:
Input: [1, 2, 3], [4, 5, 6], 2
Expected output: [1, 2, 4, 5, 6, 3] 
*/
import { arrayEquality } from "../util.js"
function indexPassing(arr1,arr2,index){
  if(index < 0) return 'Index is not valid'
  if(typeof(index) !=='number') return 'Invalid'
  if(!Array.isArray(arr1,arr2)) return 'Invalid'
  if(typeof(index) !== 'number') return 'Invalid'
  let array =[]
  for(let i=0; i< arr1.length; i++){
    if(typeof(arr1[i]) !== 'number' || typeof(arr2[i]) !== 'number') return 'Invalid'
    if(i < index){
      array.push(arr1[i])
    }else if(i === index){
    array.push(arr2,arr1[i])
    }else if (i > index){
      array.push(arr1[i])
    }
  }
  return array.flat()
}

const testCases = [
  {
    input1:[1,2,3],
    input2:[4,5,6],
    index:2,
    expected:[1,2,4,5,6,3]
  },
  {
    input1:[1,2,3],
    input2:[4,5,6],
    index:3,
    expected:[1,2,3]
  },
  {
    input1:[1,2,3],
    input2:[4,5,6],
    index:0,
    expected:[4,5,6,1,2,3]
  },
  {
    input1:[5,6],
    input2:[4,7],
    index:'12',
    expected:'Invalid'
  },
  {
    input1:{},
    input2:[1,2],
    index:1,
    expected:'Invalid'
  },
  {
    input1:[2,4,5],
    input2:[4,'3',9],
    index:2,
    expected:'Invalid'
  },
  {
    input1:[2,3,'',8],
    input2:[4,5,7],
    index:2,
    expected:'Invalid'
  },
  {
    input1:null,
    input2:[2,3,5],
    index:1,
    expected:'Invalid'
  },
  {
    input1:[2,4,2-3],
    input2:[0,3,5],
    index:2,
    expected:[2,4,0,3,5,-1]
  },
  {
    input1:[3,4,5],
    input2:[5,8.9],
    index:undefined,
    expected:'Invalid'
  },
 {
  input1:[0,0],
  input2:[0,0],
  index:3,
  expected:[0,0]
 },
 {
  input1:[{},{}],
  input2:[2,34,5],
  index:1,
  expected:'Invalid'
 },
 {
  input1:[1,2,4[3,5]],
  input2:[4,6],
  index:2,
  expected:'Invalid'
 },
 {
  input1:[1,23,4,6],
  input2:[2,4,6,7],
  index:-1,
  expected:'Index is not valid'
 },
 {
  input1:[],
  input2:[2,3,5],
  index:2,
  expected:[]
 }
]
testCases.forEach((item,index) => {
  const outPut = indexPassing(item.input1,item.input2,item.index)
  const pass = arrayEquality(outPut,item.expected)

  console.log(`-------${index+1}---------`)
  console.log(`Test ${index+1}:` , pass)
  console.log(`
    Expected: ${item.expected}
    Output:${outPut} `)
})