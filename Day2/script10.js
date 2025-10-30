//10. Write a program that takes a list of strings as input and returns the longest common prefix among the strings.

// function longestPrefix(arr){
//   let prefix = ''
//   for(let i = 0; i <arr.length; i++){
   
//   }
// }
import { arrayEquality } from "../util.js"
function longestPrefix(arr){
if(!Array.isArray(arr)) return 'Invalid'
  let prefix = arr[0]
  for(let i=1; i< arr.length;i++){
    if(typeof(arr[i]) !== 'string') return 'Invalid'
   while(!arr[i].startsWith(prefix)){
    prefix = prefix.slice(0,-1)
   }
  }
  return (`"${prefix}"`)
}
// console.log(longestPrefix(['flow','flower','flight']))
// longestPrefix('dog','rececar','car')
// longestPrefix('apple','app','application')

const testCases = [
  {
    input:['flower','flow','flight'],
    expected:`"fl"`
  },
  {
    input:['dog','rececar','car'],
    expected:`""`
  },
  {
    input:['apple','app','application'],
    expected:`"app"`
  },
  {
    input:['apple',2.3,9,'orange'],
    expected:'Invalid'
  },
  {
    input:{},
    expected:'Invalid'
  },
  {
    input:123,
    expected:'Invalid'
  },
  {
    input:['  d','  dog', ' dog'],
    expected:`" "`
  },
  {
    input:[''],
    expected:`""`
  },
  {
    input:null,
    expected:'Invalid'
  },
  {
    input:['apple'],
    expected:`"apple"`
  },
  {
    input:['errorType','errorRefernce','syntax'],
    expected:`""`
  },
  {
    input:['playing','crying','dancing'],
    expected:`""`
  },
  {
    input:true,
    expected:'Invalid'
  },
  {
    input:['12three','123four','1234five'],
    expected:`"12"`
  },
  {
    input:['12-5','7','25-18'],
    expected:`""`
  }
]
testCases.forEach((item,index) => {
  const outPut = longestPrefix(item.input)
  const pass = arrayEquality(outPut,item.expected)
  console.log(`-----------${index+1}-------------`)
  console.log(`Test ${index+1}:`, pass)
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})