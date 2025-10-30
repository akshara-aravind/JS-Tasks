//13. Write a program that takes a list of strings as input and returns the longest word among them.
import { arrayEquality } from "../util.js";
function longestWord(arr){
  if(!Array.isArray(arr)) return 'Invalid'
  let longest = arr[0];
  for(let i = 0; i< arr.length; i++){
    if(typeof(arr[i]) !== 'string') return 'Invalid'
    if(arr[i].replaceAll(/\s/g) === '') return 'Invalid'
    if(arr[i].length > longest.length){
      longest = arr[i]
    }
  }
  return longest;
}
console.log(longestWord(['cat','dog','elephent','tiger']))
console.log(longestWord(['apple','banana','orange']))
console.log(longestWord(['programming','is','fun']))

const testCases = [
  {
    input:['cat','dog','elephent','tiger'],
    expected:'elephent'
  },
  {
    input:['apple','banana','orange'],
    expected:'banana'
  },
  {
   input:['orange','banana'],
   expected:'orange'
  },
  {
    input:['programming','is','fun'],
    expected:'programming'
  },
  {
    input:['this','','is','fun'],
    expected:'Invalid'
  },
  {
    input:['this',1,2,3],
    expected:'Invalid'
  },
  {
    input:{},
    expected:'Invalid'
  },
  {
    input:['1','23','786'],
    expected:'786'
  },
  {
    input:true,
    expected:'Invalid'
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:NaN,
    expected:'Invalid'
  },
  {
    input:null,
    expected:'Invalid'
  },
  {
    input:123,
    expected:'Invalid'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:['   this', 'this'],
    expected:'   this'
  }
]
testCases.forEach((item,index) => {
  const outPut = longestWord(item.input)
  const pass = arrayEquality(outPut,item.expected)

  console.log(`-------------${index+1}-------------`)
  console.log(`Test ${index+1}:`,pass)
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})