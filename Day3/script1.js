//1. Write a program that should interpret each array item as a number, and return the sum.
import { arrayEquality } from "../util.js";
function arraySum(number){
  if(!Array.isArray(number)) return 'Invalid input, not array'
  // number.forEach(item => {
  //   if(!Array.isArray(number) || number.length === 0) return 'Invalid'
  //   else{
  //     item.forEach(n => {
  //       if(typeof(n) !== 'number' || isNaN(n)) return 'Invalid'
  //     })
  //   }
  // })

let array = []
  for(let i =0; i< number.length; i++){
    if(!Array.isArray(number[i])) return 'Invalid'
    if(typeof(number[i]) === 'string') return 'Invalid not number'
  let row = ''
  row = number[i].join('')
  array.push(row)
  }
  let sum = array.reduce((acc,curr) => acc+(+curr),0)
  return sum
}
arraySum()
const testCases = [
  {
    input:[[1,2,3],[0,7]],
    expected:130
  },
  {
    input:[[1,2],[4,5],[0,7]],
    expected:64
  },
  {
    input:[1,2,3],
    expected:'Invalid'
  },
  {
    input:[[1,2,3]],
    expected:123
  },
  {
    input:{},
    expected:'Invalid input, not array'
  },
  {
    input:['',[2,3,4]],
    expected:'Invalid'
  },
  {
    input:[[1,2],9],
    expected:'Invalid'
  },
  {
    input:[[123-23],[20,0]],
    expected:300
  },
  {
    input:null,
    expected:'Invalid input, not array'
  },
  {
    input:'',
    expected:'Invalid input, not array'
  },
  {
    input:[['2']],
    expected:'Invalid not number'
  }
]
testCases.forEach((item,index) => {
  const outPut = arraySum(item.input)
  const pass = arrayEquality(outPut,item.expected)

  console.log(`-------${index+1}-------`)
  console.log(`Test ${index+1}:`, pass)
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})